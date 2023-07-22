import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Nav = () => {
  return (
    <div>
        <nav className='w-screen h-40 flex align-middle text-align items-center relative top-0 z-10'>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='py-2 px-6 rounded-md hover:bg-pink-500 active:bg-pink-500 font-mono text-white mx-2' href="/work">Work</a>
                <a className='py-2 px-6 rounded-md hover:bg-pink-500 active:bg-pink-500 font-mono text-white mx-2' href="/projects">Projects</a>
                <a className='py-2 px-6 rounded-md hover:bg-pink-500 active:bg-pink-500 font-mono text-white mx-2' href="https://resume.creddle.io/resume/j47o66f6m78">Résumé</a>
            </div>
                <a className="before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-pink-500 relative inline-block" href='/'>
                    <div className="relative text-white text-3xl hover:text-slate-700">Carson Fischl</div>
                </a>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='p-2 rounded-md hover:bg-pink-500 font-mono text-white mx-6' href="https://www.linkedin.com/in/carsonfischl/"><AiOutlineLinkedin size={30}/></a>
                <a className='p-2 rounded-md hover:bg-pink-500 font-mono text-white mx-6' href="https://github.com/carsonfischl"><AiFillGithub size={30}/></a>
                <a className='p-2 rounded-md hover:bg-pink-500 font-mono text-white mx-6' href="https://www.instagram.com/carson6f/"><FiInstagram size={27}/></a>
            </div>
        </nav>
    </div>
  )
}

export default Nav