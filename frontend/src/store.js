import {createStore , combineReducers ,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension'
import {productListReducer,productDetailReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer} from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducer';
import { userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer,userDeleteReducer, userUpdateReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDetailsReducer,orderPayReducer,orderListMyReducer, orderListReducer, orderDeliverReducer } from './reducers/orderReducer';
const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    cart:cartReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
   
})
 //getting cart from local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems')) 
    :[]

const userItemsFromStorage = localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo')) 
    :null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
    ?JSON.parse(localStorage.getItem('shippingAddress')) 
    :{}

const initialState = {
    cart:{cartItems:cartItemsFromStorage , shippingAddress:shippingAddressFromStorage},
    userLogin :{userInfo:userItemsFromStorage}
}

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;