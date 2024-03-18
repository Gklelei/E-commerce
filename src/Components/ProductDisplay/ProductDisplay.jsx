import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="product-image" />
                    <img src={product.image} alt="product-image" />
                    <img src={product.image} alt="product-image" />
                    <img src={product.image} alt="product-image" />
                </div>
                <div className="produc-display-image">
                    <img className='product-display-main-img' src={product.image} alt="product-image" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="star-icon" />
                    <img src={star_icon} alt="star-icon" />
                    <img src={star_icon} alt="star-icon" />
                    <img src={star_icon} alt="star-icon" />
                    <img src={star_dull_icon} alt="star-dull-icon" />
                    <p>(150)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price old">${product.old_price}</div>
                    <div className="product-display-right-price new">${product.new_price}</div>
                </div>
                <div className="product-display-right-description">
                    pDiscover the essence of style and functionality with our exclusive collection of products. From timeless classics to modern innovations, each item is crafted with precision and attention to detail, embodying quality and sophistication. Elevate your lifestyle, express your unique personality, and make every moment unforgettable with our curated selection of must-have essentials. Explore endless possibilities and redefine your everyday experience with our diverse range of products. Shop now and embrace the extraordinary
                </div>
                <div className="product-display-right-size">
                    <h1>Select size</h1>
                    <div className="product-display-right-sizes">
                        <div >S</div>
                        <div >M</div>
                        <div >L</div>
                        <div >XL</div>
                        <div >XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="product-display-right-category"> <span>Category:</span> Women, T-shirt,CropTop</p>
                <p className="product-display-right-category"> <span>Tags:</span> Morder, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
