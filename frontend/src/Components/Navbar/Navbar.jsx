import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='navbar'>
      <div className="nav-logo">
         {/* ✅ Wrap the logo in a Link so clicking it goes to "/" */}
        <Link to='/'>
          <img src={logo} alt="logo" className="clickable-logo" />
        </Link>
        
        <p className='brand-name'>
          <Link to='/' style={{textDecoration:'none'}}>SHOOPER</Link>
        </p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>
            <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "shop" && <hr />}
        </li>
        <li onClick={()=>{setMenu("men")}}>
            <Link style={{textDecoration:'none'}}  to='/men'>Men</Link> {menu === "men" && <hr />}
        </li>
        <li onClick={()=>{setMenu("women")}}>
            <Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu === "women" && <hr />}
        </li>
        <li onClick={()=>{setMenu("kid")}}>
            <Link style={{textDecoration:'none'}} to='/kid'>Kid</Link> {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
