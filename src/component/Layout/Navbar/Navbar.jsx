import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState();
  return (
   
    <div>
          <header>
            <nav className='nav-main'>
                <a className='logo'>
                    <img src='https://giftstore.netlify.app/assets/images/logo.png' alt='logo'/>
                </a>
                <div className='center-name name-font boo hidden md:flex'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p> Services</p>
                    <p>Bolg</p>
                </div>
                <div>
                    <a className='btn name-font hidden md:flex'>Gift Finder</a>
                </div>
                { 
                   toggle ? 
                   <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-[30px] md:hidden block'/>
                   :
                   <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-[30px] md:hidden block'/>
                }
                  
                   
                
                 
                

                <div className={` name-again duration-300 md:hidden fixed w-full flex-col bg-black 
                text-gray-400  ${toggle ? "left-[0]": "left-[-100%]" } top-[90px]
                 `}>
                    <p className='p1'>Home</p>
                    <p className='p12'>About Us</p>
                    <p className='p12'> Services</p>
                    <p className='p13'>Bolg</p>
                </div>
            </nav>
        </header>
      
    </div>
  )
}

export default Navbar
