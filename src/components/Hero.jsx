import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import isma from '../assets/isma.png'

const Hero = () => {
  return (
    <div className='bg-[#F4EFE6] min-h-screen w-full p-4 pt-10 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6'>
      
      
      <div className='w-full md:w-1/2 space-y-6 md:space-y-10 text-center md:text-left'>
        <h1 className='text-[#212942] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-md mx-auto md:mx-0'>
          Turn Clicks Into conversations
        </h1>
        
        <p className='text-zinc-600 text-sm sm:text-base max-w-md mx-auto md:mx-0'>
          With Clickboost, master the art of online persuasion as we harness data, creativity, and technology to transform your digital engagement strategy.
        </p>
        
        {/* Btn sec*/}
        <div className='flex items-center justify-center md:justify-start space-x-4'>
          <button className='text-white bg-[#FE6538] rounded-xl px-6 h-12 text-base sm:text-lg font-bold hover:bg-[#e0542a] transition-colors shadow-md'>
            Start Now
          </button>
          
          <button className='bg-[#212942] rounded-xl w-14 h-12 flex items-center justify-center hover:bg-[#1a2034] transition-colors group'>
            <ArrowUpRight className="w-5 h-5 text-[#FE6538] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          
          <p className='font-medium text-[#212942] cursor-pointer hover:underline text-sm sm:text-base'>
            Learn more
          </p>
        </div>

      </div>

  
      <div className='w-full md:w-1/2 flex justify-center mt-6 md:mt-0'>
        
  
        <div className="w-[320px] sm:w-[350px] h-[480px] sm:h-[500px] border-2 border-[#FE6538] rounded-2xl overflow-hidden flex flex-col shadow-xl bg-white">
          
         
          <div className='w-full h-1/0 overflow-hidden bg-zinc-100'>
            <img 
              src={isma} 
              alt="User Portrait" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          {/* powered sec */}
          <div className="p-6 bg-[#FE6538] h-1/2 flex flex-col justify-center text-left">
            <p className='text-xl sm:text-2xl font-semibold text-white/90'>powered by</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#212942] mt-1 tracking-wide">
              Ismaaciil Daahir
            </h2>
            <p className="text-xs sm:text-sm text-[#212942]/90 font-medium mt-0.5">
              Full Stack Developer
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero;