import React from 'react'
import Card from './../card/Card';

const Cards = ({datas}) => {
 //console.log(datas)
  return (
    <div className='my-5'>
      <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span className="relative ">Services</span>
          </span>{' '}
          
          <hr className='bg-blue-500 h-1' />
        </h2>
        
        <p className="text-base text-white md:text-lg">
        Find the perfect attire that reflects your love story with our His and Hers wedding attire set. This collection includes stylish outfits for both of you, allowing you to celebrate your special day in coordinated elegance. 
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
    {
        datas.map(data=><Card key={data.id}  data={data} ></Card>)
      }
      
    </div>
    </div>
   
  )
}

export default Cards
