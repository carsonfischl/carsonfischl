import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-24 flex align-middle text-align items-center'>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/">Home</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/about">About</a>
            </div>
            <div className='container flex flex-wrap items-center mx-auto justify-center'>
                <h1 className='subpixel-antialiased text-xl font-mono text-white'>Title</h1>
            </div>
            <div className='container flex flex-wrap items-center mx-auto p-2 justify-center'>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/login">Login</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 font-mono text-white mx-2' href="/register">Register</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav