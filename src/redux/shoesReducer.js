const initialState = {
    cards: [],
    categories: ['all', 'women', 'men', 'casual'],
    activeCategory: 0,
    foundCards: [],
}


const constants = {
    SET_CATEGORY: 'SET_CATEGORY',
    SET_CARDS: "SET_CARDS",
    SEARCH_SHOES: 'SEARCH_SHOES'
}

export const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CATEGORY:
            return {
                ...state,
                activeCategory: action.categoryIndex
            }
        case constants.SET_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        case constants.SEARCH_SHOES:
            const result = state.cards.filter(card => card.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state,
                foundCards: result
            }
        default:
            return state;
    }
}

export const changeCategory = newCategory => ({
    type: constants.SET_CATEGORY,
    categoryIndex: newCategory
});

export const setCards = data => ({
    type: constants.SET_CARDS,
    cards: data
})

export const fetchCards = () => dispatch => {
    fetch('http://localhost:3004/cards')
        .then(response => response.json())
        .then(data => {
            dispatch(setCards(data));
        })
}

export const fetchCategoryCards = name => dispatch => {
    fetch(`http://localhost:3004/cards?${name === 'all' ? '' : `category=${name}`}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setCards(data));
        });
}


export const searchShoes = text => ({
    type: constants.SEARCH_SHOES,
    payload: text
})
