import { Card, Center, Stack, Title, Text, Badge, Group, Anchor } from "@mantine/core";
import { IconExternalLink, IconWorldWww } from "@tabler/icons";

const projects = [
    {
        title: "Lead Generator",
        url: "https://leadgenerator.tech",
        tag: "SaaS Platform",
    },
];

export default function ProjectsCard() {
    return (
        <>
            <Card shadow="xl" radius="md" p="xl" withBorder>
                <Stack spacing="lg">
                    <Center mb={4}>
                        <Title order={2}>Personal Projects</Title>
                    </Center>

                    <Stack spacing="md">
                        My most recent project is a SaaS platform that enables users to leverage voice AI for B2B lead generation. Using twilio to send and receive calls, and a customisable voice AI model that can make cold calls to prospective clients, that not only sound human, but also feel human:
                        {projects.map((project) => (
                            <Anchor
                                key={project.url}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline={false}
                                style={{ display: "block" }}
                            >
                                <Card
                                    radius="md"
                                    p="md"
                                    withBorder
                                    style={{
                                        cursor: "pointer",
                                        transition: "box-shadow 0.15s ease, transform 0.15s ease",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = "";
                                        e.currentTarget.style.transform = "";
                                    }}
                                >
                                    <Stack spacing="sm">
                                        <Group position="apart" noWrap>
                                            <Group noWrap spacing="sm">
                                                <IconWorldWww size={22} stroke={1.5} />
                                                <div>
                                                    <Text weight={600} size="sm">{project.title}</Text>
                                                    <Text size="xs" color="dimmed">{project.url}</Text>
                                                </div>
                                            </Group>
                                            <Group spacing="xs" noWrap>
                                                <Badge variant="light" size="sm" style={{ textTransform: "none" }}>{project.tag}</Badge>
                                                <IconExternalLink size={16} stroke={1.5} />
                                            </Group>
                                        </Group>

                                        <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #e9ecef" }}>
                                            <iframe
                                                src={project.url}
                                                title={project.title}
                                                style={{
                                                    width: "100%",
                                                    height: "340px",
                                                    border: "none",
                                                    display: "block",
                                                    pointerEvents: "none",
                                                }}
                                                loading="lazy"
                                            />
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                    </Stack>
                                </Card>
                            </Anchor>
                        ))}
                    </Stack>
                </Stack>
            </Card>
        </>
    );
}