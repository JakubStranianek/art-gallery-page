import React from 'react'

export default function Home() {
  return (
      <div className='home h-fit flex flex-col items-center md:relative '>
        <div className='w-full flex lg:h-screen'>
          <div className='hidden lg:bg-almostBlack lg:w-1/4 lg:block'></div>
          <div className='bg-gridHerox2m w-full h-60 bg-cover bg-no-repeat md:bg-gridHerox2t md:w-5/6 md:h-[43.75rem] md:bg-contain lg:w-1/2 lg:bg-gridHerox2 lg:bg-cover lg:h-full lg:bg-center'></div>
          <div className='hidden md:bg-pureWhite md:w-1/4 md:block'></div>
        </div>

          <div className="flex flex-col w-5/6 mt-8 md:absolute md:w-[21.188rem] md:h-[25.625rem] md:right-10 md:mt-40 lg:w-3/4 lg:flex-row justify-between lg:right-auto lg:mt-48">
            <h2 className='font-bigShoulder text-almostBlack text-6xl font-black w-10/12 md:w-full md:text-7xl lg:w-1/2 lg:text-8xl lg:mix-blend-difference lg:text-pureWhite z-50'>MODERN ART GALLERY</h2>
            
            <div className='lg:flex flex-col'>
                <p className='font-outfit text-myGrey text-lg mt-8 font-light md:w-80 lg:mt-0 lg:text-base lg:leading-8'>
                  The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
                </p>

                <div className='button cursor-pointer flex mt-8'>
                    <div className='textPart w-52 h-20 bg-almostBlack flex items-center justify-center font-bigShoulder font-extrabold text-xl text-pureWhite tracking-btn'>OUR LOCATION</div>
                    <div className='clickPart w-14 h-20 bg-camel flex items-center justify-center'><svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12"/></svg></div>
                </div>
            </div>
          
          </div>
      </div>
  )
}
