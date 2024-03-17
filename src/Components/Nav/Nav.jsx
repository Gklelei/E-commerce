import './Nav.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
const Nav = () => {
    const [menu, setMenu] = useState("");
  return (
    <div className="nav">
<div className="nav-logo">
    <img src={logo} alt="logo" />
    <p>SHOPPER</p>
</div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("Shop")}}>Shop {menu === "Shop" ? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Men")}}>Men {menu === "Men" ? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Women")}}>Women {menu === "Women" ? <hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Kids")}}>Kids {menu === "Kids" ? <hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
    <button>Login</button>
    <img src={cart_icon} alt="cart-icon" />
    <div className="nav-cart-count">0</div>
</div>
    </div>
  )
}

export default Nav