import React from 'react'
import Nav from '../../../components/Nav'
import Bubbles from '../../../components/Bubbles'
import Meta from '../../../components/Meta'
import { blogposts } from '../../../public/json/blogposts.js'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {}

const Post = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
        <Nav />
            <div className='container mx-auto relative pt-12'>
                <div className='flex flex-col items-center justify-center w-3/5'>
                    <div className='flex flex-col items-middle justify-left'>
                        <div className='flex flex-row items-left justify-left pb-12 mb-12'>
                            <div className='flex flex-col items-left justify-left'>
                                <h1 className='text-4xl text-white font-bold'>1</h1>
                                <p className='text-2xl text-white'>First post</p>
                                <p className='text-2xl text-white'>More stuff</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    </>
  )
}

export default Post