import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className='text-center bg-blue-600 text-white font-mono py-4 mt-10'>
        <p className='text-sm mb-2 text-slate-200 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis!</p>
        <hr className='w-[90vw] mx-auto'/>
        <ul className='my-3 text-left mx-1 grid grid-cols-2 gap-5 md:text-center md:grid-cols-4 md:text-lg'>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>About Us</li>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>Terms and Condition</li>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>Privacy Policy</li>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>Cookies Policy</li>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>Adverties with Us</li>
            <li className='text-white/80 hover:text-white cursor-pointer transition-colors'>Accessibility Statement</li>
        </ul>
        <hr className='w-[90vw] mx-auto' />
        <ul className='flex my-3 items-center justify-center space-x-10 text-3xl'>
            <li className='cursor-pointer text-white/80 hover:text-white transition-opacity'><BsTwitter /></li>
            <li className='cursor-pointer text-white/80 hover:text-white transition-opacity'><BsFacebook /></li>
            <li className='cursor-pointer text-white/80 hover:text-white transition-opacity'><BsGithub /></li>
            <li className='cursor-pointer text-white/80 hover:text-white transition-opacity'><BsInstagram /></li>
        </ul>
      
    </div>
  )
}
