
import MenuItemList from "./MenuItemList.js";

const RestaurantCategory =({data,showIndex,setshowIndex})=>{
    console.log("isActive",showIndex)
    const  onClickHandler =() =>{
            setshowIndex();
        };
return (
    <div>
        {/* header start */}
        <div className="w-8/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg" onClick={onClickHandler}>
            <div className=" flex justify-between">
                <span className=" text-lg"> {data.title}({data.itemCards.length})</span>
                <span> 🔽</span>
            </div>
            
               {/* accordian body start */}
             { showIndex && <MenuItemList items = {data.itemCards}/>}
                {/* accordian body end */}
        </div>
                {/* header end */}
        
    </div>
);

}
export default RestaurantCategory;