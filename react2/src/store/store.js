import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter'
import cartItemsReducer from './cart'

export default configureStore({
    reducer:{
        counter: counterReducer,
        cartItems: cartItemsReducer
    }
})
