import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

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
      <Image
        src="/images/city.jpg"
        width="400px"
        height="500px"
        alt="Cidade a noite"
      />
    </>
  )
}
