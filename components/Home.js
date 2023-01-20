import {
    Avatar,
    Center,
    Card,
    Group,
    Stack,
    Title,
    BackgroundImage,
    Container,
    Text,
    SimpleGrid,
    Badge
} from "@mantine/core";
import {useHover, useViewportSize} from "@mantine/hooks";
import {useEffect} from "react";
import {IconBrandLinkedin, IconMail, IconPhone} from "@tabler/icons";
import ContactCard from "./Contact";
import Experience from "./Experience";
import ExperienceCard from "./Experience";


const HomePageComponent = (props) => {
    const {height, width} = useViewportSize();
    const {hovered, ref} = useHover();

    const keyWords = [
        "Web Development", "APIs", "Deployment", "Frontend Development", "UX Design",
        "Data Layer", "Backend Development", "Agile Methodologies"
    ];

    useEffect(() => {
        for (let i = 0; i < keyWords.length; i++) {
            const el = document.getElementById("keywords1" + i);
            const el2 = document.getElementById("keywords2" + i);
            el.className = i % 2 !== 0 ? "offscreen-left" : "offscreen-right-from-left";
            el2.className = i % 2 === 0 ? "offscreen-right" : "offscreen-left-from-right";
            setTimeout(() => {
                el.className = i % 2 !== 0 ? "floating-to-right" : "floating-to-left";
                el2.className = i % 2 === 0 ? "floating-to-left" : "floating-to-right";
            }, Math.random() * 10000)
        }
    }, [])

    //TODO: fix words being rendered on side in phone view
    return (
        <>
            <Card p={0}>
                <BackgroundImage
                    src="star_background.jpg"
                    radius="xl"
                >
                    <SimpleGrid cols={3}>
                        <div className="offscreen-outer">
                            <Stack>
                                <br/>
                                {keyWords.map((title, index) =>
                                    <div id={"keywords1" + index}
                                         key={index} style={{margin: 0}}>
                                        <Text span weight={800} size={props.isMobile ? "md" : "xl"}
                                              style={{overflow: "visible"}} variant="gradient"
                                              gradient={{from: 'indigo', to: 'cyan', deg: 45}}
                                        >
                                            {title}
                                        </Text>
                                    </div>
                                )}
                                <br/>
                            </Stack>
                        </div>
                        <Center>
                            <Avatar
                                src="emil_portrait.jpeg"
                                radius={0.15 * height}
                                size={0.3 * height}
                                style={{zIndex: "3"}}
                            />
                        </Center>
                        <div className="offscreen-outer">
                            <Stack>
                                <br/>
                                {keyWords.reverse().map((title, index) =>
                                    <div style={{margin: 0}} id={"keywords2" + index} key={index}>
                                        <Text span weight={800} size={props.isMobile ? "md" : "xl"}
                                              style={{overflow: "visible"}} variant="gradient"
                                              gradient={{from: 'indigo', to: 'cyan', deg: 45}}
                                        >{title}</Text>
                                    </div>
                                )}
                                <br/>
                            </Stack>
                        </div>
                    </SimpleGrid>
                </BackgroundImage>
            </Card>
            <br/>
            <Center><Badge variant="gradient" size="xl">Welcome to Emil.Triest.DE!</Badge></Center>
            <br/>
            <ExperienceCard/>
            <br/>
            <ContactCard/>
            <br/>
        </>
    );
}

export default HomePageComponent;