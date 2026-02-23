import { Badge, Card, Center, Container, Group, Stack, Text, Title } from "@mantine/core";
import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons";

const ContactCard = () => {

    return (
        <>
            <Card shadow="xl" radius="md" p="xl" withBorder >
                <Stack spacing="lg">

                    <div>
                        <Center mb={4}>
                            <Title order={2}>Contact</Title>
                        </Center>
                    </div>
                    <Text>
                        Feel free to contact me if you have questions or would like to chat!
                    </Text>
                    <Stack>
                        <Group>
                            <IconMail />
                            <Text color="dimmed" component="a"
                                href="mailto:emil@triest.de">
                                Emil@Triest.DE
                            </Text>
                        </Group>
                        <Group>
                            <IconPhone />
                            <Text color="dimmed" component="a" href="tel:+4917672576806">
                                +49 176 72 57 68 06
                            </Text>
                        </Group>
                        <Group>
                            <IconBrandLinkedin />
                            <Text color="dimmed" component="a"
                                href="https://www.linkedin.com/in/emil-triest-6521331a6/">
                                Connect with LinkedIn
                            </Text>
                        </Group>
                    </Stack>
                </Stack>

            </Card>
        </>
    );
}

export default ContactCard;