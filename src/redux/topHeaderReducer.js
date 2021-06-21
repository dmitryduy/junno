const initialState = {
    currencies: ['USD$', 'EUR€'],
    countries: ['USA', 'France'],
    currentCurrency: ['USD$'],
    currentCountry: ['USA']
}

const constants = {
    SET_CURRENCY: 'SET_CURRENCY',
    SET_COUNTRY: 'SET_COUNTRY'
}

export const topHeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }
        case constants.SET_COUNTRY:
            return {
                ...state,
                country: action.country
            }
        default:
            return state;
    }
}

export const setCurrency = currency => ({
    type: constants.SET_CURRENCY,
    currency
})

export const setCountry = country => ({
    type: constants.SET_CURRENCY,
    country
})