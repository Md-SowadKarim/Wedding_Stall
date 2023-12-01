import React from 'react'
import {savedJob} from "../../utility/Local"
import { useLoaderData, useParams } from 'react-router-dom'


const Details = () => {
 
    const {cartId}=useParams()
    const datas=useLoaderData()
    const data=datas.find(data=> data.id === parseInt(cartId))
    console.log(data)
   
    const handleClick=()=>{
      savedJob(data) 
    }
  return (
    <div>
      <div
  className="relative rounded-lg text-left bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
  <img
    className="rounded-lg object-cover    w-full after:  my-2 md:opacity-25"
    src={data.image}
    alt="" />
  <div className="md:absolute  bottom-0 p-2">
    <h5 className="mb-2  text-xl font-medium leading-tight text-white">
      {data.category_name}
    </h5>
    <p className="mb-4 text-base text-white shadow-lg border p-5 rounded-lg">
    {data.description}
    </p>
    <div className='flex gap-5 items-center'>
    <p className="text-base text-white">
      <big className="text-white font-extrabold">Price ${data.price}</big>
    </p>
    <button onClick={handleClick} className='px-3 py-2 my-3 btn-primary overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl hover:bg-secondary'>Favourite</button>
  
    </div>
   </div>
</div>
</div>
  )
}

export default Details
