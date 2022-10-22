import React from 'react'

type Props = {}

const Bubbles = (props: Props) => {
  return (
    <section className="sticky">
        <div className="absolute w-screen h-screen z-0">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
    </section>
  )
}

export default Bubbles