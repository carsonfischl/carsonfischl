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
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100'>
                <div className="grid grid-cols-3 gap-6">
                    <div className=''>01</div>
                    <div className=''>02</div>
                    <div className=''>03</div>
                </div>
            </div>
        </div>
        <Bubbles />
    </>
  )
}

export default index