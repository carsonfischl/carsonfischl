import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Bubbles from '../components/Bubbles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Carson S. Fischl</title>
        <meta name="description" content="Scientist. Hacker. All-Around Eccentric." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono'>
        <Nav />
        <Bubbles />
      </div>
    </div>
  )
}

export default Home
