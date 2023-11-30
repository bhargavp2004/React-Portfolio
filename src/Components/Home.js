// Home Component
import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from '../Animation/HomeAnimation.json';
import myResume from '../Documents/My_Resume.pdf';

function Home() {
    return (
        <div id="home" className="flex w-full h-screen bg-gradient-to-br from-gray-900 to-pink-950 from-45% flex-col items-center justify-center z-0">

            <div className='flex w-full flex-col items-center md:flex-row md:justify-normal md:items-center'>

                <div className="mx-16 mt-16 grid grid-cols-1 w-80 h-80">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                    />
                </div>

               
                <div className="mt-6 md:mt-0 text-gray-200 mx-16 font-signature mb-4 md:mb-0 md:mr-8">
                    <h1 className='text-2xl md:text-4xl mb-2'> Hello, I am <span className='text-red-900 font-bold'>Bhargav</span></h1>
                    <p className="text-sm md:text-2xl mb-2">I am a <span className="text-blue-600 font-bold">Web Developer</span></p>
                    <p>I'm thrilled to welcome you to my corner of the internet!</p>

                    <div className="flex mt-4 text-4xl">
                        <a className='cursor-pointer' href='https://www.instagram.com/bhargavp2004/'><FaInstagram /></a>
                        <a className="mx-4 cursor-pointer" href='https://www.linkedin.com/in/bhargav-patel-4a82b3225/'><FaLinkedin /></a>
                    </div>
                    <div className="mt-8">
                    <a href={myResume} download={myResume} className="p-4  bg-blue-700 cursor-pointer">
                        Download CV
                        </a>
                    </div>
                
                </div>
                
            </div>
        </div>
    );
}

export default Home;
