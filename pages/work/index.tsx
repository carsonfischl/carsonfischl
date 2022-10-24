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
            <div className='flex flex-col mr-6 pr-6 font-mono text-white overflow-y-auto max-h-screen'>
                <div className='align-middle justify-center'>
                    <h1>Synopsys</h1>
                    <h3>October 2021 - August 2022</h3>
                </div>
                <img src='/images/snps.png' alt="snps" className='rounded-full flex ring-pink-500 w-30 h-18 object-contain'/>
                    <ul className='py-6 font-mono font-white'>
                        <li className='py-6 font-mono text-white'>• Simulated and debugged DDR PHY releases for production chips for major industry clients to mitigate schedule risk.</li>
                        <li className='py-6 font-mono text-white'>• Implemented swizzling features in LPDDR4/3 PHYs to expedite customer implementation in their SoC designs.</li>
                        <li className='py-6 font-mono text-white'>• Contributed to building a complex Jira-Wrike ticket synchronization script to expedite internal workflows and assist in long term project planning.</li>
                    </ul>
            </div>
            <div className='flex flex-col mx-6 p-6 overflow-y-auto max-h-screen'>
                <ul>
                    <li className='py-6 font-mono text-white'>• Was at the forefront of stakeholder outreach for Canada's COVID-19 testing program, dealing with small businesses, NGOs, and federal, provincial and municipal government officials.</li>
                    <li className='py-6 font-mono text-white'>• Implemented a data capture pipeline for COVID-19 testing data in Canadian workplaces, allowing the Deputy Minister's office view cases numbers and track contagion across geographic areas.</li>
                    <li className='py-6 font-mono text-white'>• Oversaw UAT testing, data validation, and data analysis on large datasets to assure data integrity and successful data pipelining from a public frontend.</li>
                </ul>
                <img src='/images/gov.png' alt="gov" className='rounded-full ring-pink-500 object-contain w-30 h-30'/>
            </div>
            <div className='flex flex-col ml-6 pl-6 mr-4 overflow-y-auto max-h-screen'>
            <img src='/images/hospital.png' alt="hospital" className='rounded-full ring-pink-500 object-contain w-30 h-30'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo totam cum dignissimos voluptates sint ipsum vel, autem ratione obcaecati fuga. Sequi laudantium aut mollitia minima minus, at illo ducimus reprehenderit.</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default index