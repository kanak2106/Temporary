import React from 'react';
import '../index.css'

function Banner() {
  return (
    <>
       <div className="mt-28 w-full p-20 bg-white-100  flex">
            <div className="flex flex-col  justify-center">
              <h1 className='absolute flex items-end text-pink-500  font-normal font-AksaraBaliGalang text-5xl'>Diagnose. Recover.</h1>
                <h1 className='absolute flex items-end mx-8 mt-24  text-pink-500  font-normal font-AksaraBaliGalang text-5xl '>Regenerate.</h1>
               <div>
                <p className='absolute my-20 mx- 4 text-pink-500  font-normal flex items-end'>Extending a proactive helping hand to Breast Cancer <br/> patients on their recovery journey.</p>
               </div>
                {/* <h1 className="absolute w-503   left-164  flex items-end text-blue-700 font-normal font-semibold   leading-80 font-AksaraBaliGalang text-4xl  ">Diagnose. Recover.</h1><br/>
                <h1 className="absolute w-503  left-164  flex items-end text-blue-700 font-normal font-semibold   leading-80 font-AksaraBaliGalang text-4xl  ">Regenerate.</h1>
                <div className="mt-80">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Get started
                    </button> */}
                     {/* <div>
                    <img  src="src\Components\c-img.png" width="500"  height="500" alt="S" /> 
                    </div> */}
                
            </div>
        </div>
    </>
  )
}

export default Banner;
