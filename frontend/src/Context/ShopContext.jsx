import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import CartItems from "../Components/CartItems/CartItems";


export const  ShopContext = createContext(null);
    const getDefaultCart = ()=>{
        let cart ={};
        for(let index=0; index<all_product.length+1 ; index++){
            cart[index] = 0;
        }
        return cart;

    }

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
   

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let TotalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                TotalAmount = TotalAmount+itemInfo.new_price*cartItems[item];
            }    
        }
        return TotalAmount;
    }

    const getTotalCartItems = ()=>{
        let Totalitem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                Totalitem+=cartItems[item];
            }
        }
        return Totalitem;
    }


    const contextVaule ={  getTotalCartItems, getTotalCartAmount, all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextVaule}>
        {props.children}
        </ShopContext.Provider>
    
    )
}


export default ShopContextProvider;