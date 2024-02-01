import {BsFillStarFill,BsCircleFill} from  "react-icons/bs";
import {CDN_URL} from "../utils/constants.js";
const MenuItemList=({items}) =>{
return(
    <div>
        {items.map((ele)=>(
     
        <div  key ={ele.card.info.id} className="rounded-xl p-2 m-8">
        <div className="flex flex-wrap justify-between" >
    
            <div className="w-9/12">
                <div className="">
                    {
                        ele.card.info.isVeg == 1 ?<div className="border border-solid border-green-500 w-4 p-0 justify-center"><BsCircleFill fill="green"/>
                        </div>: <div  className="border border-solid border-red-500 w-4 p-0"><BsCircleFill fill="red"/>
                        </div>
                    }
                    {
                        ele.card.info.isBestseller !=undefined ? <BsFillStarFill  fill ="#ee9c00"/> :'' 
                    }
                </div>
                <div className="font-medium">
                    {ele.card.info.name}
                </div>
                <div>
                    ₹ {ele.card.info.defaultPrice ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}
                </div>
                <div className="text-ellipsis text-gray-500">
                    {ele.card.info.description}
                </div>
            </div>
            <div className="w-3/12 p-4" >
                <div className="absolute">
                    <button className="bg-slate-50 mx-14 p-2 m-auto shadow-lg rounded-lg mt-20">Add +</button>
                </div>
                { ele.card.info.imageId ?
                <img  className="rounded-lg" src={CDN_URL + ele.card.info.imageId} /> :""}
            </div>
            
        </div>
        <hr className="mt-10 bg-slate-300" />
    </div>
        // <div key ={ele.card.info.id}>
        //     <div>{ele.card.info.name}</div>
        // </div>
        )) }
   </div>
);
};
export default MenuItemList;