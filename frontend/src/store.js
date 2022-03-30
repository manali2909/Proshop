import {createStore , combineReducers ,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension'
import {productListReducer,productDetailReducer} from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer
})
 //getting cart from local storage

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems')) 
    :[]
const initialState = {
    cart:{
        cartItems:cartItemsFromStorage
    }
}

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;