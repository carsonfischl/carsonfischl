import React from 'react'
import Image from 'next/image'
import bordeaux from '../../public/images/IMG_1076.png'
import Nav from '../../components/Nav'
import Meta from '../../components/Meta'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono overscroll-contain'>
            <Nav/>
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100'>
                <div className="grid grid-cols-3 gap-6 py-8">
                    <div className='justify-centre align-middle m-auto'>
                        <Image src={bordeaux} alt='travel blog' className='rounded'/>
                    </div>
                    <h1 className='col-span-2 align-middle text-center justify-center m-auto py-8 text-2xl'>Hi! My name is Carson.</h1>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Languages</h3>
                        <Image src="https://skillicons.dev/icons?i=py,js,html,css,c,cpp,java,haskell,r" alt='travel blog' className='rounded'/>
                    </div> 
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Frameworks</h3>
                        <Image src="https://skillicons.dev/icons?i=electron,flask,nextjs,qt,react" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Databases</h3>
                        <Image src="https://skillicons.dev/icons?i=mongodb,mysql,sqlite" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Version control</h3>
                        <Image src="https://skillicons.dev/icons?i=github,git,gitlab" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Ancillary tools</h3>
                        <Image src="https://skillicons.dev/icons?i=bootstrap,latex,nginx,nodejs,postman,raspberrypi,selenium,svg,tensorflow,vercel,vim,vscode" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>I can be found on</h3>
                        <Image src="https://skillicons.dev/icons?i=gmail,instagram,discord,linkedin,stackoverflow,twitter" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Stats</h3>
                        <Image src="https://github-readme-stats.vercel.app/api?username=carsonfischl&rank_icon=github" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Trophies</h3>
                        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=carsonfischl&hide=html,css,scss" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='col-span-2 align-middle text-center justify-center m-auto py-8'>
                        <h3 className='font-mono text-white text-2xl my-4'>Leetcode</h3>
                        <Image src="https://leetcard.jacoblin.cool/carson6f" alt='travel blog' className='rounded'/>
                    </div>
                    <div className='justify-centre align-middle m-auto'>
                        <Image src={bordeaux} alt='' className='rounded'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About