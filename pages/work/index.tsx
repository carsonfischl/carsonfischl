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
        <div className='container mx-auto relative pt-12 grid grid-cols-3'>
            <div className='flex flex-col'>
                <img src='/images/snps.png' alt="snps" className='rounded-full ring-pink-500 w-30 h-30'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quo pariatur dolores veritatis libero reprehenderit, dignissimos accusamus nisi, ipsum praesentium doloremque minima ipsa officia culpa architecto deserunt similique ut ullam.</p>
                <img src='/images/snps.png' alt="snps" className='rounded-full ring-pink-500 w-30 h-30'/>
            </div>
            <div className='flex flex-col'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, id temporibus deserunt iusto maxime tempora blanditiis voluptas totam modi quis eius commodi. Saepe distinctio ad, cumque amet tempora libero blanditiis.</p>
                <img src='/images/snps.png' alt="snps" className='rounded-full ring-pink-500 w-30 h-30'/>
            </div>
            <div className='flex flex-col'>
            <img src='/images/snps.png' alt="snps" className='rounded-full ring-pink-500 w-30 h-30'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo totam cum dignissimos voluptates sint ipsum vel, autem ratione obcaecati fuga. Sequi laudantium aut mollitia minima minus, at illo ducimus reprehenderit.</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default index