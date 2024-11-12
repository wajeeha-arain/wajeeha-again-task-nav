import React from 'react'

const Linebar = () => {
  return (
    <div>
    <div className='bg-[#F7941E] max-h-[440px] min-h-[240px] max-w-[1440px] w-full 
    mx-auto flex justify-center max-ms:h-[400px] 
    max-md:py-14 max-md:px-14
    items-center flex-wrap gap-40 max-lg:gap-0 '>
        <div className=' text-center leading-5  '>
          <h1 className='pt-2 text-4xl '>Ready to get sterted ?</h1>
          <p className='text-3xl '> Sign up or Contact us</p>
        </div>
        <div className='btn-setion  flex gap-5 max-md:my-[-40px] max-sm:flex-col max-md:mt-6 max-md:pb-10 '>
       
        <button className=" text-black px-14 py-3 rounded-md hover:bg-black
             hover:text-[#fff] transition-all duration-300 ease-in-out  border border-[#000] ">
            Find Gift Now
            </button>
       
            <button className=" text-black px-14 py-3 rounded-md hover:bg-black
             hover:text-[#fff] transition-all duration-10 ease-in-out  border border-[#000] ">
            How it work
            </button>
       
        </div>
      </div>
    </div>
  )
}

export default Linebar
