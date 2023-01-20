import {Badge, Card, Center, Container, List, Title, Text} from "@mantine/core";

const ExperienceCard = () => {

    return (
        <>
            <Card shadow="xl">
                <Container>
                    <Center><Badge variant="outline" color="dark">Experience</Badge></Center>
                    <Text weight={800}>
                        Professional Experience
                    </Text>
                    <Text weight={800}>
                        Programming Languages
                    </Text>
                    <Center>
                        <Text color="dimmed">JS Frameworks</Text>
                    </Center>
                </Container>
            </Card>
        </>
    );
}

export default ExperienceCard;