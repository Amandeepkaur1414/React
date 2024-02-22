import React, { useRef, useState } from 'react';
import {IMG_CDN_URL} from "../utils/constants";
import { GoChevronLeft ,GoChevronRight } from "react-icons/go";

const FoodCategory = (prop) => {
    const sliderRef = useRef(null);
    const scrollAmount = 300; 
const {restObj} = prop;
const {header,gridElements}= restObj;
const [prevDisable,setPrevDisable] =useState(false);
const [nextDisable,setNextPrevDisable] =useState(false);
  return (
    <div className='my-4 h-68 '>
        <div className='flex justify-between'>
            <div className='font-bold text-2xl'>
                {header.title}
            </div>
            <div className=' m-2'>
                <button className='p-2 m-2 border border-gray-400 rounded-lg  bg-gray-400 text-black text-lg font-bold '
                disabled={prevDisable}  onClick={() => {
                    // setNextPrevDisable(false);
                    const container = sliderRef.current;
                    container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                    //   if(container.scrollLeft ==0){
                    //     setPrevDisable(true);
                    //   }
                    }}><GoChevronLeft /></button>
                        <button className='p-2 m-2 border border-gray-400 rounded-lg  bg-gray-400 text-black text-lg font-bold '
                        disabled={nextDisable} onClick={() => {
                            // setPrevDisable(false);
                    const container = sliderRef.current;
                    container.scrollLeft += scrollAmount;
                    //   if(container.scrollLeft == 0){
                    //     setNextPrevDisable(true);
                    //   } // Scroll left by the specified amount
                    }}><GoChevronRight /></button>
            </div>
        </div>
        
        
        <div className='flex space-x-8 ' style={{maxWidth:'100%',scrollBehavior:'smooth',overflow:'hidden',transition:'scroll 0.3s ease-in-out'}} ref={sliderRef}>
        
           {
                gridElements.infoWithStyle.info.map((ele)=>{
                    return <div key={ele.id} className='justify-center '>
                        <div className=' w-40 '>
                            <img className=' w-40 ' src={IMG_CDN_URL + ele.imageId} />
                        </div>
                       {/* <div  className='text-center font-semibold text-gray-600'> {ele.action.text}</div> */}
                    </div>
                })
            }
        </div>
        <hr className="mt-10 bg-slate-300" />
    </div>
  )
}

export default FoodCategory