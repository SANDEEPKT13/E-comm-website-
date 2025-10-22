import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'


export const  ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextVaule ={all_product};

    return (
        <ShopContext.Provider value={contextVaule}>
        {props.children}
        </ShopContext.Provider>
    
    )
}


export default ShopContextProvider;