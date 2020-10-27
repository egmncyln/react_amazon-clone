import React from 'react';
import { ACTIONS } from '../state/actions';
import './CheckoutProduct.css';
import { useStateValue } from '../state/StateProvider';
import { useHistory } from "react-router-dom";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: ACTIONS.REMOVE_FROM_BASKET,
            id: id
        });
    }

    return (
        <div className="checkout-product">
            <img className="checkout-product__image" src={image} alt />
            <div className="checkout-product__info">
                <p className="checkout-product__title">{title}</p>
                <p className="checkout-product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
