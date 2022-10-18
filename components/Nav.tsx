import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Nav = () => {
  return (
    <div>
        <nav className='w-screen h-40 flex align-middle text-align items-center fixed top-0'>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/">Home</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/login">Projects</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/register">Work</a>
            </div>
                <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <div className="relative text-white text-3xl">Carson S. Fischl</div>
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