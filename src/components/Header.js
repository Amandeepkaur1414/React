import {useState,useContext} from 'react';
import logo from '../../assets/food-logo.png'; 
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header =() =>{
    const  [btnName, setbtnName]= useState("Login");
    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using a seclector hook
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartitems",cartItems)
    return (
    <div className="flex justify-between shadow-lg mb-2 py-2">
        <div className="logo-container">
            <img className="w-24 ml-10" src = {logo}/>
        </div>
        <div className="flex items-center">
            <ul className='flex p-4 m-4'>
                <li className='px-4'>
                <Link to="/">Home </Link> 
                </li >
                <li className='px-4'>
                <Link to="/about">About us </Link>
                </li>
                <li className='px-4'>
                <Link to="/contactus">Contact Us </Link>  
               
                </li>
                <li className='px-4'> <Link to="/grocery">Grocery App </Link>  </li>
                <li className='px-4 font-semibold'>
                <Link to="/cart">Cart ({cartItems.length} items) </Link> 
                    
                </li>
                <li className='px-4'>
                    {loggedInUser}
                </li>
               
                    <button className="button-login" onClick={
                        () =>{
                            btnName =="Login"?  setbtnName("Logout") :setbtnName("Login");
                        }
                    }>{btnName}</button>
                
            </ul>
        </div>
    </div>
    );
       
}
export default Header;