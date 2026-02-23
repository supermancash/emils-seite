import { useState, useMemo } from "react";
import {
    Badge,
    Card,
    Center,
    Group,
    Stack,
    Text,
    TextInput,
    Title,
    ThemeIcon,
    SimpleGrid,
    Paper,
    Divider,
} from "@mantine/core";
import { IconSearch, IconCode, IconServer, IconDatabase, IconBrandDocker, IconUsers, IconBuildingArch } from "@tabler/icons";

const SKILLSETS = [
    {
        name: "Software Architecture",
        color: "cyan",
        icon: IconBuildingArch,
        skills: ["Technical Leadership", "Concept Documentation", "Microservices Architecture", "Event-Driven Architecture", "Service-Oriented Architecture", "Technical Debt Management", "Security & Compliance Management", "API Design", "REST",],
    },
    {
        name: "Frontend Development",
        color: "teal",
        icon: IconCode,
        skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "Svelte", "SvelteKit", "Angular", "AngularJS", "Mantine", "Tailwind CSS", "Bootstrap",
            "React Native", "npm", "yarn", "Playwright",
            "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
        name: "Backend Development",
        color: "orange",
        icon: IconServer,
        skills: ["Node.js", "Express", "Nest.js", "Java", "JavaEE / JakartaEE", "Spring Boot", "Python", "Maven", "Gradle", "Postman", "Matlab", "R"],
    },
    {
        name: "Database Management",
        color: "red",
        icon: IconDatabase,
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",],
    },
    {
        name: "DevOps",
        color: "blue",
        icon: IconBrandDocker,
        skills: ["Docker", "Kubernetes", "CI/CD Automation", "Git", "GitHub Actions", "Jenkins", "AWS", "Azure", "Vercel"],
    },
    {
        name: "Agile Methodologies",
        color: "violet",
        icon: IconUsers,
        skills: ["Scrum", "SAFE", "Kanban", "Jira", "Confluence", "Notion", "Code Reviews", "Pair Programming"],
    },
];

const ExperienceCard = () => {
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return SKILLSETS;
        return SKILLSETS.map((set) => ({
            ...set,
            skills: set.skills.filter((s) => s.toLowerCase().includes(q)),
        })).filter((set) => set.skills.length > 0 || set.name.toLowerCase().includes(q));
    }, [query]);

    const totalMatches = useMemo(() => filtered.reduce((acc, s) => acc + s.skills.length, 0), [filtered]);

    return (
        <Card shadow="xl" radius="md" p="xl" withBorder >
            <Stack spacing="lg">

                <div>
                    <Center mb={4}>
                        <Title order={2}>Skillsets</Title>
                    </Center>
                    <Text color="dimmed" size="sm" align="center">
                        This is a organised list of my skills including frameworks and languages I have worked with either professionally or in personal projects.
                        I have structured them into overarching skillsets for easier navigation.
                        Feel free to use the search bar below to filter the skills by name.
                    </Text>
                </div>

                <TextInput
                    icon={<IconSearch size={16} />}
                    placeholder="Search skills…"
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    radius="md"
                    rightSection={
                        query ? (
                            <Text size="xs" color="dimmed" pr={6}>
                                {totalMatches}
                            </Text>
                        ) : null
                    }
                />

                {filtered.length === 0 ? (
                    <Center py="xl">
                        <Text color="dimmed">No skills matched &ldquo;{query}&rdquo;</Text>
                    </Center>
                ) : (
                    <SimpleGrid
                        cols={3}
                        spacing="md"
                        breakpoints={[
                            { maxWidth: "md", cols: 2 },
                            { maxWidth: "sm", cols: 1 },
                        ]}
                    >
                        {filtered.map(({ name, color, icon: Icon, skills }) => (
                            <Paper key={name} withBorder radius="md" p="md" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                <Group spacing={8} noWrap>
                                    <ThemeIcon color={color} variant="light" size="md" radius="sm">
                                        <Icon size={14} />
                                    </ThemeIcon>
                                    <Text weight={700} size="sm" style={{ lineHeight: 1.2 }}>
                                        {name}
                                    </Text>
                                </Group>
                                <Divider />
                                <Group spacing={6}>
                                    {skills.map((skill) => {
                                        const q = query.trim().toLowerCase();
                                        const isMatch = q && skill.toLowerCase().includes(q);
                                        return (
                                            <Badge
                                                key={skill}
                                                color={color}
                                                variant={isMatch ? "filled" : "light"}
                                                size="sm"
                                                radius="sm"
                                                style={{ textTransform: "none" }}
                                            >
                                                {skill}
                                            </Badge>
                                        );
                                    })}
                                </Group>
                            </Paper>
                        ))}
                    </SimpleGrid>
                )}

            </Stack>
        </Card>
    );
};

export default ExperienceCard;
