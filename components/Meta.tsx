import React from 'react'
import Head from 'next/head'

type Props = { title: string, description: string } 

const Meta = (props: Props) => {
  return (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/icon.ico" />
        </Head>
    </div>
  )
}

export default Meta