import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {CDN_URL} from "../utils/constants";
import useRestaurantData  from "../utils/useRestaurantData";
import {BsFillStarFill,BsCircleFill,BsFillArrowUpCircleFill} from  "react-icons/bs";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{
    const [showIndex,setshowIndex]= useState(0);
    const {restid} = useParams();
    console.log(restid)
  
   const restInfo = useRestaurantData(restid);
    if(restInfo == null ){
    return <Shimmer />
}
    
    const {name,cuisines ,costForTwoMessage,avgRatingString,areaName,totalRatingsString} = restInfo == null ? '':
   restInfo?.cards[2]?.card?.card?.info;
    const itemCards =restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

 
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

       
        {<div className=" justify-center ml-80 mr-80 ">
            
                {itemCards.map((item,index) =>{
                    if(item?.card?.card?.itemCards != undefined){
                        return  <RestaurantCategory key ={item?.card?.card?.id} data ={item?.card?.card} 
                        showIndex ={index == showIndex ? true:false}
                        setshowIndex={()=>setshowIndex(index)}/>

                    }
                })}
        </div>}

</div>

        
  
    
)
}
export default  RestaurantMenu;