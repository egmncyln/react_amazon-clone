import React from 'react'
import HomeBackground from '../images/home_background.jpg';
import './Home.css';
import Product from './Product';
import ProductImage1 from '../images/product1.jpg';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={HomeBackground} alt=""></img>
            <div className="home__row">
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    price={11.23}
                    rating={3}
                    image={ProductImage1}
                />
            </div>
        </div>
    )
}
export default Home
