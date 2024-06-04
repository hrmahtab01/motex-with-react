import React, { useState } from 'react'
import { RiArrowDownWideLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [countscroll ,setcountscroll] =useState(false)
    return (
        <>
            <section className='mb-[92px]'>
                <div className=' mx-auto'>
                    <div className='flex justify-center gap-[72px]'>
                        <div className='relative flex items-center'>

                            <img src="images/01 1.png" alt="about carr" />

                            <div className='w-[283px] h-[113px] bg-[#111111] flex items-center justify-center gap-[14px] rounded-[6px] absolute top-[124px] left-[-10px]'>
                                <div className='w-[77px] h-[77px] bg-[#FF0000]  flex items-center rounded-[7px]'>
                                    <img src="images/Vector (2).png" alt="" />

                                </div >
                                <p className='text-[23px] text-[#FFFFFF] font-light font-sans w-[144px]'>30 Years Of
                                    Quality Service</p>


                            </div>
                        </div>
                        <div>
                            <div className='flex gap-[23px]'>
                                <img src="images/aboutushead.png" alt="heading img about" />
                                <h3 className='text-[27px] text-[#ED3434] font-normal font-sans'>ABOUT US</h3>
                            </div>
                            <h2 className='text-[65px] text-[#000000] font-sans font-bold w-[700px]'>World Largest <span className='text-[#FF0303]'>Car Dealer</span> Marketplace.</h2>
                            <p className='text-[29px] text-[#000000] font-sans font-light w-[518px] mt-[20px]'>There are many variations of passages of Lorem Ipsum available, but the</p>
                            <div className='flex gap-[17px] items-center'>
                                <div className='py-[20px] px-[20px] border-solid border-2 border-[#FF0303] rounded-full  mt-[13px]'>
                                    <h4 className='text-[#FF0303] text-[24px]' >< RiArrowDownWideLine /></h4>
                                </div >


                                <h5 className=' gap-[17px] text-[24px] text-[#363232] font-bold font-sans'> At vero eos et accusamus et iusto odio.</h5>
                            </div>
                            <div className='flex gap-[17px] items-center mt-[19px]'>
                                <div className='py-[20px] px-[20px] border-solid border-2 border-[#FF0303] rounded-full  mt-[13px]'>
                                    <h4 className='text-[#FF0303] text-[24px]' >< RiArrowDownWideLine /></h4>
                                </div >


                                <h5 className=' gap-[17px] text-[24px] text-[#363232] font-bold font-sans'> At vero eos et accusamus et iusto odio.</h5>
                            </div>
                            <div className='flex gap-[17px] items-center mt-[19px]'>
                                <div className='py-[20px] px-[20px] border-solid border-2 border-[#FF0303] rounded-full  mt-[13px]'>
                                    <h4 className='text-[#FF0303] text-[24px]' >< RiArrowDownWideLine /></h4>
                                </div >


                                <h5 className=' gap-[17px] text-[24px] text-[#363232] font-bold font-sans'> At vero eos et accusamus et iusto odio.</h5>
                            </div>
                            <button className='py-[15px] px-[20px] rounded-[5px] text-[23px] bg-[#FF1111] flex items-center mb-[92px] mt-[50px] gap-[10px] font-bold font-sans text-[#ffff]' href="#">Learn More <FaArrowRight /></button>
                        </div>

                    </div>
                </div>
                <div className='bg-[#FF1111] pt-[42px] pb-[51px]'>
                    <div className='max-w-[1100px] mx-auto'>
                    <ScrollTrigger onEnter={() => setcountscroll(true)} onExit={ ()  => setcountscroll(false)}>
                    <div className='flex justify-center items-center gap-[62px]'>
                        <div>
                            <div className='w-[125px] h-[125px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                                <div className='w-[114px] h-[114px] bg-[#000000] rounded-full flex justify-center items-center'>
                                    <img src="images/Vector (2).png" alt="" />
                                </div>
                            </div>
                        <h3 className='text-[59px] text-[#FFFFFF] font-normal font-sans'>
                           { countscroll &&
                           
                           <CountUp 
                            start={0} 
                            end={500}>
                            </CountUp>}+
                            </h3>
                            <h2 className='text-[53px] text-[#ffffff] font-normal font-sans'>Avialable Cars</h2>
                        </div>
                        <div>
                            <div className='w-[125px] h-[125px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                                <div className='w-[114px] h-[114px] bg-[#000000] rounded-full flex justify-center items-center'>
                                    <img src="images/Vector (3).png" alt="" />
                                </div>
                            </div>
                        <h3 className='text-[59px] text-[#FFFFFF] font-normal font-sans'>
                           { countscroll &&
                           
                           <CountUp 
                            start={0} 
                            end={900}>
                                duration={1.75}
                            </CountUp>}+
                            </h3>
                            <h2 className='text-[53px] text-[#ffffff] font-normal font-sans'>Avialable Cars</h2>
                        </div>
                        <div>
                            <div className='w-[125px] h-[125px] bg-[#ffffff] rounded-full flex justify-center items-center'>
                                <div className='w-[114px] h-[114px] bg-[#000000] rounded-full flex justify-center items-center'>
                                    <img src="images/Vector (2).png" alt="" />
                                </div>
                            </div>
                        <h3 className='text-[59px] text-[#FFFFFF] font-normal font-sans'>
                           { countscroll &&
                           
                           <CountUp 
                            start={0} 
                            end={500}>
                            </CountUp>}+
                            </h3>
                            <h2 className='text-[53px] text-[#ffffff] font-normal font-sans'>Avialable Cars</h2>
                        </div>
                        </div>
                    </ScrollTrigger>
                     
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
