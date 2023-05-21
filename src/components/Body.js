import ResturantCard from "./ResturantCard";
import restList from "../utils/mockData"
import { useState } from "react";

const Body =() =>{
    let restListLocal = restList;
    const [restListJS,setrestListJS]=useState(restListLocal);
    return(
            <div className="body">
                <div className="Search">
                    Search
                </div>
                <button className="btn-rating" onClick= {()=>{
                    let filterdData= restListJS.filter(ele =>{ return ele.data.avgRating >4});
                    setrestListJS(filterdData);
                }}>Top Rated Restaurants</button>
                <div className="res-container">
                   { restListJS.map((restData) =>(
                        <ResturantCard key ={restData.data.id} restObj={restData}/>
                      ))
                      }
                </div>

            </div>
    );
}
export default Body;
