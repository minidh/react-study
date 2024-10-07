import { configureStore,createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        chageName(state) {
            return 'john' + state
        }
    }
})
export let {chageName} = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})
let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'white and black', count : 2},
        {id : 2, name : 'Gray Yordan', count : 1}
    ]
})
export default configureStore({
    reducer : {
        user : user.reducer,
        stock :stock.reducer,
        cart : cart.reducer
    }
})