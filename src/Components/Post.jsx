import {Card} from '../Components/Card.jsx';
import React from 'react'

export const Post = () => {
    // fertch data and show
  return (
    <div className='grid gap-10 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-7'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}
