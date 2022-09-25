import React from 'react';
import Pic from "../img/1.png";

export const HorizontalCard = () => {
  return (
<div className="flex px-2 flex-col py-10 space-y-4 space-x-10 lg:flex-row lg:space-x-7  bg-slate-200/20 rounded-lg lg:px-5">
  <div className=''>
    <img src={Pic} alt="" className='object-cover w-full h-44 lg:w-80 lg:h-auto lg:rounded-l-lg'/>
  </div>
  <div className='space-y-5 lg:w-fit lg:space-y-10'>
    <h1 className='text-sm text-justify lg:text-4xl'>Lorem ipsum, dolor sit amet consectetur </h1>
    <span className='text-sm text-justify lg:text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum suscipit itaque iusto commodi? Aliquam itaque fuga sunt nisi distinctio temporibus odio quae eos, culpa doloribus amet enim nam quas.</span>
  </div>
</div>
  )
}
