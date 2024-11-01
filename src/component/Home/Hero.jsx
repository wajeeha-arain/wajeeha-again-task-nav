import React from "react";

const Hero = () => {
  return (
    // <div className="main-container  bg-gray-100 ">
    //   <div className="flex md:flex-row flex-col justify-between">
    //     <div className=" flex flex-col  items-center justify-start w-3/5 pt-40   ">
    //       <div className="" style={{maxWidth:'65%'}}>
    //          <h1 className="mb-2 text-5xl font-semibold leading-tight  max-md:pt-4 max-md:text-2xl max-md:pl-40 max-sm:w-full px-10 max-md:max-w-full  ">Find a gift for your wife or girlfriend</h1>
    //       <p className="mb-6  max-md:pl-40 pt-8 text-[20px] max-md:text-[14px] max-md:pt-4 pb-6 px-10">
    //         Struggling to find a gift or girlfriend? No problem!
    //       </p>
    //       <a className="text-[#F7941E]   hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full pt-3 ml-10  pb-3 rounded">Find Gift Now</a>
    //      </div>
    //     </div>

    //     <div>
    //       <div className="">
    //         <img
    //           src="https://giftstore.netlify.app/assets/images/Background.png"
    //           className="w-[800px] h-full"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex md:flex-row flex-col-reverse justify-between  bg-gray-100">
    //     <div>
    //       <div className="">
    //         <img
    //           src="https://giftstore.netlify.app/assets/images/Media.png"
    //           className="w-[680px] h-60%"
    //         />
    //       </div>
    //     </div>
    //     <div className=" flex flex-col justify-center w-2/5 md:my-0 my-10 ">
    //       <div className="" style={{maxWidth:'80%'}} >
    //       <h1 className="mb-2 text-5xl font-semibold leading-tight  max-md:pt-4 max-md:text-2xl max-md:pl-40 max-sm:w-full px-10  ">How we work</h1>
    //       <p className="mb-6  max-md:pl-40 pt-8 text-[20px] max-md:text-[14px] max-md:pt-4 px-10 ">
    //       We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.

    //       </p>
    //       <a className="text-[#F7941E] hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] mt-3 ml-10  pb-2 rounded">Find Gift Now</a>
    //      </div>
    //     </div>

        
    //   </div>
    // </div>



<div className="max-w-[1440px] w-full mx-auto">
      <div className="flex justify-between items-center bg-primary md:flex-row flex-col ">
        <div className="  h-full md:w-1/2 w-full">
          <div className="md:max-w-[60%] max-w-full w-full mx-auto md:px-0 px-8 md:py-0 py-14">
            <h1 className="lg:text-6xl font-semibold md:text-3xl text-2xl leading-7 ">
              Find a gift for your wife or girlfriend
            </h1>

            <p className="lg:text-lg md:text-base text-sm mb-5 pt-12 pb-8 pr-2">
              Struggling to find a gift or girlfriend? No problem!
            </p>

            <button className="bg-[#F7941E] text-white px-5 py-3 rounded-md hover:bg-white
             hover:text-[#F7941E] transition-all duration-300 ease-in-out  border border-[#F7941E] " >
              Find Gift Now
            </button>


            {/* <button className="bg-#F7941E text-white px-4 py-2 rounded-md">
              Find Gift Now
            </button> */}
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img src="https://giftstore.netlify.app/assets/images/Background.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-primary  md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full">
          <img src="https://giftstore.netlify.app/assets/images/Media.png" alt="" className="w-full h-full" />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="md:max-w-[70%] max-w-full w-full mx-auto md:px-0 px-8 md:py-0 py-14 ">
            <h1 className="lg:text-6xl font-semibold md:text-3xl text-2xl leading-7">
            How we work
            </h1>

            <p className="llg:text-lg md:text-base mb-5 pt-8 pb-4 md:py-4  text-sm">
            We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.

            </p>
            <button className="bg-[#F7941E] text-white px-5 py-3 rounded-md hover:bg-white
             hover:text-[#F7941E] transition-all duration-300 ease-in-out  border border-[#F7941E] ">
              Find Gift Now
            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Hero;
