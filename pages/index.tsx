import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Bubbles from '../components/Bubbles'
import Meta from '../components/Meta'
import Sig from '../components/Sig'
import Typewriter from '../components/Typewriter'

const Home: NextPage = () => {
  return (
    <>
      <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
      <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
        <Nav />
        <Sig />
        <Bubbles />
      </div>
    </>
  )
}

export default Home
