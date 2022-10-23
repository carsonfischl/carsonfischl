import React from 'react'
import Nav from '../../components/Nav'
import Bubbles from '../../components/Bubbles'
import Meta from '../../components/Meta'
import Job from '../../components/Job'
import { jobs } from '../../public/json/jobs.js'


type Props = {}

const index = (props: Props) => {
  return (
    <>
        <Meta title='Carson S. Fischl' description='Scientist. Hacker. All-Around Eccentric.'/>
        <div className='bg-gradient-to-r from-slate-500 to-slate-900 w-screen h-screen table-cell align-middle text-align items-center font-mono fixed'>
        <Nav />
        <div className='flex flex-row m-6'>
        {jobs.map((job) => (
            <Job
                key={job.id}
                title={job.title}
                company={job.company}

                start={job.date}

            />
        ))}
        </div>
        </div>
    </>
  )
}

export default index