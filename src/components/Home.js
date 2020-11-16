import React from 'react'
import HomeBackground from '../images/home_background.jpg';
import './Home.css';
import Product from './Product';
import { useStateValue } from '../state/StateProvider';

function Home() {
    const [{ products }, dispatch] = useStateValue();

    return (
        <div className="home">
            <img className="home__image" src={HomeBackground} alt=""></img>
            <div className="home__row">
                <Product
                    id={products[0].id}
                    title={products[0].title}
                    price={products[0].price}
                    rating={products[0].rating}
                    image={products[0].image}
                    quantity={products[0].quantity}
                />
                <Product
                    id={products[1].id}
                    title={products[1].title}
                    price={products[1].price}
                    rating={products[1].rating}
                    image={products[1].image}
                    quantity={products[1].quantity}
                />
            </div>
            <div className="home__row">
                <Product
                    id={products[2].id}
                    title={products[2].title}
                    price={products[2].price}
                    rating={products[2].rating}
                    image={products[2].image}
                    quantity={products[2].quantity}
                />
                <Product
                    id={products[3].id}
                    title={products[3].title}
                    price={products[3].price}
                    rating={products[3].rating}
                    image={products[3].image}
                    quantity={products[3].quantity}
                />
                <Product
                    id={products[4].id}
                    title={products[4].title}
                    price={products[4].price}
                    rating={products[4].rating}
                    image={products[4].image}
                    quantity={products[4].quantity}
                />
            </div>
            <div className="home__row">
                <Product
                    id={products[5].id}
                    title={products[5].title}
                    price={products[5].price}
                    rating={products[5].rating}
                    image={products[5].image}
                    quantity={products[5].quantity}
                />
            </div>
        </div>
    )
}
export default Home
