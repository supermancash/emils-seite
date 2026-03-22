import {
    Avatar,
    Badge,
    Button,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { useHover, useViewportSize } from "@mantine/hooks";
import { useCallback, useEffect, useRef, useState } from "react";
import { EpoIntroOverlay } from "./EpoIntroOverlay";
import { IconBrandLinkedin, IconMail, IconPhone, IconTimeline } from "@tabler/icons";
import ContactCard from "./Contact";
import Experience from "./Experience";
import ExperienceCard from "./Experience";
import AcademiaCard from "./Academia";
import ProjectsCard from "./Projects";
import HobbiesCard from "./Hobbies";


const shimmerKeyframes = `
@keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
}
@keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
}
`;

const HomePageComponent = (props) => {
    const { height, width } = useViewportSize();
    const { hovered, ref } = useHover();
    const introRef = useRef(null);
    const [introPhase, setIntroPhase] = useState("pending");
    const onIntroPhase = useCallback((p) => setIntroPhase(p), []);

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = shimmerKeyframes;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const keyWords = [
        "Web Development", "APIs", "Deployment", "Frontend Development", "UX Design",
        "Data Layer", "Backend Development", "Agile Methodologies"
    ];

    return (
        <>

            <Stack>


                <Group align="flex-start" pb="xl">

                    <Avatar
                        src="emil_cv_1x1.jpg"
                        radius={0.15 * height}
                        size={0.3 * height}
                        style={{ zIndex: "3" }}
                    />
                    <Stack >
                        <Title order={1}>Welcome!</Title>
                        <Text>And thank you for the visit :)
                            <Text>I&apos;m Emil, a software architect from Berlin.</Text>

                        </Text>

                        <Group>
                            <Badge variant="outline" color="dark" style={{ textTransform: "none" }}>Age: 23</Badge>
                            <Badge variant="outline" color="dark" style={{ textTransform: "none" }}>Languages: German, English, French & Italian</Badge>
                            <Badge variant="outline" color="dark" style={{ textTransform: "none" }}>Education: B.Sc. Economics & Computer Sciences @ FOM Berlin</Badge>
                            <Badge variant="outline" color="dark" style={{ textTransform: "none" }}>Experience: 5 years</Badge>
                        </Group>

                        <Button
                            variant="light"
                            size="xs"
                            color="gray"
                            onClick={() => introRef.current?.rerun()}
                            sx={{ alignSelf: "flex-start" }}
                        >
                            Rerun animation
                        </Button>

                    </Stack>
                </Group>


                <ExperienceCard />
                <AcademiaCard />
                <ProjectsCard />
                <HobbiesCard />

                <ContactCard />

            </Stack>
            <EpoIntroOverlay
                ref={introRef}
                externalIdleButton
                onPhaseChange={onIntroPhase}
            />
        </>
    );
}

export default HomePageComponent;
