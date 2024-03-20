import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'
const Breadcrum = (props) => {
    const { product } = props
    return (
        <div className="breadcrum">
            <Link to={'/'}>HOME</Link><img src={arrow_icon} alt="arrow" /> <Link>SHOP</Link> <img src={arrow_icon} alt="arrow" /> <Link>{product.category} </Link> <img src={arrow_icon} alt="arrow" /> {product.name}
        </div>
    )
}

export default Breadcrum

