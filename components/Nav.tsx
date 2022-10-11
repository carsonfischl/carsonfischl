import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className='w-100 h-24 flex bg-slate-400 align-middle text-align'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a className='p-6 rounded-md hover:bg-slate-600' href="/">Home</a>
                <a className='p-6 rounded-md hover:bg-slate-600' href="/about">About</a>
            </div>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                Title
            </div>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a className='p-6 rounded-md hover:bg-slate-600' href="/login">Login</a>
                <a className='p-6 rounded-md hover:bg-slate-600' href="/register">Register</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav