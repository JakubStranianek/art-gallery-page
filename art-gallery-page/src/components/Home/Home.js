import React from 'react'

export default function Home() {
  return (
      <div className='home h-screen flex flex-col items-center md:relative'>
        <div className='w-full'>
          <div className='hidden'></div>
          <div className='bg-gridHerox2m w-full h-60 bg-cover bg-no-repeat md:bg-gridHerox2t md:w-3/5 md:h-[43.75rem]'></div>
          <div className='hidden md:bg-pureWhite w-1/4'></div>
        </div>

          <div className="flex flex-col w-5/6 mt-8 md:absolute">
            <h2 className='font-bigShoulder text-6xl font-black md:w-3/5 md:text-7xl'>MODERN ART GALLERY</h2>
            <p className='font-outfit text-lg mt-8 font-light md:w-80'>
              The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
            </p>

            <div className='button cursor-pointer flex mt-8'>
                <div className='textPart w-52 h-20 bg-almostBlack flex items-center justify-center font-bigShoulder font-extrabold text-xl text-pureWhite tracking-btn'>OUR LOCATION</div>
                <div className='clickPart w-14 h-20 bg-camel flex items-center justify-center'><svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12"/></svg></div>
            </div>
          </div>
      </div>
  )
}
