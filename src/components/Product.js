import React from 'react';
import { ACTIONS } from '../state/actions';
import { useStateValue } from '../state/StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: ACTIONS.ADD_TO_BASKET,
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>🌟</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product