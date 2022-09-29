import {Group, Card, Text, Footer} from "@mantine/core";
import {useEffect, useState} from "react";
import Link from "next/link";


const FooterComponent = () => {
//TODO: make pretty with icons

    return (
        <footer>
            <Card withBorder>
                <Group position="center">
                    <Link href="/impressum" passHref><Text component="a">Impressum</Text></Link>
                </Group>
            </Card>
        </footer>
    );
}

export default FooterComponent;