import {useState} from 'react';
import logo from '../../assets/food-logo.jpg'; 
import {Link} from "react-router-dom"
const Header =() =>{
    const  [btnName, setbtnName]= useState("Login");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src = {logo}/>
        </div>
        <div className="nav-conatiner">
            <ul>
                <li>
                <Link to="/">Home </Link> 
                </li>
                <li>
                <Link to="/about">About us </Link>
                </li>
                <li>
                <Link to="/contactus">Contact Us </Link>  
                </li>
                <li>
                    Cart
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