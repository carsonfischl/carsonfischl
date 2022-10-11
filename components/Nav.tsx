import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-24 flex align-middle text-align'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a className='py-2 px-6 rounded-md hover:bg-white hover:text-black text-white' href="/">Home</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 text-white' href="/about">About</a>
            </div>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                Title
            </div>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 text-white' href="/login">Login</a>
                <a className='py-2 px-6 rounded-md hover:bg-slate-600 text-white' href="/register">Register</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav