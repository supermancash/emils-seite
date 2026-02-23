import { Card, Center, Stack, Title, Group, Text, Anchor, Badge, Divider } from "@mantine/core";
import { IconFileText, IconExternalLink } from "@tabler/icons";
import Link from "next/link";

const papers = [
    {
        title: "Bachelor Thesis",
        description: "B.Sc. Economics & Computer Sciences",
        file: "Bachelor_Thesis.pdf",
        tag: "Thesis",
    },
    {
        title: "Developing Metrics for Fullstack Javascript Frameworks",
        description: "A comparative analysis of relevant metrics for fullstack javascript frameworks",
        file: "Fullstack_Metrics.pdf",
        tag: "Academic Paper",
    },
    {
        title: "Investigation of NoSQL Databases for Multimedia Applications",
        description: "Analysis of NoSQL database systems for the use case of multimedia applications",
        file: "NoSQL_Databases.pdf",
        tag: "Academic Paper",
    },
];

export default function AcademiaCard() {
    return (
        <>
            <Card shadow="xl" radius="md" p="xl" withBorder>
                <Stack spacing="lg">
                    <Center mb={4}>
                        <Title order={2}>Academic Publications</Title>
                    </Center>

                    <Stack spacing="sm">
                        {papers.map((paper, i) => (
                            <div key={paper.file}>
                                <Link
                                    href={`/academic-publications?pdfUrl=/academic_papers/${paper.file}`}
                                    passHref
                                    legacyBehavior
                                >
                                    <Anchor
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
                                            <Group position="apart" noWrap>
                                                <Group noWrap spacing="sm">
                                                    <IconFileText size={22} stroke={1.5} />
                                                    <div>
                                                        <Text weight={600} size="sm">{paper.title}</Text>
                                                        <Text size="xs" color="dimmed">{paper.description}</Text>
                                                    </div>
                                                </Group>
                                                <Group spacing="xs" noWrap>
                                                    <Badge variant="light" size="sm">{paper.tag}</Badge>
                                                    <IconExternalLink size={16} stroke={1.5} />
                                                </Group>
                                            </Group>
                                        </Card>
                                    </Anchor>
                                </Link>
                                {i < papers.length - 1 && <Divider mt="sm" />}
                            </div>
                        ))}
                    </Stack>
                </Stack>
            </Card>
        </>
    );
}
