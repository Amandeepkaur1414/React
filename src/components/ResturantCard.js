import {CDN_URL} from "../utils/constants"
const ResturantCard =(prop) =>{
    const {restObj} = prop;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwoString,deliveryTime}= restObj.data;
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL
            + cloudinaryImageId} />

           <h4>{name}</h4> 
            <div>
            {cuisines.join(", ")}
            </div>
            <div className="res-other">
                <ul>
                    <li> {avgRating} stars</li>
                    <li> {costForTwoString}</li>
                    <li>  {deliveryTime} minutes</li>
                </ul>
            </div>
            </div>
    )
}
export default ResturantCard;