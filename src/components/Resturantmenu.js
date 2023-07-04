import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {CDN_URL} from "../utils/constants";
import useRestaurantData  from "../utils/useRestaurantData";
import {BsFillStarFill,BsCircleFill,BsFillArrowUpCircleFill} from  "react-icons/bs";

//faffwnpmkrkcesqcuxwc
const RestaurantMenu = () =>{
    const [isActive,setisActive]= useState(true);
    const {restid} = useParams();
    console.log(restid)
  
   const restInfo = useRestaurantData(restid);
    if(restInfo == null ){
    return <Shimmer />
}

      const  setIsActive = () =>{
       
        
        setisActive(!isActive);
        }
    
    const {name,cuisines ,costForTwoMessage,avgRatingString,areaName,totalRatingsString} = restInfo == null ? '':
   restInfo?.cards[0]?.card?.card?.info;
    const itemCards =restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
// const itemCards =[];  
console.log(itemCards)
 
return (
    <div className="mr-50 ml-50">
        <div className="flex justify-evenly p-5 ">
            <div><h3 className="font-medium text-lg">{name}</h3>
                <span className="text-gray-500 font-normal text-sm">{cuisines.join(", ")}</span>
                <div className="text-gray-500 font-normal text-sm">{areaName}</div>
                <div className="text-gray-500 font-normal text-sm"> {costForTwoMessage}</div>
            </div>
            <div className="text-gray-500 font-normal text-sm "> 
                {avgRatingString >=3.5 ?<h4 className="flex text-green-600 justify-evenly "><BsFillStarFill className=""/>{avgRatingString}</h4>:<h4 className="flex text-orange-600 justify-evenly "><BsFillStarFill className=""/>{avgRatingString}</h4>}
                <div>{totalRatingsString}</div> 
            </div>
        </div>
        <hr className="leading-3"></hr>

        <div className=" justify-center ml-80 mr-80 ">
            
                {itemCards.map((item,index) =>{
                    if(item?.card?.card?.itemCards != undefined){
                        console.log(item?.card?.card?.title);
                        return <div className=" "  key = {index}> 
                        <div className='flex w-50 justify-between p-2 mt-2 rounded bg-gray-200' onClick={() =>setIsActive()}>
                            <div className='flex'>
                                <div className='text-gray-700 font-bold'>{item?.card?.card?.title}</div>
                            </div>
                            <div className="flex items-center justify-center">
                                <BsFillArrowUpCircleFill className='w-8 h-8 text-gray-700' />
                            </div>
                                    
                        </div>
                        {isActive && <div>
                            {  
                    
                            item?.card?.card?.itemCards.map((ele,eleindex) =>{
                                return   <div  key = {eleindex} className=" rounded-xl p-8 m-8">
                                    <div className="flex flex-wrap justify-between" >
                                
                                        <div className="w-[400px]">
                                            <div className="">
                                                {
                                                    ele.card.info.isVeg == 1 ?<div className="border border-solid border-green-500 w-7 p-1 justify-center"><BsCircleFill fill="green"/>
                                                    </div>: <div  className="border border-solid border-red-500 w-7 p-1"><BsCircleFill fill="red"/>
                                                    </div>
                                                }
                                                {
                                                    ele.card.info.isBestseller !=undefined ? <BsFillStarFill  fill ="#ee9c00"/> :'' 
                                                }
                                            </div>
                                            <div className="font-medium text-lg">
                                                {ele.card.info.name}
                                            </div>
                                            <div>
                                                ₹{ele.card.info.defaultPrice ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}
                                            </div>
                                            <div className="text-ellipsis ">
                                                {ele.card.info.description}
                                            </div>
                                        </div>
                                        <div className="w-40 float-left" >
                                            { ele.card.info.imageId ?
                                            <img  className="rounded-lg" src={CDN_URL + ele.card.info.imageId} /> :""}
                                        </div>
                                        
                                    </div>
                                    <hr className="mt-10 bg-slate-300" />
                                </div>

                            })}
                        </div>}
                        </div>
                    }
                })}
        </div>
    </div>
    
)
}
export default  RestaurantMenu;