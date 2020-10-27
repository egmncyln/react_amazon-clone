import React from 'react'
import HomeBackground from '../images/home_background.jpg';
import './Home.css';
import Product from './Product';
import ImageCleanCode from '../images/clean-code.jpg';
import ImageSoftwareCraftsman from '../images/software_craftsman_.jpg';
import ImageCleanCoder from '../images/clean_coder.jpg';
import ImageSoftSkills from '../images/soft_skills.jpg';
import ImagePragmaticProgrammer from '../images/pragmatic_programmer.jpg';
import ImageMacbookPro from '../images/macbook_pro.jpg';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={HomeBackground} alt=""></img>
            <div className="home__row">
                <Product
                    id="1"
                    title="Clean Code: A Handbook of Agile Software Craftsmanship"
                    price={11.96}
                    rating={5}
                    image={ImageCleanCode}
                />
                <Product
                    id="2"
                    title="Software Craftsman, The: Professionalism, Pragmatism, Pride (Robert C. Martin Series)"
                    price={129.3}
                    rating={4}
                    image={ImageSoftwareCraftsman}
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Clean Coder, The: A Code of Conduct for Professional Programmers (Robert C. Martin Series)"
                    price={199.99}
                    rating={3}
                    image={ImageCleanCoder}
                />
                <Product
                    id="4"
                    title="Soft Skills: The Software Developer's Life Manual"
                    price={98.99}
                    rating={5}
                    image={ImageSoftSkills}
                />
                <Product
                    id="5"
                    title="The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)"
                    price={598.99}
                    rating={4}
                    image={ImagePragmaticProgrammer}
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
                    price={1094.98}
                    rating={4}
                    image={ImageMacbookPro}
                />
            </div>
        </div>
    )
}
export default Home
