import {createStore , combineReducers ,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension'
import {productListReducer,productDetailReducer} from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
})
 //getting cart from local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems')) 
    :[]

const userItemsFromStorage = localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo')) 
    :null

const initialState = {
    cart:{cartItems:cartItemsFromStorage},
    userLogin :{userInfo:userItemsFromStorage}
}

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;