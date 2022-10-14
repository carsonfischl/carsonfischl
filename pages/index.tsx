import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Carson S. Fischl</title>
        <meta name="description" content="Scientist. Hacker. All-Around Eccentric." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  )
}

export default Home
