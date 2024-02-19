import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import cc from '../../public/images/cc.png'
import weather from '../../public/images/weather.png'
import app from '../../public/images/app.png'
import Image from 'next/image'
import nfa from '../../public/images/nfa.png'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono overscroll-contain'>
            <Nav />
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100'>
                <div className="grid grid-cols-3 gap-6 py-8">
                    <div className='justify-centre align-middle m-auto'>
                        <Image src={nfa} alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>No Fixed Address</h1>
                        <h3 className='font-mono text-white text-2xl my-4'>A Travel Blog</h3>
                        <br></br>
                        <a className='py-2 px-6 rounded-md hover:text-slate-800 bg-pink-500 font-mono text-white mx-2 my-8' href="https://no-fixed-address.netlify.app/">Under Construction</a>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Comitas Collection</h1>
                        <h3 className='font-mono text-white text-2xl my-4'>A Global Historiography through Numismatics</h3>
                        <br></br>
                        <a className='py-2 px-6 rounded-md hover:text-slate-700 bg-pink-500 font-mono text-white mx-2 my-8' href="https://comitas-collection.vercel.app">Check it out</a>
                    </div>
                    <div className='justify-centre align-middle m-auto'>
                        <Image src={cc} alt='Comitas Collection' className='rounded'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index