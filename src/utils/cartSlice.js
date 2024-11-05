import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItems:(state,action)=>{
            //mutating the state here
            state.item.push(action.payload);
        },
        removeItems:(state)=>{
            state.item.pop();
        },
        clearCart:(state)=>{
            state.item.length = 0;
        },
    },
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;