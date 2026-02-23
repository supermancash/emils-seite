import { useState, useEffect } from "react";
import {
    Card,
    Center,
    Stack,
    Title,
    Text,
    ActionIcon,
    Group,
    ThemeIcon,
    Box,
    UnstyledButton,
} from "@mantine/core";
import {
    IconChevronLeft,
    IconChevronRight,
    IconCode,
    IconBook,
    IconFish,
    IconRun,
    IconBallFootball,
    IconBallTennis,
    IconFlag,
    IconChessBishop,
    IconWaveSine,
    IconHeartbeat,
} from "@tabler/icons";

const hobbies = [
    {
        name: "Coding",
        description: "Building things is my biggest passion — side projects, open source, or just tinkering with a new stack at midnight.",
        icon: IconCode,
        color: "blue",
        gradient: ["#228be6", "#1971c2"],
    },
    {
        name: "Surfing",
        description: "Living in Martinique makes it easy. Nothing beats the feeling of catching a clean wave in the Caribbean.",
        icon: IconWaveSine,
        color: "cyan",
        gradient: ["#15aabf", "#0c8599"],
    },
    {
        name: "Golf",
        description: "A sport that teaches patience and precision — two skills that translate surprisingly well to software engineering.",
        icon: IconFlag,
        color: "green",
        gradient: ["#40c057", "#2f9e44"],
    },
    {
        name: "Padel",
        description: "Fast, social, and addictive. Padel is my go-to sport for a competitive hit with friends.",
        icon: IconBallTennis,
        color: "orange",
        gradient: ["#fd7e14", "#e8590c"],
    },
    {
        name: "Jogging",
        description: "Early morning runs are my way to clear my head and start the day with energy and focus.",
        icon: IconRun,
        color: "red",
        gradient: ["#fa5252", "#e03131"],
    },
    {
        name: "Chess",
        description: "I love the strategic depth of chess — the endless complexity packed into 64 squares never ceases to fascinate me.",
        icon: IconChessBishop,
        color: "dark",
        gradient: ["#495057", "#343a40"],
    },
    {
        name: "Football",
        description: "A lifelong fan and weekend player. Football brings together the best of teamwork and individual brilliance.",
        icon: IconBallFootball,
        color: "teal",
        gradient: ["#12b886", "#0ca678"],
    },
    {
        name: "Fishing",
        description: "A perfect excuse to slow down, enjoy nature, and wait patiently — good preparation for debugging sessions.",
        icon: IconFish,
        color: "indigo",
        gradient: ["#4c6ef5", "#3b5bdb"],
    },
    {
        name: "Reading",
        description: "Favourite author: John Grisham. A gripping legal thriller is the best way to wind down after a long day.",
        icon: IconBook,
        color: "violet",
        gradient: ["#7950f2", "#6741d9"],
    },
];

export default function HobbiesCard() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(null);
    const [animating, setAnimating] = useState(false);

    const navigate = (dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setActive((prev) =>
                dir === "next"
                    ? (prev + 1) % hobbies.length
                    : (prev - 1 + hobbies.length) % hobbies.length
            );
            setDirection(null);
            setAnimating(false);
        }, 220);
    };

    const hobby = hobbies[active];
    const HobbyIcon = hobby.icon;

    return (
        <Card shadow="xl" radius="md" p="xl" withBorder>
            <style>{`
                @keyframes slideInFromRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInFromLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                .hobby-slide-right {
                    animation: slideInFromRight 0.28s ease both;
                }
                .hobby-slide-left {
                    animation: slideInFromLeft 0.28s ease both;
                }
            `}</style>

            <Stack spacing="lg">
                <Center>
                    <Title order={2}>Hobbies</Title>
                </Center>

                <Group align="center" position="center" spacing="md" noWrap>
                    <ActionIcon
                        variant="light"
                        color="gray"
                        radius="xl"
                        size="lg"
                        onClick={() => navigate("prev")}
                        style={{ flexShrink: 0 }}
                    >
                        <IconChevronLeft size={20} />
                    </ActionIcon>

                    <Box
                        key={active}
                        className={
                            direction === "next"
                                ? "hobby-slide-right"
                                : direction === "prev"
                                ? "hobby-slide-left"
                                : "hobby-slide-right"
                        }
                        style={{
                            flex: 1,
                            minHeight: 180,
                            borderRadius: 12,
                            background: `linear-gradient(135deg, ${hobby.gradient[0]}, ${hobby.gradient[1]})`,
                            padding: "32px 24px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 12,
                            boxShadow: `0 8px 32px ${hobby.gradient[0]}44`,
                        }}
                    >
                        <ThemeIcon
                            size={64}
                            radius="xl"
                            style={{
                                background: "rgba(255,255,255,0.18)",
                                backdropFilter: "blur(4px)",
                                border: "2px solid rgba(255,255,255,0.3)",
                                color: "#fff",
                            }}
                        >
                            <HobbyIcon size={32} stroke={1.5} />
                        </ThemeIcon>

                        <Title
                            order={3}
                            style={{ color: "#fff", textAlign: "center", marginTop: 4 }}
                        >
                            {hobby.name}
                        </Title>

                        <Text
                            size="sm"
                            style={{
                                color: "rgba(255,255,255,0.88)",
                                textAlign: "center",
                                maxWidth: 340,
                                lineHeight: 1.6,
                            }}
                        >
                            {hobby.description}
                        </Text>
                    </Box>

                    <ActionIcon
                        variant="light"
                        color="gray"
                        radius="xl"
                        size="lg"
                        onClick={() => navigate("next")}
                        style={{ flexShrink: 0 }}
                    >
                        <IconChevronRight size={20} />
                    </ActionIcon>
                </Group>

                <Group position="center" spacing={8}>
                    {hobbies.map((_, i) => (
                        <UnstyledButton
                            key={i}
                            onClick={() => {
                                if (i === active || animating) return;
                                setDirection(i > active ? "next" : "prev");
                                setAnimating(true);
                                setTimeout(() => {
                                    setActive(i);
                                    setDirection(null);
                                    setAnimating(false);
                                }, 220);
                            }}
                            style={{
                                width: i === active ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                background:
                                    i === active
                                        ? hobby.gradient[0]
                                        : "#ced4da",
                                transition: "all 0.3s ease",
                                cursor: i === active ? "default" : "pointer",
                            }}
                        />
                    ))}
                </Group>

                <Text
                    size="xs"
                    color="dimmed"
                    align="center"
                    style={{ marginTop: -4 }}
                >
                    {active + 1} / {hobbies.length}
                </Text>
            </Stack>
        </Card>
    );
}
