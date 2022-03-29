import {createStore , combineReducers ,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension'
import {productListReducer,productDetailReducer} from './reducers/productsReducer'

const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer
})

const initialState = {}

const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    // applyMiddleware(thunk)
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;