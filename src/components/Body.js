import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
// import restList from "../utils/mockData"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

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

    
    return restListJS.length == 0 ?<Shimmer/> :(
            <div className="body">
                <div className="Search">
                   <input type="text" className="search-box" value={searchText}
                   onChange={(e)=>{
                    setsearchText(e.target.value);
                   }}/> 
                <div>
                        <button  className="button-cls" onClick={()=>{
                            const filterRes = restListJS.filter((ele) => {
                                console.log(ele.data.name.toLowerCase().includes(searchText));
                                return ele.data.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                            );
                            setfilteredListJS(filterRes);
                            }}>Search
                        </button>

                        <button  className="button-cls" onClick= {()=>{
                        const filterdData1= restListJS.filter(ele =>{ return ele.data.avgRating >4});
                        setfilteredListJS(filterdData1);
                            }}>Top Rated Restaurants</button>
                
                        <button  className="button-cls" onClick= {()=>{
                        setfilteredListJS(restListJS);
                        setsearchText("");
                        }}>Reset</button>
                    </div>
                </div>
               
                    <div className="res-container">
                    { filteredListJS.map((restData) =>(
                           <Link key ={restData.data.id} to ={"/resturant/"+restData.data.id}> <ResturantCard key ={restData.data.id} restObj={restData}/> </Link>
                        ))
                        }
                    </div>

            </div>
    );
}
export default Body;
