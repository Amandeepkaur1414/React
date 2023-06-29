import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {CDN_URL} from "../utils/constants";
import useRestaurantData  from "../utils/useRestaurantData";
import {BsFillStarFill,BiTime,BsCircleFill,BsFillPatchMinusFill,BsFillPatchPlusFill} from  "react-icons/bs";

//faffwnpmkrkcesqcuxwc
const RestaurantMenu = () =>{
    const [isActive,setisActive]= useState(false);
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
    <div>
        <div className="res-header">
            <div><h3>{name}</h3>
                <span className="color-font">{cuisines.join(", ")}</span>
                <div className="color-font">{areaName}</div>
                <div className="color-font"> {costForTwoMessage}</div>
            </div>
            <div className="color-font"> 
                <h4><BsFillStarFill/>{avgRatingString}</h4>
                <div>{totalRatingsString}</div> 
            </div>
        </div>
        <hr className="hr"></hr>

        <div className="menu-container">
            
                {itemCards.map((item,index) =>{
                    if(item?.card?.card?.itemCards != undefined){
                        console.log(item?.card?.card?.title);
                        return <div className="header-item" key = {index}> 
                        <div className="tiles" onClick={() =>setIsActive()}>
                                <div className="menu-heading">{item?.card?.card?.title} </div>
                                <div>{isActive ?<BsFillPatchMinusFill />: <BsFillPatchPlusFill />}</div>
                        </div>
                        {isActive && <div>
                            {  
                    
                            item?.card?.card?.itemCards.map((ele,eleindex) =>{
                                return   <div  key = {eleindex} className="item-conatiner">
                                    <div className="item-container-detail" >
                                
                                        <div >
                                            <div className="item-veg">
                                                {
                                                    ele.card.info.isVeg == 1 ?<div className="veg"><BsCircleFill fill="green"/>
                                                    </div>: <div  className="non-veg"><BsCircleFill fill="red"/>
                                                    </div>
                                                }
                                                {
                                                    ele.card.info.isBestseller !=undefined ? <BsFillStarFill  fill ="#ee9c00"/> :'' 
                                                }
                                                </div>
                                                <div className="item-heading">
                                                {ele.card.info.name}
                                                </div>
                                                <div>
                                                {ele.card.info.defaultPrice ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}
                                                </div>
                                                <div className="description">
                                                {ele.card.info.description}
                                                </div>
                                        </div>
                                        <div>
                                            { ele.card.info.imageId ?
                                            <img  className="item-img" src={CDN_URL + ele.card.info.imageId} /> :""}
                                        </div>
                                        
                                    </div>
                                    <hr className="item-hr" />
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