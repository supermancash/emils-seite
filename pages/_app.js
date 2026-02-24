import '../styles/globals.css'
import {AppShell, MantineProvider} from "@mantine/core";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import "animate.css";
import {useViewportSize} from "@mantine/hooks";
import { Analytics } from '@vercel/analytics/react';

function MyApp({Component, pageProps}) {
    const { height, width } = useViewportSize();
    const isMobile=height>width;

    return (
        <>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                }}
            >
                <AppShell
                    header={<HeaderComponent/>}
                    footer={<FooterComponent/>}
                >
                <Component {...pageProps} isMobile={isMobile} userAgentHeight={height} userAgentWidth={width}/>
                </AppShell>
            </MantineProvider>
            <Analytics />
        </>
    );
}

export default MyApp
