import React from "react";

export default function Main() {
  return (
    <div className="main mt-32 flex justify-center pb-44">
      <div className="w-5/6 flex flex-col justify-evenly">
        <div className="md:flex md:flex-row-reverse justify-between">
          <div className="h-80 bg-grid1x2m bg-cover bg-center md:bg-grid1x2t md:w-[25rem] md:h-[25rem] lg:bg-grid1x2 lg:md:w-2/3"></div>
          <div className="h-56 mt-4 md:w-56 md:h-80 md:flex md:flex-col md:justify-center md:items-center lg:w-80">
            <h2 className="font-bigShoulder text-6xl font-black uppercase md:text-5xl ">
              Your Day at the Gallery
            </h2>

            <p className="font-outfit text-lg text-myGrey font-light mt-5">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>

        <div className="mt-4 md:flex md:flex-row justify-between">
            <div className="h-[30rem] bg-grid2x2m bg-center bg-cover md:bg-grid2x2t md:w-[25rem] md:h-[45rem] lg:bg-grid2x2 lg:w-3/5"></div>

             <div className="mt-4 md:flex md:flex-col md:justify-between md:mt-0 lg:w-1/3">
                <div className="h-52 bg-grid3x2m bg-cover bg-center md:bg-grid3x2t md:w-72 md:h-80 lg:bg-grid3x2 lg:w-full"></div>
                <div className="mt-4 h-72 bg-almostBlack flex flex-col items-center justify-center md:w-72 md:h-96 lg:w-full">
                <h2 className="font-bigShoulder w-4/5 text-6xl font-black text-pureWhite uppercase md:text-5xl">
                    COME & BE INSPIRED
                </h2>

                <p className="font-outfit text-lg w-4/5 text-pureWhite font-light mt-5">
                    Wander through our distinct collections and find new insights about
                    our artists. Dive into the details of their creative process.
                </p>
                </div>
                </div>
             </div>
        </div>
        </div>
  );
}
