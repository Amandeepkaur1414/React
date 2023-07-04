import {CDN_URL} from "../utils/constants"
import {BsFillStarFill} from  "react-icons/bs";
const ResturantCard =(prop) =>{
    const {restObj} = prop;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwoString,deliveryTime}= restObj.data;
    return(
        <div className="m-4 p-4 w-[250px]  rounded-lg hover:border border-solid">
            <img className="rounded-t-lg" src={CDN_URL
            + cloudinaryImageId} />

           <h4 className="font-medium text-lg">{name}</h4> 
            <div className="text-sm">
                {cuisines.join(", ")}
            </div>
            <div className="text-sm flex flex-wrap">
                {/* <ul> */}
                    <div className='p-1 flex items-center rounded-lg text-orange-50 bg-green-500' ><BsFillStarFill className="mr-2"/> {avgRating} </div>
                    <div className="p-1"> {costForTwoString}</div>
                    <div className="p-1">  {deliveryTime} mins</div>
                {/* </ul> */}
            </div>
            </div>
    )
}
export default ResturantCard;