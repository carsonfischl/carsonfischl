import React from 'react'
import Meta from '../../components/Meta'
import Nav from '../../components/Nav'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono'>
            <Nav />
            <div className="self-center justify-center align-middle w-100 grid pb-12 pt-6">
              <iframe src="https://carsonfischl.vercel.app/images/bwResumeEnglish.pdf" width="827" height="1168" className='self-center align-middle justify-center w-100 pt-12 pb-12'></iframe>
              <iframe src="https://carsonfischl.vercel.app/images/bwResumeFrancais.pdf" width="827" height="1168" className='self-center align-middle justify-center w-100 pt-12 pb-12'></iframe>
            </div>
        </div>
    </>
  )
}

export default index