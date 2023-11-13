import React, { createContext, useState } from 'react'
import all_productData from '../Components/Assests/all_productData';



export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_productData.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // Total Price funtions 

    const getTotalCartPrice = () => {
        let totalPrice = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_productData.find((pro) => pro.id === Number(item))
                totalPrice += itemInfo.new_price * cartItems[item];
            }
        }
        return totalPrice;
    }


    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


   


    const contextValue = { getTotalCartPrice, getTotalCartItems, all_productData, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;