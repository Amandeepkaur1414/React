const { configureStore, createReducer } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore(
//add slices
{
    reducer:{
        cart:cartReducer,
    }
}
);
export default appStore;