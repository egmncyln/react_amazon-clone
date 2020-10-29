import React from 'react';
import { ACTIONS } from '../state/actions';
import './CheckoutProduct.css';
import { useStateValue } from '../state/StateProvider';
import { useHistory } from "react-router-dom";
import Calculator from './Calculator';

function CheckoutProduct({ key, id, image, title, price, rating, quantity }) {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: ACTIONS.REMOVE_FROM_BASKET,
            id: id
        });
    }

    const increase = () => {
        dispatch({
            type: ACTIONS.INCREASE_BASKET,
            id: id
        });
    }

    const decrease = () => {
        dispatch({
            type: ACTIONS.DECREASE_BASKET,
            id: id
        });
    }

    return (
        <div key={key} className="checkout-product">
            <div key={key} className="checkout-product">
                <img key={key} className="checkout-product-image" src={image} alt />
                <div key={key} className="checkout-product-info">
                    <div key={key} className="checkout-product-info__top">
                        <p key={key} className="checkout-product-title">{title}</p>
                        <p key={key} className="checkout-product-price">
                            <small key={key}>$</small>
                            <strong key={key}>{price}</strong>
                        </p>
                        <div key={key} className="checkout-product-rating">
                            {
                                Array(rating)
                                    .fill()
                                    .map(() => (
                                        <p key={key}>🌟</p>
                                    ))
                            }
                        </div>
                    </div>
                    <div key={key} className="checkout-product-info__bottom">
                        <button key={key} onClick={removeFromBasket}>Remove from Basket</button>
                        <Calculator key={key} quantity={quantity} increase={increase} decrease={decrease} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
