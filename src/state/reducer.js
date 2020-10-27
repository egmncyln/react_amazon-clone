import { ACTIONS } from "./actions"

export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case ACTIONS.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case ACTIONS.REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(x => x.id != action.id)
            }
        default:
            return state;
    }
}

export default reducer;