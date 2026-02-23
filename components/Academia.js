import { Card, Center, Stack, Title } from "@mantine/core";

export default function AcademiaCard() {

    return (
        <>
            <Card shadow="xl" radius="md" p="xl" withBorder >
                <Stack spacing="lg">

                    <div>
                        <Center mb={4}>
                            <Title order={2}>Academic Publications</Title>
                        </Center>
                    </div>
                </Stack>
            </Card>
        </>
    )
}