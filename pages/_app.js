import '../styles/globals.css'
import {AppShell, MantineProvider} from "@mantine/core";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import "animate.css";

function MyApp({Component, pageProps}) {

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
                <Component {...pageProps} />
                </AppShell>
            </MantineProvider>
        </>
    );
}

export default MyApp
