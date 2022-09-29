import {Group, Text, Header, Center} from "@mantine/core";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons";


const HeaderComponent = () => {

    return (
        <>
            <Header height={60} p="md" style={{height: "10vh"}}>
                <Group position="apart">
                    <Group>
                        <Link href="/" passHref>
                            <Text style={{cursor: "pointer"}} size="xl">Emil Triest</Text>
                        </Link>
                    </Group>
                    <Group>

                        <Link href="/projects" passHref><Text component="a">| Projects</Text></Link>

                        <Text component="a" href="https://www.linkedin.com/in/emil-triest-6521331a6/" target="_blank">
                            <Group>
                                |<IconBrandLinkedin/>
                            </Group>
                        </Text>

                        <Text component="a" href="https://github.com/supermancash/" target="_blank">
                            <Group>
                                |<IconBrandGithub/>
                            </Group>
                        </Text>
                    </Group>
                </Group>
            </Header>
        </>

    );
}

export default HeaderComponent;