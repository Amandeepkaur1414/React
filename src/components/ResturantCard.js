import {CDN_URL} from "../utils/constants"
import {BsFillStarFill} from  "react-icons/bs";
const ResturantCard =(prop) =>{
    
    const {restObj} = prop;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwoString}= restObj.info;
    return(
        <div className="m-4 w-[290px]  rounded-lg hover:border border-solid">
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
                    <div className="p-1">  {restObj.info.sla.slaString} </div>
                {/* </ul> */}
            </div>
            </div>
    )
}

export const withPromotedLabel = (ResturantCard)=>{
    return (props) =>{
        return(
            <div>
                <label className="absolute p-1 m-1 bg-green-500 text-white rounded ">
                    Promoted
                </label>
                <ResturantCard {...props} />
            </div>
        )

    }

}
export default ResturantCard;
// export default withPromotedLabel;