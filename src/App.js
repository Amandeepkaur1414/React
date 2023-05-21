import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css'; // 
import Header from "./components/Header";
import Body from "./components/Body";

/*
* Header
*- Logo
*- Nav Items
*Body
*- Search
*- RestaurantConatiner
*--  ResturantCard
*Footer
*- copyrights
*- link,address,contact
*/
// react Element


const AppLayout = () =>{
    return(
        <div className ="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
