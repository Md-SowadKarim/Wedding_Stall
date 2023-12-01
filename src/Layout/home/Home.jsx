import React, { useEffect, useState } from 'react'
import Slider from '../../components/slider/Slider'
import { useLoaderData } from 'react-router-dom'

import Cards from './../../components/cards/Cards';
import useGetHooks from '../../hook/useGetHooks';
import Services from '../services/Services';
import TimeLine from '../timeline/TimeLine';

const Home = () => {
  // sending data from Root using loader
// const datas=useLoaderData()

// sending data from custom hooks using useEffect()
const datas=useGetHooks()
// const [datas,setDatas] = useState([])

// useEffect(()=>{

//     fetch('/data.json')
//     .then(res=>res.json())
//     .then(data =>{
//         console.log(data)
//         setDatas(data)
//     })

// },[])
console.log(datas)

  return (
    <div>
     <Slider/>
      <Cards datas={datas}></Cards>
      <TimeLine/>
      <Services/>
    </div>
  )
}

export default Home
