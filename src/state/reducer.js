import { ACTIONS } from "./actions"

import ImageCleanCode from '../images/clean-code.jpg';
import ImageSoftwareCraftsman from '../images/software_craftsman_.jpg';
import ImageCleanCoder from '../images/clean_coder.jpg';
import ImageSoftSkills from '../images/soft_skills.jpg';
import ImagePragmaticProgrammer from '../images/pragmatic_programmer.jpg';
import ImageMacbookPro from '../images/macbook_pro.jpg';

export const initialState = {
    products: [
        {
            id: 1,
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            price: 11.96,
            rating: 5,
            image: ImageCleanCode,
            quantity: 1
        },
        {
            id: 2,
            title: "Software Craftsman, The: Professionalism, Pragmatism, Pride (Robert C. Martin Series)",
            price: 129.3,
            rating: 4,
            image: ImageSoftwareCraftsman,
            quantity: 1
        },
        {
            id: 3,
            title: "Clean Coder, The: A Code of Conduct for Professional Programmers (Robert C. Martin Series)",
            price: 199.99,
            rating: 3,
            image: ImageCleanCoder,
            quantity: 1
        },
        {
            id: 4,
            title: "Soft Skills: The Software Developer's Life Manual",
            price: 98.99,
            rating: 5,
            image: ImageSoftSkills,
            quantity: 1
        },
        {
            id: 5,
            title: "The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)",
            price: 598.99,
            rating: 4,
            image: ImagePragmaticProgrammer,
            quantity: 1
        },
        {
            id: 6,
            title: "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray",
            price: 1094.98,
            rating: 4,
            image: ImageMacbookPro,
            quantity: 1
        }
    ],
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            {
                return {
                    ...state,
                    user: action.user
                }
            }
        case ACTIONS.INCREASE_PRODUCT:
            {
                const product = state.products.filter(x => x.id === action.id)[0];
                if (!!product) {
                    const index = state.products.indexOf(product);
                    const updatedProduct = {
                        ...state.products[index],
                        quantity: product.quantity + 1
                    }
                    const updatedProducts = [...state.products];
                    updatedProducts[index] = updatedProduct;
                    return {
                        ...state,
                        products: updatedProducts
                    };
                }
                else {
                    return state;
                }
            }
        case ACTIONS.DECREASE_PRODUCT:
            {
                const product = state.products.filter(x => x.id === action.id)[0];
                if (!!product) {
                    if (product.quantity > 1) {
                        const index = state.products.indexOf(product);
                        const updatedProduct = {
                            ...state.products[index],
                            quantity: product.quantity - 1
                        }
                        const updatedProducts = [...state.products];
                        updatedProducts[index] = updatedProduct;
                        return {
                            ...state,
                            products: updatedProducts
                        };
                    }
                    else {
                        return state;
                    }
                }
                else {
                    return state;
                }
            }
        case ACTIONS.INCREASE_BASKET:
            {
                const product = state.basket.filter(x => x.id === action.id)[0];
                if (!!product) {
                    const index = state.basket.indexOf(product);
                    const updatedProduct = {
                        ...state.basket[index],
                        quantity: product.quantity + 1
                    }
                    const updatedBasket = [...state.basket];
                    updatedBasket[index] = updatedProduct;
                    return {
                        ...state,
                        basket: updatedBasket
                    };
                }
                else {
                    return state;
                }
            }
        case ACTIONS.DECREASE_BASKET:
            {
                const product = state.basket.filter(x => x.id === action.id)[0];
                if (!!product) {
                    if (product.quantity > 1) {
                        const index = state.basket.indexOf(product);
                        const updatedProduct = {
                            ...state.basket[index],
                            quantity: product.quantity - 1
                        }
                        const updatedBasket = [...state.basket];
                        updatedBasket[index] = updatedProduct;
                        return {
                            ...state,
                            basket: updatedBasket
                        };
                    }
                    else {
                        return state;
                    }
                }
                else {
                    return state;
                }
            }
        case ACTIONS.ADD_TO_BASKET:
            {
                const product = state.basket.filter(x => x.id === action.item.id)[0];
                if (!!product) {
                    const index = state.basket.indexOf(product);
                    const updatedProduct = {
                        ...state.basket[index],
                        quantity: product.quantity + action.item.quantity
                    }
                    const updatedBasket = [...state.basket];
                    updatedBasket[index] = updatedProduct;
                    return {
                        ...state,
                        basket: updatedBasket
                    };

                }
                else {
                    return {
                        ...state,
                        basket: [...state.basket, action.item]
                    };
                }
            }
        case ACTIONS.REMOVE_FROM_BASKET:
            {
                return {
                    ...state,
                    basket: state.basket.filter(x => x.id != action.id)
                }
            }
        default:
            return state;
    }
}

export default reducer;