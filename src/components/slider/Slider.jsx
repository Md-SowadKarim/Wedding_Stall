import React from 'react'
import ek from "../../assets/img/ek.jpg"
import dui from "../../assets/img/dui.jpg"
import tin from "../../assets/img/tin.jpg"
import char from "../../assets/img/char.jpg"
import pach from "../../assets/img/pach.jpg"
import choi from "../../assets/img/choi.jpg"

const Slider = () => {
  return (
//     <div>
//       <div className="carousel w-full">
//   <div id="item1" className="bg-cover carousel-item w-full bg-gray-600" style={{backgroundImage: `url(${ek})`}}>
//     <div className=''></div>
  
//     <div className='flex items-center justify-around w-[90%] mx-auto'>
//     <img src={ek} className="w-[65%] " />
//     <h1>this is the way of marriage</h1>
//     </div>
   
  
   
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src={dui} className="w-full" />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//     <img src={tin} className="w-full" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src={char} className="w-full" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
//     </div>




<div>
<div class="carousel w-full rounded-xl">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${ek})`}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={ek} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Ultra Weeding</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${dui})`}}>
                        <div class="hero-overlay bg-opacity-80"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={dui} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Dreame Weeding</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${tin})`}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={tin} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Maxis Weeding</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${char})`}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={char} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Super Weeding</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide5" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide5" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${pach})`}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={pach} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold translate-x-2 transi duration-700 font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Mini Weeding</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide6" class="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide6" class="carousel-item relative w-full">
                    <div class="hero h-[600px]" style={{backgroundImage: `url(${choi})`}}>
                        <div class="hero-overlay bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-lg space-y-8 ">
                                <img className='rounded-xl'  src={choi} alt="" />
                          
                                <h1 class="mb-5 text-3xl font-extrabold font-lato text-white">We Supply Pure of Love For Your Next Life</h1>
                                <button class="btn  bg-transparent hover:bg-white hover:text-black ">Bridal and Accessories</button>
                              </div>
                        </div>
                      </div>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
             
</div>
  )
}

export default Slider
