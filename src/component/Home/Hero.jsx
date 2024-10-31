import React from "react";

const Hero = () => {
  return (
    <div className="main-container  bg-gray-100 ">
      <div className="flex md:flex-row flex-col justify-between">
        <div className=" flex flex-col  items-center justify-start w-3/5 pt-40   ">
          <div className="" style={{maxWidth:'65%'}}>
             <h1 className="mb-2 text-5xl font-semibold leading-tight  max-md:pt-4 max-md:text-2xl max-md:pl-40 max-sm:w-full px-10 max-md:max-w-full  ">Find a gift for your wife or girlfriend</h1>
          <p className="mb-6  max-md:pl-40 pt-8 text-[20px] max-md:text-[14px] max-md:pt-4 pb-6 px-10">
            Struggling to find a gift or girlfriend? No problem!
          </p>
          <a className="text-[#F7941E]   hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full pt-3 ml-10  pb-3 rounded">Find Gift Now</a>
         </div>
        </div>

        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-[800px] h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between  bg-gray-100">
        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Media.png"
              className="w-[680px] h-60%"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center w-2/5 md:my-0 my-10 ">
          <div className="" style={{maxWidth:'80%'}} >
          <h1 className="mb-2 text-5xl font-semibold leading-tight  max-md:pt-4 max-md:text-2xl max-md:pl-40 max-sm:w-full px-10  ">How we work</h1>
          <p className="mb-6  max-md:pl-40 pt-8 text-[20px] max-md:text-[14px] max-md:pt-4 px-10 ">
          We’ve actually already asked hundreds of women what they want, and made a database with results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.

          </p>
          <a className="text-[#F7941E] hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] mt-3 ml-10  pb-2 rounded">Find Gift Now</a>
         </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
