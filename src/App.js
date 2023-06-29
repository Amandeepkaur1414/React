import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import '../index.css'; // 
import Header from "./components/Header";
import Body from "./components/Body";
import Contactus from "./components/Contactus";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/Resturantmenu";
// import Grocery from "./components/Grocery";

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

const Grocery =lazy(() =>import("./components/Grocery"));

const AppLayout = () =>{
    return(
        <div className ="app">
            <Header/>
            {/* <Body /> */}
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path :'/contactus',
                element :<Contactus />
            },
            {
                path :'/resturant/:restid',
                element :<RestaurantMenu />
            },
            {
                path :'/grocery',
                element :<Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement:<Error />
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
