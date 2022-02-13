import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1>Hello World Next.js</h1>
    </div>
  )
}
