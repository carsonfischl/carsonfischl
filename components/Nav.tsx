import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Nav = () => {
  return (
    <div>
        <nav className='w-screen h-24 flex align-middle text-align items-center fixed top-0'>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/">Home</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/login">Projects</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/register">Work</a>
            </div>
            <div className='container flex flex-wrap items-center mx-auto justify-center'>
                <h1 className='subpixel-antialiased text-3xl font-mono text-white'>Carson S. Fischl</h1>
            </div>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
            <a className='p-2 rounded-md hover:bg-slate-600 font-mono text-white mx-6' href="https://www.linkedin.com/in/carsonfischl/"><AiOutlineLinkedin size={30}/></a>
                <a className='p-2 rounded-md hover:bg-slate-600 font-mono text-white mx-6' href="https://github.com/carsonfischl"><AiFillGithub size={30}/></a>
                <a className='p-2 rounded-md hover:bg-slate-600 font-mono text-white mx-6' href="https://www.instagram.com/carson6f/"><FiInstagram size={27}/></a>
            </div>
        </nav>
    </div>
  )
}

export default Nav