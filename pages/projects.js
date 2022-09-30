import {Center, Card, SimpleGrid, Text, Title, Badge} from "@mantine/core";

const projectsPage = (props) => {
    const projectUrls = [
        {
            name: "Booking site for parisian apartments",
            url: "https://remoteworkparis.com",
            description: "Internationalised platform for booking parisian apartments. Similar to airbnb but on a smaller scale"
        },
        {
            name: "Association for Digitization",
            url: "https://dibcoe-mvp.vercel.app/",
            description: "Web page to attract, inspire and excite visitors regarding all topics related to the DIBCOE association"
        },
        {
            name: "Ecommerce Example",
            url: "https://uniecommerce.herokuapp.com",
            description: "An example ecommerce application developed at university as presentable web project"
        }

    ]

    return (
        <>
            <br/>
            <Title align="center">Check out my recent projects!</Title>
            <br/>
            <SimpleGrid cols={2} breakpoints={[{maxWidth: 600, cols: 1}]}>
                {projectUrls.map((project, mapIndex) =>
                    <Card key={mapIndex} shadow="xl" withBorder>
                        <br/>
                        <Center><Badge color="dark" size="lg" variant="outline">{project.name}</Badge></Center>
                        <br/>
                        <Center>
                        <iframe
                            style={props.isMobile ? { height: "70vh", width: "90vw"} : { height: "70vh", width: "45vw"}}
                            src={project.url}
                        />
                        </Center>
                        <br/>

                        <Center><Text color="dimmed">{project.description}</Text></Center>

                        <br/>

                    </Card>
                )}

            </SimpleGrid>
        </>
    )
}

export default projectsPage;