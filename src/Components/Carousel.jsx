import React from 'react';
import {Carousel as Slider} from 'flowbite-react';
import { HorizontalCard } from './HorizontalCard';


export const Carousel = () => {
  return (
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Slider
  leftControl=' '
  rightControl=' '
  indicators={false}
  >
    <HorizontalCard />
    <HorizontalCard />
    <HorizontalCard />
  </Slider>
</div>
  )
}
