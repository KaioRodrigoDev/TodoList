import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Roupas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
      </div>
    </>
  )
}
