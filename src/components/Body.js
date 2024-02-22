import ResturantCard,{  withPromotedLabel} from "./ResturantCard";
import Shimmer from "./Shimmer";
// import restList from "../utils/mockData"
import { useEffect, useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import FoodCategory from "./FoodCategory";
import TopRestaurant from "./TopRestaurant.js";

const Body =() =>{
    const PromotedComponent = withPromotedLabel(ResturantCard);
    // let restListLocal = restList;
    const [restListJS,setrestListJS]=useState([]);
    const [filteredListJS,setfilteredListJS]=useState([]);
    const [foodCuisine,setfoodCuisine]=useState([]);
    const [topRestaurant,setTopRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData  = async ()  =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log("json",json);
        // optional chaining
        setfoodCuisine(json?.data?.cards[0]?.card.card);
        console.log("foodCuisine",foodCuisine);
        setTopRestaurant(json?.data?.cards[1]?.card.card);
        setrestListJS(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredListJS(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
const onlineStatus = useOnlineStatus();
const { loggedInUser, setUserName} = useContext(UserContext);
if(onlineStatus === false){
    return <h1>Looks like you're offline!! please check your internet connection</h1>
}
    
    return restListJS.length == 0 ?<Shimmer/> :(
            <div className="body w-10/12 mx-auto my-4 ">
                <FoodCategory key ={foodCuisine.id} restObj={foodCuisine}/>
                <TopRestaurant  key = {topRestaurant.id} restObj ={topRestaurant}/>
                <div className="flex ">
                   <input type="text" className=" p-2 m-2 border border-gray-400 rounded-lg" value={searchText}
                   onChange={(e)=>{
                    setsearchText(e.target.value);
                   }}/> 
                        <div className="flex items-center">
                        <button  className="p-2 m-2 bg-blue-300 rounded-lg" onClick={()=>{
                            const filterRes = restListJS.filter((ele) => {
                                console.log(ele.info.name.toLowerCase().includes(searchText));
                                return ele.info.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                            );
                            setfilteredListJS(filterRes);
                            }}>Search
                        </button>

                        <button  className="p-2  m-2 bg-green-400 rounded-lg" onClick= {()=>{
                        const filterdData1= restListJS.filter(ele =>{ return ele.info.avgRating >4});
                        setfilteredListJS(filterdData1);
                            }}>Top Rated Restaurants</button>
                
                        <button  className="p-2  m-2 bg-gray-300 rounded-lg" onClick= {()=>{
                        setfilteredListJS(restListJS);
                        setsearchText("");
                        }}>Reset</button>
                         <div>
                        <label>UserName:</label>
                        <input className="border border-black m-2 p-2" value ={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
                    </div>
                    </div>
                   
                </div>
               
                    <div className="flex flex-wrap space-x-2">
                    { filteredListJS.map((restData) =>(
                           <Link key ={restData.info.id} to ={"/resturant/"+restData.info.id}> 
                           {restData.info.avgRating >="4.3" ?<PromotedComponent key ={restData.info.id} restObj={restData}/> :<ResturantCard key ={restData.info.id} restObj={restData}/>}
                           {/* <ResturantCard key ={restData.info.id} restObj={restData}/> */}
                            </Link>
                        ))
                        }
                    </div>

            </div>
    );
}
export default Body;
