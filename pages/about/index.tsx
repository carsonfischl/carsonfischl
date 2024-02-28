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
                <p className='font-mono text-white text-xl my-4'>I am a programmer, history buff, numismatist, traveler, and fitness enthusiast.</p>
                <p className='font-mono text-white text-xl my-4'>I am currently a graduate student at the University of Bordeaux, studying for my MBA. I am passionate about economics, digital marketing, and the synergies between information technology and business.</p>
                <div className="align-center">
                  <Image src={bordeaux} alt="bordeaux" className='justify-center align-middle flex m-5'/>
                </div>
                <div className="py-8 items-center justify-center">
                  <div className="grid grid-cols-4 gap-20 w-100 my-4">
                      <div className='justify-centre align-top m-auto flex'>
                          <h2 className='text-4xl text-white font-mono p-4'>Languages</h2>
                    </div>
                      <div className='justify-top align-top m-auto flex'>
                          <h2 className='text-4xl text-white font-mono p-4'>Frameworks</h2>
                      </div>
                      <div className='justify-top align-top m-auto flex'>
                          <h2 className='text-4xl text-white font-mono p-4'>Databases</h2>
                      </div>
                      <div className='justify-center align-top m-auto flex'>
                          <h2 className='text-4xl text-white font-mono p-4'>Tools</h2>
                      </div>
                    </div>
                  <div className="grid grid-cols-4 gap-20 w-100 my-8">
                    <div className='justify-centre align-top m-auto flex'>
                        <Image src={langs} alt='langs' className='rounded'/>
                  </div>
                    <div className='justify-top align-top m-auto flex'>
                        <Image src={frameworks} alt='frameworks' className='rounded'/>
                    </div>
                    <div className='justify-top align-top m-auto flex'>
                        <Image src={databases} alt='databases' className='rounded'/>
                    </div>
                    <div className='justify-centre align-top m-auto flex'>
                        <Image src={tools} alt='tools' className='rounded'/>
                    </div>
                  </div>
                    {/* <div className='justify-centre align-middle m-auto contents w-100'>
                        <div className="justify-center align-middle flex">
                          <h2 className='text-4xl text-white font-bold font-mono p-4'>Languages</h2>
                          <Image src={langs} alt='langs' className='rounded'/>
                        </div>
                        <br></br>
                        <div className="justify-center align-middle flex">
                          <h2 className='text-4xl text-white font-bold font-mono p-4'>Frameworks</h2>
                          <Image src={frameworks} alt='frameworks' className='rounded'/>
                        </div>
                        <br></br>
                        <div className="justify-center align-middle flex">
                          <h2 className='text-4xl text-white font-bold font-mono p-4'>Databases</h2>
                          <Image src={databases} alt='databases' className='rounded'/>
                        </div>
                        <br></br>
                        <div className="justify-center align-middle flex">
                          <h2 className='text-4xl text-white font-bold font-mono p-4'>Tools</h2>
                          <Image src={tools} alt='tools' className='rounded'/>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About