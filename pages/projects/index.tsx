import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import cc from '../../public/images/cc.png'
import weather from '../../public/images/weather.png'
import app from '../../public/images/app.png'
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono'>
            <Nav />
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100'>
                <div className="grid grid-cols-3 gap-6 py-8">
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h1 className='italic font-mono text-white text-4xl my-4'>Comitas Collection</h1>
                        <h3 className='italic font-mono text-white text-2xl my-4'>A Global Historiography through Numismatics</h3>
                        <a className='py-2 px-6 rounded-md hover:text-slate-700 bg-pink-500 font-mono text-white mx-2 my-8' href="https://comitas-collection.vercel.app">Under Construction</a>
                    </div>
                    <div className=''>
                        <Image src={cc} alt='Comitas Collection' className='rounded'/>
                    </div>
                    <div className=''>
                        <Image src={app} alt='personal app' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h1 className='italic font-mono text-white text-4xl my-4'>Personal App</h1>
                        <h3 className='italic font-mono text-white text-2xl my-4'>Some Personal Propagandizing</h3>
                        <a className='py-2 px-6 rounded-md hover:text-slate-800 bg-pink-500 font-mono text-white mx-2 my-8' href="https://play.google.com/store/apps/details?id=com.carson.app">Under Construction</a>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h1 className='italic font-mono text-white text-4xl my-4'>WeatherMe-LTE</h1>
                        <h3 className='italic font-mono text-white text-2xl my-8'>A Hardware Hack for a Mobile Weather Station</h3>
                        <a className='py-2 px-6 rounded-md hover:text-slate-700 bg-pink-500 font-mono text-white mx-2 my-8' href="https://cuhacking2020.tauheed-elahee.com/">The Site</a>
                    </div>
                    <div className=''>
                        <Image src={weather} alt='WeatherMe-LTE' className='rounded'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default index