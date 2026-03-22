import Head from "next/head";
import HomePageComponent from "../components/Home";

const SITE_URL = "https://emil.triest.de";

const pageTitle =
  "Emil Alexander Triest | Software architect, Berlin";
const pageDescription =
  "Emil Alexander Triest: software architect from Berlin. Personal site with experience, projects, and contact.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emil Alexander Triest",
  url: `${SITE_URL}/`,
  jobTitle: "Software Architect",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  sameAs: [
    "https://www.linkedin.com/in/emil-triest-6521331a6/",
    "https://instagram.com/emil.triest",
  ],
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Emil Triest, Emil Alexander Triest, software architect Berlin, Emil Triest developer"
        />
        <meta name="author" content="Emil Triest" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emil Triest" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:image"
          content={`${SITE_URL}/emil_1x1_round.png`}
        />
        <meta property="og:image:alt" content="Emil Triest" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/emil_1x1_round.png`}
        />

        <link rel="shortcut icon" href="/emil_1x1_round.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Head>

      <main>
        <HomePageComponent />
      </main>
    </div>
  );
}
