const constants = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    ADD_CART: "ADD_CART"
}

const initialState = {
    favorites: [],//id
    cart: [],
    totalPrice: 0
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_FAVORITE:
            console.log(state);
            return {
                ...state,
                favorites: [...state.favorites, action.payload]

            }
        case constants.REMOVE_FAVORITE:
            const newFavorites = state.favorites.filter(item => item !== action.payload);
            return {
                ...state,
                favorites: newFavorites
            }
        case constants.ADD_CART:
            let added = false;
            const newCart = state.cart.map(item => {
                if (item.id === action.payload) {
                    added = true;
                    item.count++;
                    return item;
                }
                return item;
            })
            if (!added) {
                newCart.push({id: action.payload.id, count: 1});
            }
            return {
                ...state,
                cart: newCart,
                totalPrice: +(state.totalPrice + action.payload.price).toFixed(2)
            }
        default:
            return state;
    }
}

export const addFavorites = id => ({
    type: constants.ADD_FAVORITE,
    payload: id
})

export const removeFavorite = id => ({
    type: constants.REMOVE_FAVORITE,
    payload: id
})

export const addToCart = (id, price) => ({
    type: constants.ADD_CART,
    payload: {
        id,
        price
    }
})