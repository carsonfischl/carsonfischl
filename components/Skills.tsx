import React from 'react'
import Image from 'next/image'
import langs from '../public/images/tech6.svg'
import frameworks from '../public/images/tech7.svg'
import databases from '../public/images/tech3.svg'
import tools from '../public/images/tech4.svg'

function Skills() {
  return (
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
  )
}

export default Skills