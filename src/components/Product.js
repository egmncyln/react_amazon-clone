import React from 'react';
import { ACTIONS } from '../state/actions';
import { useStateValue } from '../state/StateProvider';
import Calculator from './Calculator';
import './Product.css';

function Product({ id, title, image, price, rating, quantity }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: ACTIONS.ADD_TO_BASKET,
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity
            }
        })
    };

    const increase = () => {
        dispatch({
            type: ACTIONS.INCREASE_PRODUCT,
            id: id
        });
    }

    const decrease = () => {
        dispatch({
            type: ACTIONS.DECREASE_PRODUCT,
            id: id
        });
    }

    return (
        <div key={id} className="product">
            <div key={id} className="product__info">
                <p key={id}>{title}</p>
                <p key={id} className="product__price">
                    <small key={id}>$</small>
                    <strong key={id}>{price}</strong>
                </p>
                <div key={id} className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p key={id}>🌟</p>
                            ))
                    }
                </div>
            </div>
            <img key={id} src={image} alt=""></img>
            <div key={id} className="product__basket">
                <button key={id} onClick={addToBasket}>Add To Basket</button>
                <Calculator key={id} quantity={quantity} increase={increase} decrease={decrease} />
            </div>
        </div>
    )
}

export default Product
