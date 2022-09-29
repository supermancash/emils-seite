import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePageComponent from "../components/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emil Triest</title>
        <meta name="description" content="Emil's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageComponent/>
      </main>
    </div>
  )
}
