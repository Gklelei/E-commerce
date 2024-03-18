import './Item.css';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="image" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
            </div>
        </div>
    );
};

Item.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
    new_price: PropTypes.string,
    old_price: PropTypes.string,
};

export default Item;
