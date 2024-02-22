import {useEffect, useState } from "react";
import {URL} from "../utils/constants";
const useRestaurantData = (restid) =>{
    //fetch Data
    const [restInfo,setRestInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu =async ()=>{
        const data = await fetch(URL+
        restid+"&submitAction=ENTER");
         const jsonData = await data.json();
        console.log(jsonData.data);
        setRestInfo(jsonData.data);
          
};
    return restInfo;
}

export default useRestaurantData;