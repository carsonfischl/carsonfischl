import React from 'react'
import Meta from '../../components/Meta'
import Nav from '../../components/Nav'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono overscroll-contain content-center'>
            <Nav />
            <div className="self-center justify-center align-middle w-100">
              <iframe src="https://resume.creddle.io/embed/j47o66f6m78" width="827" height="1168" seamless className='self-center'></iframe>
            </div>
        </div>
    </>
  )
}

export default index