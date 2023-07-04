import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
// import restList from "../utils/mockData"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() =>{
    // let restListLocal = restList;
    const [restListJS,setrestListJS]=useState([]);
    const [filteredListJS,setfilteredListJS]=useState([]);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData  = async ()  =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log("json",json);
        // optional chaining
        setrestListJS(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredListJS(json?.data?.cards[2]?.data?.data?.cards);
    };
const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
    return <h1>Looks like you're offline!! please check your internet connection</h1>
}
    
    return restListJS.length == 0 ?<Shimmer/> :(
            <div className="body">
                <div className="flex p-5">
                   <input type="text" className=" p-2 m-2 border border-gray-400 rounded-lg" value={searchText}
                   onChange={(e)=>{
                    setsearchText(e.target.value);
                   }}/> 
                        <div className="flex items-center">
                        <button  className="p-2 m-2 bg-blue-300 rounded-lg" onClick={()=>{
                            const filterRes = restListJS.filter((ele) => {
                                console.log(ele.data.name.toLowerCase().includes(searchText));
                                return ele.data.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                            );
                            setfilteredListJS(filterRes);
                            }}>Search
                        </button>

                        <button  className="p-2  m-2 bg-green-400 rounded-lg" onClick= {()=>{
                        const filterdData1= restListJS.filter(ele =>{ return ele.data.avgRating >4});
                        setfilteredListJS(filterdData1);
                            }}>Top Rated Restaurants</button>
                
                        <button  className="p-2  m-2 bg-gray-300 rounded-lg" onClick= {()=>{
                        setfilteredListJS(restListJS);
                        setsearchText("");
                        }}>Reset</button>
                    </div>
                </div>
               
                    <div className="flex flex-wrap">
                    { filteredListJS.map((restData) =>(
                           <Link key ={restData.data.id} to ={"/resturant/"+restData.data.id}> <ResturantCard key ={restData.data.id} restObj={restData}/> </Link>
                        ))
                        }
                    </div>

            </div>
    );
}
export default Body;
