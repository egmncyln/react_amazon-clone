import React from 'react'
import HomeBackground from '../images/home_background.jpg';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={HomeBackground} alt=""></img>
        </div>
    )
}

export default Home
