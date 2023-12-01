import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const FavCard = ({item}) => {
    console.log(item)
  return (
    <div className='mx-auto '>
     
<a href="#" className="flex flex-col p-2 items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className='w-[90%] '>
    <img class="object-cover w-full rounded-lg h-full md:h-full md:w-full md:rounded-none md:rounded-l-lg" src={item.image} alt=""/>
   
    </div>
    <div className="flex flex-col h-100  justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl grow font-bold tracking-tight text-gray-900 dark:text-white">{item.category_name}</h5>
        <p className="mb-3 font-normal grow text-gray-700 dark:text-gray-400">{item.description.slice(0,90)+"..."}</p>
        <Link to={`/details/${item.id}`}><button className='btn btn-primary w-[80%] bg-blue-500'> See Details</button></Link> 
    </div>
</a>

    </div>
  )
}

export default FavCard
