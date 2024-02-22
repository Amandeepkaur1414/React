import React from 'react';
import {CDN_URL} from "../utils/constants";

function CartList({items}) {
  return (
    <div>
        {items.map((ele)=>(
              <div  key ={ele.card.info.id} className="rounded-xl p-2 m-8">
                <div className='flex p-4 m-4'>
                    { ele.card.info.imageId ?
                    <img  className="rounded-lg w-[150px]" src={CDN_URL + ele.card.info.imageId} /> :""}
                    <div className='flex flex-wrap'>
                      <div className="text-ellipsis text-gray-800 font-semibold">{ele.card.info.name}</div>
                      <div className=' p-4'>quantity: {1}</div>
                      <div className=' p-4'> ₹ {ele.card.info.defaultPrice ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}</div>
                    </div>
                </div>
                <hr className="mt-10 bg-slate-300" />
              </div>
        ))
    }
    </div>
  )
}

export default CartList