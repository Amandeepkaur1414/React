import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action) =>{
            //mutating the state here (directly changing the state)
                state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        },
        getCart: (state, action) => {
            state.items = action.payload;
        },
    }
});
//actions are addItems,removeItem,clearCart in reducer
export const{addItems,removeItem,clearCart,getCart} = cartSlice.actions;
export default cartSlice.reducer;