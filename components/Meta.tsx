import React from 'react'
import Head from 'next/head'
import icon from '../public/images/icon.ico'

type Props = { title: string, description: string } 

const Meta = (props: Props) => {
  return (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="../public/images/icon.ico" />
            <meta property="og:title" content="Carson S. Fischl"></meta>
            <meta property="og:site_name" content="Carson S. Fischl"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="og:url" content="carsonfischl.vercel.app"></meta>
            <meta property="og:image" content="carsonfischl.vercel.app/images/IMG_1398.png"></meta>
            <meta property="og:image" content="carsonfischl.vercel.app/images/IMG_1398.png"></meta>
            <meta property="og:description" content="Scientist. Hacker. Eccentric."></meta>
        </Head>
    </div>
  )
}

export default Meta