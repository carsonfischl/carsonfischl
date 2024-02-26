import React from 'react'
import Image from 'next/image'
import bordeaux from '../../public/images/IMG_1076.png'
import Nav from '../../components/Nav'
import Meta from '../../components/Meta'
import langs from '../../public/images/tech6.svg'
import frameworks from '../../public/images/tech7.svg'
import databases from '../../public/images/tech3.svg'
import tools from '../../public/images/tech4.svg'


type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono overscroll-contain'>
            <Nav/>
            <div className='align-middle justify-center items-center justify-items-center w-4/5 m-auto h-100'>
                <div className="items-center flex">
                    <h1 className='text-4xl text-white font-bold font-mono p-4'>Hi!</h1>
                    <h2 className='text-2xl text-white font-bold font-mono p-4'>My name is Carson.</h2>
                </div>
                <p className='font-mono text-white text-xl my-4'>I am a programmer, history buff, numismatist, traveler, and fitness enthusiast</p>
                <p className='font-mono text-white text-xl my-4'>I am currently a graduate student at the University of Bordeaux, studying for my MBA. I am passionate about economics, digital marketing, and the synergies between information technology and business.</p>
                <Image src={bordeaux} alt="bordeaux" width={500} height={500}/>
                <div className="py-8 flex">
                    <div className='justify-centre align-middle m-auto'>
                        <h2 className='text-4xl text-white font-bold font-mono p-4'>Languages</h2>
                        <Image src={langs} alt='langs' className='rounded'/>
                        <br></br>
                        <h2 className='text-4xl text-white font-bold font-mono p-4'>Frameworks</h2>
                        <Image src={frameworks} alt='frameworks' className='rounded'/>
                        <br></br>
                        <h2 className='text-4xl text-white font-bold font-mono p-4'>Databases</h2>
                        <Image src={databases} alt='databases' className='rounded'/>
                        <br></br>
                        <h2 className='text-4xl text-white font-bold font-mono p-4'>Tools</h2>
                        <Image src={tools} alt='tools' className='rounded'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About