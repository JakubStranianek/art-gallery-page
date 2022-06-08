import React from 'react'

export default function Main() {
  return (
    <div className='main mt-32 flex justify-center'>
        <div className="w-4/5 grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className='h-80 bg-grid1x2m bg-cover md:col-span-1 w-96'></div>
        <div className='h-56'>
                <h2 className='font-bigShoulder text-5xl font-black uppercase'>
                Your Day at the Gallery
                </h2>

                <p className='font-outfit text-lg text-myGrey font-light mt-5'>
                    Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                </p>
            </div>
            <div className='h-[30rem] bg-grid2x2m bg-cover'></div>
            <div className='h-52 bg-grid3x2m bg-cover'></div>
            <div className='h-72 bg-almostBlack flex flex-col items-center justify-center'>
            <h2 className='font-bigShoulder w-4/5 text-5xl font-black text-pureWhite uppercase'>
                     COME & BE INSPIRED
                </h2>

                <p className='font-outfit text-lg w-4/5 text-pureWhite font-light mt-5'>
                    Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.
                </p>
            </div>
        </div>
    </div>
  )
}
