import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import Job from '../../components/Job'
import { jobs } from '../../public/json/jobs.js'
import gov from '../../public/images/gov.png'
import hospital from '../../public/images/hospital.png'
import snps from '../../public/images/snps.png'


type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
        <Nav />
            <div className='align-middle justify-center items-center flex justify-items-center'>
                <div className="grid grid-cols-3 gap-4">
                    <div className='text-center'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Engineering Intern</h1>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Synopsys Inc.</h1>
                        <h3 className='text-2xl text-white font-mono p-4'>October 2021 - September 2022</h3>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Data Analyst</h1>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Government of Canada</h1>
                        <h3 className='text-2xl text-white font-mono p-4'>March 2021 - August 2021</h3>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Bioinformatics Intern</h1>
                        <h1 className='text-4xl text-white font-bold font-mono p-4'>Ottawa Hospital Research Institute</h1>
                        <h3 className='text-2xl text-white font-mono p-4'>May 2020 - August 2020</h3>
                    </div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                </div>
            </div>
            <Bubbles />
        </div>
    </>
  )
}

export default index