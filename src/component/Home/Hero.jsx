import React from "react";

const Hero = () => {
  return (
    <div className="main-container ">
      <div className="flex md:flex-row flex-col justify-between">
        <div className=" flex flex-col items-center justify-center w-1/2 md:my-0 my-10 ">
          <div>
             <h1 className="mb-2">Find a gift for your wife or girlfriend</h1>
          <p className="mb-6 ">
            Struggling to find a gift or girlfriend? No problem!
          </p>
          <a className="text-[#F7941E] hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] pb-2 rounded">Find Gift Now</a>
         </div>
        </div>

        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between">
        <div>
          <div className="">
            <img
              src="https://giftstore.netlify.app/assets/images/Background.png"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center w-1/2 md:my-0 my-10 ">
          <div>
             <h1 className="mb-2">Find a gift for your wife or girlfriend</h1>
          <p className="mb-6 ">
            Struggling to find a gift or girlfriend? No problem!
          </p>
          <a className="text-[#F7941E] hover:bg-[#F7941E] hover:text-white flex justify-center transition-all duration-300 ease-in-out items-center border border-[#F7941E]  max-w-[150px] w-full px-2 pt-[6px] pb-2 rounded">Find Gift Now</a>
         </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
