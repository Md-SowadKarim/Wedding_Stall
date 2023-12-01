import React, { useState } from 'react'
import { getStoredJob } from '../../utility/Local'
import FavCard from './FavCard'

const Favourite = () => {
    const [yes,setYes]=useState(false)
    const storedItem=getStoredJob()
    console.log(storedItem)
  return (
    <div>
         <div data-aos="fade-right" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-5xl font-semibold tracking-wider text-white uppercase rounded-full ">
           Favourite
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span className="relative">We</span>
          </span>{' '}
           do respect to your choice
        </h2>
        <p className="text-base text-white md:text-lg">
        Find the perfect attire that reflects your love story with our His and Hers wedding attire set. This collection includes stylish outfits for both of you, allowing you to celebrate your special day in coordinated elegance. 
        </p>
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4  mx-auto'>
      {
        storedItem.map(item=><FavCard item={item} key={item.id}/>)
      }
    </div>
    </div>
  
  )
}

export default Favourite
