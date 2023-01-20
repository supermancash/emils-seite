import {Badge, Card, Center, Container, Group, Stack, Text} from "@mantine/core";
import {IconBrandLinkedin, IconMail, IconPhone} from "@tabler/icons";

const ContactCard = () => {

    return (
        <>
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
                            <Text color="dimmed" component="a"
                                  href="https://www.linkedin.com/in/emil-triest-6521331a6/">
                                Connect with LinkedIn
                            </Text>
                        </Group>
                    </Stack>
                </Container>
            </Card>
        </>
    );
}

export default ContactCard;