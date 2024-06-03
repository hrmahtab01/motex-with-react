import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";


const Navbar = () => {
    const [darktoggle, setDarkToggle] = useState(false);
   
    const toggleDarkMode = () => {
      setDarkToggle(!darktoggle);
    };

    return (
        <>
        <div className='z-10 fixed top-0 flex-no-wrap flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5
         dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-center lg:py-4'>
            <div className={`${darktoggle && "dark"} `}>
                <header className=''>
                    <div className='max-w-[1100px] mx-auto dark:bg-black relative ' >
                        <div className='flex items-center'>
                            <div>
                                <img className='text-[#ffffff]' src="images/logo 1.png" alt="logo one" />
                            </div>
                            <div className='flex items-center'>
                                <ul className='flex gap-[30px]'>
                                    <li className='text-[25px] text-[#000000] font-sans font-bold ml-[60px] dark:text-[#ffffff]'>Home</li>
                                    <li className='ulli dark:text-[#ffffff]'>About</li>
                                    <li className='ulli dark:text-[#ffffff]'>Inventory</li>
                                    <li className='ulli dark:text-[#ffffff]'>Shop</li>
                                    <li className='ulli dark:text-[#ffffff]'>Blog</li>
                                    <li className='ulli dark:text-[#ffffff]'>Contact</li>
                                </ul>
                                <div className='flex items-center'>
                                    <a href="#" className='text-[32px] text-[#EE1D26] ml-[62px]'><FaSearch /></a>
                                    <a href="#" className='text-[42px] text-[#EE1D26] m-[18px]'><HiShoppingCart /></a>
                                    <button className='dark:text-[#EE1D26] p-[10px] dark:bg-[#0000] dark:bg-[#fff] rounded-full' onClick={toggleDarkMode}>{darktoggle ? "LIGHT" : "DARK"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </div>
            
        </>
    );
};

export default Navbar;
