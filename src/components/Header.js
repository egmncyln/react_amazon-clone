import React from 'react'
import { Link } from 'react-router-dom';
import AmazonLogo from '../images/amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from '../state/StateProvider';
import { auth } from '../firebase/firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={AmazonLogo} alt=""></img>
            </Link>
            <div className="header__search">
                <input type="text" className="header__search-input" />
                <SearchIcon className="header__search-icon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__option-first">Hello, {user?.email}</span>
                        <span className="header__option-second">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-first">Returns</span>
                        <span className="header__option-second">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option-first">Your</span>
                        <span className="header__option-second">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__option-basket">
                        <BasketIcon />
                        <span className="header__option-second header__option-basket-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
