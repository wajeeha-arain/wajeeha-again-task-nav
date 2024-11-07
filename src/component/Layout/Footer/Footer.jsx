import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#FAFAFA] mt-24 max-w-[1440px] mx-auto  '>
        {/* 1st */}
        <div className='pt-24 pb-12 max-w-[546px] mx-auto justify-between max-lg:items-center max-lg:flex-col text-[14px]
         flex-wrap   flex '>
          <div className='flex gap-10 '>
            <p>Home</p>
            <p className='pl-2'>About</p>
          </div>
          <div className='flex px-14'>
            <img src="https://giftstore.netlify.app/assets/images/footer-logo.png" alt="" />
          </div>
          <div className='flex gap-10'>
            <p> Services</p>
            <p  className='pl-2'>Bolg</p>
          </div>
        </div>

        {/* 2nd */}
        <div className='max-w-[1000px] flex mx-auto'>
          <hr className='w-[1000px]  border-black   my-0 mx-20 pb-16 ' />
        </div>

        {/* 3rd */}
        <div className='w-[256px] mx-auto flex-wrap flex justify-between mb-16 '>
          <img src="https://giftstore.netlify.app/assets/images/fb.png" alt="" />
          <img src="https://giftstore.netlify.app/assets/images/twitter.png" alt="" />
          <img src="https://giftstore.netlify.app/assets/images/insta.png" alt="" />
          <img src="https://giftstore.netlify.app/assets/images/youtube.png" alt="" />
          <img src="https://giftstore.netlify.app/assets/images/pin.png" alt="" />
        </div>

        {/* 4th */}
        <div className='mx-auto text-center pb-10 text-[14px]'>
          <span>© 2010-2020 </span>
          <span className='pl-4'>Privacy - Terms</span>
        </div>

      </div>
    </div>
  )
}

export default Footer
