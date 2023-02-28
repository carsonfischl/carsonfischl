import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import Running from '../../components/Running'

type Props = {}

const hobbies = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-100 h-screen table-cell align-middle text-align items-center font-mono static'>
        <Nav />
            <div className='align-middle justify-center items-center flex justify-items-center w-4/5 m-auto h-100 overflow-y-hidden'>
                <div className='flex flex-col items-center justify-center w-3/5 h-100'>
                    <div className='flex flex-col items-middle justify-left h-100'>
                        <div className='flex flex-row items-left justify-left pb-12 mb-12'>
                            <div className='flex flex-col items-left justify-left'>
                                <Running />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default hobbies