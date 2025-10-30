import React, { useContext, useState } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {

  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default Cart
