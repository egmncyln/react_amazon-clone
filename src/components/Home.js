import React from 'react'
import HomeBackground from '../images/home_background.jpg';
import './Home.css';
import Product from './Product';
import ImageCleanCode from '../images/clean-code.jpg';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={HomeBackground} alt=""></img>
            <div className="home__row">
                <Product
                    id="1"
                    title="Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition"
                    price={11.96}
                    rating={5}
                    image={ImageCleanCode}
                />
                <Product
                    id="2"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="4"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="5"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
        </div>
    )
}
export default Home
