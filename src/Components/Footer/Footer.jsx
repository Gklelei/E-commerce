import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="Footer-logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socials-icons">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="instagram-icon" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintrest_icon} alt="pintrest-icon" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="whatsapp-icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright © 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer