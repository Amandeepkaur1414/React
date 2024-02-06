import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItemList from "./MenuItemList.js";
import {Link} from "react-router-dom";

const Cart = ()=>{
    const cartItems =useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
   const onClearCart =()=>{
    dispatch(clearCart());
   };
    return <div className="text-center m-4 p-4">
      <div className="flex flex-wrap justify-center ">
      {/* <h1 className="text-2xl font-semibold">
        Cart
        </h1> */}
      {cartItems.length != 0 &&   <button className="p-2 ml-10 bg-orange-500 font-semibold text-white  rounded-lg" onClick={onClearCart}>Clear Cart</button>}
      </div>
       
        <div className="w-4/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
        {cartItems.length === 0 && <div>
          <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"}/>
          <h1 className="pt-5 text-center text-gray-700 font-bold text-xl"> You cart is empty</h1>
          <h1 className="pt-2 text-center text-gray-600 text-lg font-semibold"> You can go to home page to view more restaurants</h1>
        <div className="bg-orange-500 font-semibold text-white  ml-40 mr-40 p-5 mt-5 mb-10"> <Link to="/" >See Restaurants near you</Link></div>
       </div>}    
        <MenuItemList items = {cartItems}/>
        </div>
         </div>
};

export default Cart;