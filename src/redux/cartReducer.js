const constants = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    ADD_CART: "ADD_CART",
    SHOW_WISHLIST: 'SHOW_WISHLIST',
    HIDE_WISHLIST: 'HIDE_WISHLIST',
}

const initialState = {
    favorites: [],//id
    cart: [],
    totalPrice: 0,
    showWishlist: false
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_FAVORITE:
            if (state.favorites.includes(action.payload)) return state;
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
                if (item.id === action.payload.id) {
                    added = true;
                    item.count+= action.payload.count;
                    return item;
                }
                return item;
            });
            if (!added) {
                newCart.push({id: action.payload.id, count: action.payload.count});
            }
            return {
                ...state,
                cart: newCart,
                totalPrice: +(state.totalPrice + +action.payload.price * action.payload.count).toFixed(2)
            }
        case constants.SHOW_WISHLIST:
            return {
                ...state,
                showWishlist: true
            }
        case constants.HIDE_WISHLIST:
            return {
                ...state,
                showWishlist: false
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

export const addToCart = (id, price, count) => ({
    type: constants.ADD_CART,
    payload: {
        id,
        price,
        count
    }
})

export const showWishList = () => ({
    type: constants.SHOW_WISHLIST
})

export const hideWishList = () => ({
    type: constants.HIDE_WISHLIST
})
