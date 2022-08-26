import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Document from './_document'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Capture Jesus' message='He captures me and keeps me alive.' />
    </div>
  )
}
