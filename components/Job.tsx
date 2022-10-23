import React from 'react'

type Props = { title: string, company: string, location: string, start: string, end: string, description: string, tech: string[] }

const Job = (props: Props) => {
  return (
    <div className='job flex align-middle items-center justify-center p-6 border-spacing-1 border-r-4'>
        <div className='relative w-100'>
            <h1 className='text-4xl text-white font-bold'>{props.title}</h1>
        </div>
        <div className='relative w-100'>
            <p className='text-2xl text-white'>{props.company}</p>
        </div>
        <div>
            <p className='text-2xl text-white'>{props.start}</p>
            </div>
        <div>
            <p className='text-2xl text-white'>{props.description}</p>
        </div>
    </div>
  )
}

export default Job