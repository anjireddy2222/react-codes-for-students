import { createSlice } from "@reduxjs/toolkit";


let cartItemsSlice = createSlice(
    {
        name: 'cartItems',
        initialState: [],
        reducers:{
            addItem: (state, action) =>{
                console.log( 'action', action.payload)
                return state
            },
            removeItem: (state, action) =>{

                return state
            },
            addProducts: (state, action) =>{
                console.log( action.payload )
                state = [ ...action.payload ]
                return state
            },
            updateProduct: (state, action) =>{
                state = state.map( product =>{
                    if( product.id == action.payload.id ){
                        product = action.payload
                    }
                    return product
                })
                return state
            },
            deleteProduct: (state, action) =>{
                let tmpData = []
                // 25 
                state.forEach( product => {
                    if( product.id == action.payload.id ){
                        // 1 == 25
                        // 2 == 25
                        // 25 == 25
                    }else{
                        tmpData.push(product)
                    }
                })
                state = [...tmpData]
                return state
            }
        }

    }
)

export const {addItem,  removeItem, addProducts, updateProduct, deleteProduct } = cartItemsSlice.actions

export default cartItemsSlice.reducer

