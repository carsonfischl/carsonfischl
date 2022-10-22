import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
            <Nav />
        </div>
    </>
  )
}

export default index