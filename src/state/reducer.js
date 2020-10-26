import { ACTIONS } from "./actions"

export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
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