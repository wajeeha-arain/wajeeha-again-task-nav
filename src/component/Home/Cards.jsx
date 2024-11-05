import React from 'react'

const Cards = () => {
  return (
    <div>
      <div className=' pt-20 max-w-[1440px] w-full mx-auto pb-40 '>
        <div className='text-center leading-10 pt-8'>
          <h1 className='text-3xl font-semibold '>Gifts For all Occasion</h1>
          <p className='pb-20'>"Try our web app to find the best gifts for all occasions"</p>
        </div>
        <div className='flex justify-center items-center  gap-5 flex-wrap'>
          <div className='min-h-120 max-h-140 w-70 bg-stone-100 hover:bg-white hover: rounded-l-lg'>
            <img className=' w-70' src="https://giftstore.netlify.app/assets/images/card4.png" alt="" />
          <div className='flex-row justify-around max-h-40 w-40 mx-6 my-4'>
          <p className='font-semibold pb-12  '>Birthday</p>
          <p className='pt-8'>See More</p>
          </div>
          </div>
          <div className='min-h-120 max-h-140 w-70 bg-stone-100 hover:bg-white rounded-l-lg'>
            <img className=' w-70' src="https://giftstore.netlify.app/assets/images/card3.png" alt="" />
          <div className='flex-row justify-around max-h-30 w-40 mx-6 my-4'>
          <p className='font-semibold pb-12  '>Anniversary</p>
          <p className='pt-8'>See More</p>
          </div>
          </div>
          <div className='min-h-120 max-h-140 w-70 bg-stone-100 hover:bg-white hover:shadow-stone-200 rounded-l-lg'>
            <img className=' w-70' src="https://giftstore.netlify.app/assets/images/card2.png" alt="" />
          <div className='flex-row justify-around max-h-30 w-40 mx-6 my-4'>
          <p className='font-semibold pb-12  '>Valentine's Day</p>
          <p className='pt-8'>See More</p>
          </div>
          </div>
          <div className='min-h-120 max-h-140 w-70 bg-stone-100 hover:bg-white hover:shadow-stone-200 rounded-l-lg'>
            <img className=' w-70' src="https://giftstore.netlify.app/assets/images/card1.png" alt="" />
          <div className='flex-row justify-around max-h-30 w-40 mx-6 my-4'>
          <p className='font-semibold pb-12  '>Christmas</p>
          <p className='pt-8'>See More</p>
          </div>
          </div>
    
          </div>

        </div>

      </div>
    
     













  
  )
}

export default Cards