import { keyframes } from "@emotion/react";
import { Box, Button } from "@mantine/core";
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

const kfOverlayOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

const kfWordIn = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
`;

const STORAGE_KEY = "epo-intro-animation-seen";

const FIRST_SENTENCE = "A static resume tells you what I've done.";
const SECOND_SENTENCE = "Let me show you how I build:";
const WORDS = [
    ...FIRST_SENTENCE.trim().split(/\s+/),
    ...SECOND_SENTENCE.trim().split(/\s+/),
];
const SECOND_SENTENCE_START = FIRST_SENTENCE.trim().split(/\s+/).length;
const PAUSE_AFTER_FIRST_MS = 500;
const WORD_COUNT = WORDS.length;
const SLOW = 3;
const STAGGER_MS = 70 * SLOW;

const wordDelayMs = (i) =>
    i * STAGGER_MS + (i >= SECOND_SENTENCE_START ? PAUSE_AFTER_FIRST_MS : 0);
const WORD_FADE_MS = 420 * SLOW;
const HOLD_AFTER_MS = 600 * SLOW;
const OVERLAY_FADE_OUT_MS = 450 * SLOW;

export const EpoIntroOverlay = forwardRef(function EpoIntroOverlay(
    { externalIdleButton = false, onPhaseChange },
    ref
) {
    const [phase, setPhase] = useState("pending");
    const [playKey, setPlayKey] = useState(0);
    const dismissTimer = useRef();

    const clearDismissTimer = () => {
        if (dismissTimer.current) {
            clearTimeout(dismissTimer.current);
            dismissTimer.current = undefined;
        }
    };

    const finishAndPersist = () => {
        try {
            localStorage.setItem(STORAGE_KEY, "1");
        } catch {
            /* ignore */
        }
        setPhase("idle");
    };

    const scheduleDismiss = useCallback(() => {
        clearDismissTimer();
        const wordPhase =
            wordDelayMs(WORD_COUNT - 1) + WORD_FADE_MS + HOLD_AFTER_MS;
        dismissTimer.current = setTimeout(() => {
            setPhase("exiting");
        }, wordPhase);
    }, []);

    const rerun = useCallback(() => {
        clearDismissTimer();
        setPlayKey((k) => k + 1);
        setPhase("overlay");
    }, []);

    useImperativeHandle(ref, () => ({ rerun }), [rerun]);

    useEffect(() => {
        onPhaseChange?.(phase);
    }, [phase, onPhaseChange]);

    useEffect(() => {
        try {
            if (!localStorage.getItem(STORAGE_KEY)) {
                setPhase("overlay");
            } else {
                setPhase("idle");
            }
        } catch {
            setPhase("overlay");
        }
    }, []);

    useEffect(() => {
        if (phase !== "overlay") return;
        scheduleDismiss();
        return clearDismissTimer;
    }, [phase, playKey, scheduleDismiss]);

    if (phase === "pending") {
        return null;
    }

    if (phase === "idle") {
        if (externalIdleButton) {
            return null;
        }
        return (
            <Button
                variant="subtle"
                size="xs"
                color="gray"
                onClick={rerun}
                sx={{ alignSelf: "flex-start" }}
            >
                Rerun animation
            </Button>
        );
    }

    const overlayShell = (opts) => (
        <Box
            key={opts.boxKey}
            sx={(theme) => ({
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing.md,
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? "rgba(15, 15, 18, 0.94)"
                        : "rgba(250, 250, 252, 0.97)",
                backdropFilter: "blur(8px)",
                ...(opts.sxExtra || {}),
            })}
            onAnimationEnd={opts.onAnimationEnd}
        >
            <Box
                component="div"
                sx={(theme) => ({
                    maxWidth: 640,
                    fontWeight: 500,
                    fontSize: "clamp(1.5rem, 4.5vw, 2.35rem)",
                    lineHeight: 1.5,
                    letterSpacing: "-0.02em",
                    color:
                        theme.colorScheme === "dark"
                            ? theme.white
                            : theme.black,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.35em",
                })}
            >
                {opts.lines.map((line, idx) => (
                    <Box key={idx} component="div" sx={{ display: "block" }}>
                        {line}
                    </Box>
                ))}
            </Box>
        </Box>
    );

    if (phase === "exiting") {
        return (
            <>
                {overlayShell({
                    boxKey: `${playKey}-exit`,
                    sxExtra: {
                        opacity: 1,
                        animation: `${kfOverlayOut} ${OVERLAY_FADE_OUT_MS}ms ease-in forwards`,
                    },
                    onAnimationEnd: finishAndPersist,
                    lines: [
                        WORDS.slice(0, SECOND_SENTENCE_START).map((word, i) => (
                            <Box
                                component="span"
                                key={`${playKey}-exit-a-${i}`}
                                sx={{
                                    display: "inline-block",
                                    marginRight: "0.35em",
                                }}
                            >
                                {word}
                            </Box>
                        )),
                        WORDS.slice(SECOND_SENTENCE_START).map((word, j) => (
                            <Box
                                component="span"
                                key={`${playKey}-exit-b-${j}`}
                                sx={{
                                    display: "inline-block",
                                    marginRight: "0.35em",
                                }}
                            >
                                {word}
                            </Box>
                        )),
                    ],
                })}
            </>
        );
    }

    return overlayShell({
        boxKey: `${playKey}-in`,
        lines: [
            WORDS.slice(0, SECOND_SENTENCE_START).map((word, i) => (
                <Box
                    component="span"
                    key={`${playKey}-a-${i}-${word}`}
                    sx={{
                        display: "inline-block",
                        marginRight: "0.35em",
                        opacity: 0,
                        animation: `${kfWordIn} ${WORD_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                        animationDelay: `${wordDelayMs(i)}ms`,
                    }}
                >
                    {word}
                </Box>
            )),
            WORDS.slice(SECOND_SENTENCE_START).map((word, j) => {
                const i = j + SECOND_SENTENCE_START;
                return (
                    <Box
                        component="span"
                        key={`${playKey}-b-${i}-${word}`}
                        sx={{
                            display: "inline-block",
                            marginRight: "0.35em",
                            opacity: 0,
                            animation: `${kfWordIn} ${WORD_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                            animationDelay: `${wordDelayMs(i)}ms`,
                        }}
                    >
                        {word}
                    </Box>
                );
            }),
        ],
    });
});
