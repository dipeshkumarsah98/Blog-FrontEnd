import React from 'react'
import { Post } from './Post'

export const Posts = () => {
  return (
    <div>
        <h2 className='text-3xl font-mono mb-4 md:text-4xl lg:text-5xl'>Latest Post</h2>
        <Post />
    </div>
  )
}
