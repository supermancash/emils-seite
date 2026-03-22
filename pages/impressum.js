import Head from "next/head";
import { Anchor, Stack, Text, Title } from "@mantine/core";

const SITE_URL = "https://emil.triest.de";

const pageTitle = "Impressum | Emil Triest";
const pageDescription =
    "Impressum und rechtliche Angaben zu emil.triest.de (Emil Alexander Triest, Berlin).";

export default function Impressum() {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${SITE_URL}/impressum`} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Emil Triest" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={`${SITE_URL}/impressum`} />
                <meta property="og:locale" content="de_DE" />
            </Head>

            <main>
                <Stack spacing="lg" maw={720}>
                    <Title order={1}>Impressum</Title>

                    <section>
                        <Title order={2} size="h4">
                            Angaben zum Inhaber
                        </Title>
                        <Text>
                            Emil Alexander Triest
                            <br />
                            Westendallee 97A, 14052 Berlin
                            <br />
                            Deutschland
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Kontakt
                        </Title>
                        <Text>
                            E-Mail:{" "}
                            <Anchor href="mailto:emil@triest.de">emil@triest.de</Anchor>
                            <br />
                            Telefon:{" "}
                            <Anchor href="tel:+4917672576806">+49 176 72 57 68 06</Anchor>
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Verantwortlich für den Inhalt
                        </Title>
                        <Text>
                            Emil Alexander Triest
                            <br />
                            (Anschrift wie oben)
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Haftung für Inhalte
                        </Title>
                        <Text>
                            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für
                            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                            kann jedoch keine Gewähr übernommen werden. Als
                            Diensteanbieter bin ich gemäß den geltenden Gesetzen für
                            eigene Inhalte auf diesen Seiten nach den allgemeinen
                            Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung
                            fremder übermittelter oder gespeicherter Informationen
                            besteht nicht.
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Haftung für Links
                        </Title>
                        <Text>
                            Diese Website enthält ggf. Verweise (Links) auf Websites
                            Dritter. Auf deren Inhalte habe ich keinen Einfluss; deshalb
                            kann für diese fremden Inhalte keine Gewähr übernommen
                            werden. Für die Inhalte der verlinkten Seiten ist stets der
                            jeweilige Anbieter verantwortlich.
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Urheberrecht
                        </Title>
                        <Text>
                            Die durch den Seitenbetreiber erstellten Inhalte und Werke
                            auf dieser Website unterliegen dem deutschen Urheberrecht.
                            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
                            der schriftlichen Zustimmung des jeweiligen Urhebers bzw.
                            Autors.
                        </Text>
                    </section>

                    <section>
                        <Title order={2} size="h4">
                            Hosting
                        </Title>
                        <Text>
                            Diese Website wird auf Vercel gehostet: Vercel Inc., 440 N Barranca
                            Ave #4133, Walnut, CA 91789, USA (
                            <Anchor
                                href="https://vercel.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Datenschutzerklärung von Vercel
                            </Anchor>
                            ).
                        </Text>
                    </section>

                </Stack>
            </main>
        </div>
    );
}
