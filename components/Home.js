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
    })

    //TODO:_fix_cool_animation_phone_view
    return (
        <>
            <Card p={0}>
                <BackgroundImage
                    src="star_background.jpg"
                    radius="xl" fluid
                >
                    <SimpleGrid cols={3}>
                        <Stack>
                            <br/>
                            {keyWords.map((title, index) =>
                                <div id={"keywords1" + index}
                                     key={index} style={{margin: 0}}>
                                    <Text span weight={800} size={props.isMobile ? "md" : "xl"}
                                          style={{overflow: "visible"}} variant="gradient"
                                          gradient={{from: 'indigo', to: 'cyan', deg: 45}}
                                    >{title}</Text>
                                </div>
                            )}
                            <br/>
                        </Stack>
                        <Center>
                            <Avatar
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQH7R9jDO5Fc4w/profile-displayphoto-shrink_800_800/0/1662393556888?e=1669852800&v=beta&t=j1_tfPcQ0nnyd45BFIaprVlQf-nB-ti8Q4Xbt_9Bbvg"
                                radius={0.15 * height}
                                size={0.3 * height}
                                style={{zIndex: "3"}}
                            />
                        </Center>
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
                    </SimpleGrid>
                </BackgroundImage>
            </Card>
            <br/>
            <Center><Title align="center">Welcome to Emil.Triest.DE!</Title></Center>
            <br/>
            <Card shadow="xl">
                <Container>
                    <Center><Badge variant="outline" color="dark">Contact</Badge></Center>
                    <br/>
                    <Text>
                        Feel free to contact me if you would like to to reach out, or better yet, want to
                        realise <b>your</b> next project!
                    </Text>
                    <br/>
                    <Stack>
                        <Group>
                            <IconMail/>
                            <Text color="dimmed" component="a"
                                                href="mailto:emil@triest.de">
                                Emil@Triest.DE
                            </Text>
                        </Group>
                        <Group>
                            <IconPhone/>
                            <Text color="dimmed" component="a" href="tel:+4917672576806">
                                +49 176 72 57 68 06
                            </Text>
                        </Group>
                        <Group>
                            <IconBrandLinkedin/>
                            <Text color="dimmed" component="a" href="https://www.linkedin.com/in/emil-triest-6521331a6/">
                                Connect with LinkedIn
                            </Text>
                        </Group>
                    </Stack>
                </Container>
            </Card>
        </>
    );
}

export default HomePageComponent;