import React from 'react';
import HeroImage from '../assets/hero-image.jpg';
import CV from "../CV/CV.pdf"; 

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Dimbiniaina Fitahiana</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
        I specialize in developing modern, responsive web and mobile applications, focused on delivering seamless, user-centric experiences across platforms.
        </p>

        <div className='mt-8 space-x-4'>
          <a href='#contact'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            </a>
            <a href={CV} download="Dimbiniaina_Fitahiana_CV.pdf">
              <button
              className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Resume
              </button>
            </a>
        </div>
    </div>
  );
}

export default Hero;
