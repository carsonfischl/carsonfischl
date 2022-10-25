import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import { blogposts } from '../../public/json/blogposts.js'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {}

const Blog = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
        <Nav />
            <div className='container mx-auto relative pt-12'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'> 
                        {blogposts.map((blogpost) => (
                            <div className='flex flex-row items-center justify-left border-b-4 pb-12 mb-12'>
                                <div className='flex flex-col items-left justify-left'>
                                    <h1 className='text-4xl text-white font-bold font-mono p-4'>{blogpost.title}</h1>
                                    <p className='text-2xl text-white font-mono p-4'>{blogpost.date}</p>
                                    <p className='text-2xl text-white font-mono p-4'>{blogpost.description}</p>
                                </div>
                                <div className='justify-center m-6 align-middle'>
                                    <a className='flex-col bg-white text-black font-bold py-2 px-4 rounded' href={blogpost.href}>Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Bubbles />
    </>
  )
}

export default Blog