const initialState = {

cards:[{id:1,similar:[2,6,3,7,9,4],isNew:false,name:"Fish Cut Out Set",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta doloribus eum facilis fugiat in\n        inventore magnam necessitatibus nobis placeat quaerat, quas qui quibusdam recusandae, repudiandae sapiente sequi\n        sint, veritatis!",price:"100.00",discount:10,category:"women",rating:5,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/1.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:2,similar:[5,1,3,6,9,4],isNew:false,name:"Fish Cut Out Set",description:"test",price:"34.23   ",discount:10,category:"women",rating:5,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/1.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:3,similar:[8,6,1,9,4,2],isNew:true,name:"Fish Cut Out Set",description:"test",price:"23.00",discount:null,category:"women",rating:3,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/12.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:4,similar:[8,6,1,9,7,2],isNew:false,name:"Fish Cut Out Set",description:"test",price:"349.23",discount:34,category:"men",rating:3,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/7.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:5,isNew:true,similar:[8,6,1,9,4,2],name:"Fish Cut Out Set",description:"test",price:"3.00",discount:23,category:"men",rating:4,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/7.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:6,similar:[8,5,4,2],isNew:true,name:"Original Kaval Windbreaker Winter Jacket",description:"test",price:"44.53",discount:23,category:"casual",rating:2,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/5.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:7,similar:[8,6,1,9],isNew:false,name:"Originals Windbreaker Winter Jacket",description:"test",price:"44.53",discount:null,category:"casual",rating:5,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/8.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:8,similar:[4,2],isNew:true,name:"Walnut Cutting Board",description:"test",price:"55.00",discount:null,category:"men",rating:5,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/8.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:9,similar:[8,6,1,3,2],isNew:true,name:"Lucky Wooden Elephant",description:"test",price:"32.00",discount:12,category:"men",rating:1,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/product/12.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]},{id:10,similar:[8,9,4,2],isNew:false,name:"Originals Windbreaker Winter Jacket",description:"test",price:"322.00",discount:null,category:"casual",rating:6,images:["https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg","https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/4.jpg"]}],
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
