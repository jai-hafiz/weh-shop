import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice ({
    name : 'cart',
    initialState : {
        itemsList : [],
        totalQuantity : 0,
        
    },
    reducers : {
        addTocart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            else{
                state.itemsList.push ({
                    id : newItem.id,
                    name : newItem.name,
                    quantity : 1,
                    totalPrice : newItem.price,
                    price : newItem.price
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,action){
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id ===id)
        },
        setShowCart (state){
            state.showCart =! state.showCart;
        }
    },
})

export default cartSlice;
export const cartActions = cartSlice.actions;