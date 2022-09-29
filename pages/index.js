import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emil Triest</title>
        <meta name="description" content="Emil Triest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to emil.triest.de!
        </h1>

        <p className={styles.description}>
          Check out my recent projects:
        </p>
        <a href="http://remoteworkparis.com">Booking site for apartments</a>
        <a href="http://safaripushapi.herokuapp.com">Safari Web Push notifications</a>
        <a href="http://uniecommerce.herokuapp.com">Example Ecommerce application</a>
      </main>
    </div>
  )
}
