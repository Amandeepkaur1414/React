import {useState} from 'react';
import logo from '../../assets/food-logo.jpg'; 
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
                    Home
                </li>
                <li>
                    About us
                </li>
                <li>
                    Contact Us
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