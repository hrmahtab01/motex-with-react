import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";




const Banner = () => {
    const [text] = useTypewriter({
        words: [' To Motex! '],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 20,
    })


    return (
        <>
            <section className="bg-[url('images/main.png')] w-full h-screen bg-center bg-cover mb-[500px] relative ">
                <div className='w-full h-full bg-[rgba(0,0,0,0.83)] absolute'>
                    <div className='max-w-[1100px] mx-auto'>
                        <div className='flex'>
                            <div >
                                <h3 className='text-[55px] font-sans font-bold text-[#EE1D26] mt-[236px]'>Welcome
                                    <span>{text}</span>
                                </h3>
                                <h1 className='text-[76px] font-bold font-sans text-[#FFFFFF] w-[700px] mt-[20px]'>Best Way To Find
                                    Your Dream Car</h1>
                                <p className='text-[23px] font-semibold font-sans text-[#ffffff] w-[550px] mt-[24px]'>There are many variations of passages orem psum available but the majority have
                                    suffered alteration in some form by injected humour.</p>
                                    <div className='mt-[22px] flex gap-[50px]'>
                                        <a className='btncss hover:bg-[#FF1111] hover:text-[#ffffff] hover:delay-300 flex items-center gap-[10px]' href="#">About More <FaArrowRight /></a>
                                        <a className='btncss hover:bg-[#FF1111] hover:text-[#ffffff] hover:delay-300 flex items-center gap-[10px]' href="#">Learn More <FaArrowRight /></a>
                                    </div>

                            </div>
                            <div>
                                <img className='mt-[250px] w-[1000px]' src="images/Ellipse 2.png" alt="shadaw" />

                                <img className='absolute top-[200px] right-[50px] shadow-[10px 9px 10px 9px #FF0000] ' src="images/hero-1 1.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='w-[1113px] h-[422px] bg-[#ffffff] rounded-[20px] absolute bottom-[-350px] left-[365px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] '>
                        <h3 className='text-[39px] text-[#292626] font-bold font-sans ml-[100px] mt-[30px]'>Let's Find Your Perfect Car</h3>
                        <div className='w-[956px] bg-[#9F9191] h-[2px] ml-[110px] mt-[20px]'></div>
                        <div className='flex justify-center gap-[67px] mt-[24px]'>
                            <div>
                             <div>
                             <h3  className='text-[26px] font-light font-sans text-[#333131]'>Car Condition</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Status <IoIosArrowDown className='w-[19px] h-[20px]' /></a>
                             </div>
                             <div>   <h3  className='text-[26px] font-light font-sans text-[#333131] mt-[29px]'>Choose Milieage</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Status <IoIosArrowDown className='w-[19px] h-[20px]' /></a></div>
                            </div>
                            <div>
                             <div>
                             <h3  className='text-[26px] font-light font-sans text-[#333131]'>Brand Name</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Brand <IoIosArrowDown className='w-[19px] h-[20px]' /></a>
                             </div>
                             <div>   <h3  className='text-[26px] font-light font-sans text-[#333131] mt-[29px]'>Price Range</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Brand <IoIosArrowDown className='w-[19px] h-[20px]' /></a></div>
                            </div>
                            <div>
                             <div>
                             <h3  className='text-[26px] font-light font-sans text-[#333131]'>Car Model</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Brand <IoIosArrowDown className='w-[19px] h-[20px]' /></a>
                             </div>
                             <div>   <h3  className='text-[26px] font-light font-sans text-[#333131] mt-[29px]'>Body Type</h3>
                                <a className='flex items-center justify-around w-[224px] h-[51px]  rounded-[15px] border-solid border-2 border-[#8F8989]
                                 text-[18px] font-light font-sans mt-[17px]' href="#">All Brand <IoIosArrowDown className='w-[19px] h-[20px]' /></a></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            

        </>
    )
}

export default Banner
