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
            <div className='container relative mx-auto pt-12 grid grid-cols-3'>
    
            </div>
        </div>
    </>
  )
}

export default index