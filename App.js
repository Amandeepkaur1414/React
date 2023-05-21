import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // 
import logo from './assets/baby-food-logo.jpg'; 
import foodlogo from './assets/biryani.jpg'; 
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

const Header =() =>{
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
            </ul>
        </div>
    </div>
    );
       
}
const restList=[
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "1532",
        "name": "A2B - Adyar Ananda Bhavan",
        "uuid": "2f52d51d-76ab-45b0-95b7-b33b4e815f75",
        "city": "1",
        "area": "Bannerghatta Main Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "xklnwrywflwdnspfriu1",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "slaString": "48 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "a2b-veg-next-to-fortis-hospitaloppositeto-hsbc-bank-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 154/10, Bilekahalli Village, Bannerghatta Main Road, Bangalore - 560076",
        "locality": "Bilekahalli",
        "parentId": 22,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6821804~p=1~eid=00000188-39bc-6350-62f7-9b8b0082015d",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "1532",
          "deliveryTime": 48,
          "minDeliveryTime": 48,
          "maxDeliveryTime": 48,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "167101",
        "name": "Meghana Foods",
        "uuid": "9bdcbf89-5b7d-497f-abc4-0e6ddc0048fd",
        "city": "1",
        "area": "Arakere",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "cvo1djhbwrgfqd64k0tl",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 3.700000047683716,
        "slugs": {
          "restaurant": "meghana-foods-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 23/1,Bannerghatta Road, Arekere Village, Begur Hobli, Bangalore",
        "locality": "Bannergatta Main Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "167101",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 3.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121603",
        "name": "Kannur Food Point",
        "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "cuisines": [
          "Kerala",
          "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 6.599999904632568,
        "slugs": {
          "restaurant": "kannur-food-point-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        "locality": "SG Palya",
        "parentId": 20974,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "121603",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 6.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "644537",
        "name": "Third Wave Coffee",
        "uuid": "da9ac392-8cb8-42b2-b785-b89b6b48b161",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Continental"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
          "restaurant": "third-wave-coffee-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Thirdwave Coffee, Sy No.49, Axis Inspiron,Ground Floor, Devarachikkanahalli Village,BTM Layout 4th Stage, Begur Hobli,Bengaluru, Bommanahalli , B.B.M.P South,Karnataka-560068",
        "locality": "Devarachikkanahalli Village",
        "parentId": 274773,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6790117~p=4~eid=00000188-39bc-6350-62f7-9b8c0082044b",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "644537",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 2.200000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 4.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "50844",
        "name": "XO Belgian Waffle",
        "uuid": "59023a72-4bd2-4d23-bc4a-ff7e77500410",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "hr3gg4u6utyz10t7nydb",
        "cuisines": [
          "Desserts"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "xo-belgian-waffle-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO, 1436, 8TH CROSS, 11TH MAIN  B T M 2ND STAGE, BANGALORE,  BTM Layout , B.B.M.P South,  Karnataka, 560076",
        "locality": "2nd Stage",
        "parentId": 5186,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6812011~p=7~eid=00000188-39bc-6350-62f7-9b8d00820719",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "50844",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "34292",
        "name": "Hotel Empire",
        "uuid": "57234254-e48c-489f-8b23-0fbb993f741b",
        "city": "1",
        "area": "Bannerghatta Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "tqhioy2dfavumlikzgfd",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "slaString": "48 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "empire-restaurant-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "\"Empire Restaurant #148/1, Bilekahalli Village,Near IIMBBegur HobliBangalore- 560076\"",
        "locality": "",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "34292",
          "deliveryTime": 48,
          "minDeliveryTime": 48,
          "maxDeliveryTime": 48,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "349608",
        "name": "Sharief Bhai",
        "uuid": "118f8f72-2420-47cf-9fd5-8a75c18f05d7",
        "city": "1",
        "area": "Bommanahalli",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "cw1nzkykbrqgten7zofx",
        "cuisines": [
          "Mughlai",
          "Biryani",
          "Arabian",
          "Kebabs",
          "Beverages",
          "Desserts"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "sharief-bhai-btm-btm-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Address - # 3, Begur, Kodichikkanahalli Road, Adjacent to Jockey Factory, Bommanahalli, Bangalore - 560068, Land Mark : Next to THE GATE ACADEMY",
        "locality": "Kodichikanahalli Main Road",
        "parentId": 5734,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6744653~p=10~eid=00000188-39bc-6350-62f7-9b8e00820a67",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "349608",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "56589",
        "name": "Roti-Wala",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 50,
        "minDeliveryTime": 50,
        "maxDeliveryTime": 50,
        "slaString": "50 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "roti-wala-lavelle-road-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
        "locality": "2nd Stage",
        "parentId": 415860,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "56589",
          "deliveryTime": 50,
          "minDeliveryTime": 50,
          "maxDeliveryTime": 50,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "337335",
        "name": "Kannur food kitchen",
        "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "a27weqanhnszqiuzsoik",
        "cuisines": [
          "Kerala",
          "Biryani",
          "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 51,
        "minDeliveryTime": 51,
        "maxDeliveryTime": 51,
        "slaString": "51 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "kannur-food-kitchen-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
        "locality": "1st  Stage",
        "parentId": 114756,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "337335",
          "deliveryTime": 51,
          "minDeliveryTime": 51,
          "maxDeliveryTime": 51,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "576837",
        "name": "Raasta Biryani",
        "uuid": "16c2e9ae-181a-47ec-8ed1-b6acfd41bf7c",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "vh4yxegs1zvkvd4fgawu",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Kebabs"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "raasta-biryani-hsr-hsr",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "WJ7H+H2P, Muneswara Nagar, Sector 6, HSR Layout 5th Sector, Bengaluru, Karnataka 560102, India",
        "locality": "6th Sector",
        "parentId": 345555,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6772971~p=13~eid=00000188-39bc-6350-62f7-9b8f00820d33",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "576837",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "94703",
        "name": "Sri Punjabi Dhaba",
        "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "i53hrycmcn2oehrojag0",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Chinese",
          "Kebabs"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "slaString": "48 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "sri-punjabi-dhaba-bangalore-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
        "locality": "Cashier Layout",
        "parentId": 21426,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "94703",
          "deliveryTime": 48,
          "minDeliveryTime": 48,
          "maxDeliveryTime": 48,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "42579",
        "name": "Burger King",
        "uuid": "40d6f523-e29a-4ea6-b2f8-d1b87950df64",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 56,
        "minDeliveryTime": 56,
        "maxDeliveryTime": 56,
        "slaString": "56 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "burger-king-vega-city-mall-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Burger King India Pvt Ltd, Unit No QSR 1, 3rd Floor , Vega City Mall, Srinivas Industrial Estate Bannerghatta Road Bangalore  560076",
        "locality": "Vega City Mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "42579",
          "deliveryTime": 56,
          "minDeliveryTime": 56,
          "maxDeliveryTime": 56,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "17036",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "1e3e90a8-2897-4b6e-b7fc-260524697270",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ykkoaqqefmycmwsjmxcm",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 4.599999904632568,
        "slugs": {
          "restaurant": "leon-grill-3rd-sector-hsr",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.17, Ground Floor, 18th Cross Road, 3rd Sector, HSR Layout, Bangalore.",
        "locality": "HSR Layout",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6809097~p=16~eid=00000188-39bc-6350-62f7-9b900082106e",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "4.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "17036",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 4.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "201224",
        "name": "Asha tiffins",
        "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "n15vckntsiboiod3gpco",
        "cuisines": [
          "Indian",
          "South Indian",
          "Beverages"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 4.099999904632568,
        "slugs": {
          "restaurant": "asha-tiffins-hsr-hsr-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
        "locality": "7th Sector",
        "parentId": 236243,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹70",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "201224",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 4.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ];
const ResturantCard =(prop) =>{
    const {restObj} = prop;
    const {cloudinaryImageId, name, cuisines,avgRating,costForTwoString,deliveryTime}= restObj.data;
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
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

const Body =() =>{
    return(
            <div className="body">
                <div className="Search">
                    Search
                </div>
                <div className="res-container">
                   { restList.map((restData) =>(
                        <ResturantCard key ={restData.data.id} restObj={restData}/>
                      ))
                      }
                </div>

            </div>
    );
}

const AppLayout = () =>{
    return(
        <div className ="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
