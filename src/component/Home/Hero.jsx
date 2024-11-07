import React from "react";

const Hero = () => {
  return (
<div className="max-w-[1440px] w-full mx-auto">
      <div className="flex justify-between bg-[#F1F1F2] items-center bg-primary md:flex-row flex-col ">
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


         
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img src="https://giftstore.netlify.app/assets/images/Background.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-between bg-[#F1F1F2] items-center bg-primary  md:flex-row flex-col-reverse">
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
