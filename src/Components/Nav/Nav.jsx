import './Nav.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    const [menu, setMenu] = useState("");
    return (
        <div className="nav">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}> <Link to={'/'} style={{ textDecoration: 'none' }}>Shop</Link> {menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Men") }}><Link to={'/Men'} style={{ textDecoration: 'none' }}>Men</Link> {menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Women") }}><Link to={'/Women'} style={{ textDecoration: 'none' }}>Women</Link> {menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Kids") }}><Link to={'/Kids'} style={{ textDecoration: 'none' }}>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to={'/login'} ><button>Login</button></Link>
                <Link to={"/cart"}> <img src={cart_icon} alt="cart-icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Nav