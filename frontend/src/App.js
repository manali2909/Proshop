import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ShippingScreen from "./pages/ShippingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderScreen from "./pages/OrderScreen";
import UserListScreen from "./pages/UserListScreen";
import UserEditScreen from "./pages/UserEditScreen";
import ProductListScreen from "./pages/ProductListScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>
              <Route path="/products/:id" element={<ProductScreen/>}/>
              <Route path="/cart/:id" element={<CartScreen/>}/>
              <Route path="/cart" element={<CartScreen/>}/>
              <Route path="/shipping" element={<ShippingScreen/>}/>
              <Route path="/payment" element={<PaymentScreen/>}/>
              <Route path="/placeorder" element={<PlaceOrderScreen/>}/>
              <Route path="/login" element={<LoginScreen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>}/>
              <Route path="/order/:id" element={<OrderScreen/>}/>
              <Route path="/admin/userlist" element={<UserListScreen/>}/>
              <Route path="/admin/user/:id/edit" element={<UserEditScreen/>}/>
              <Route path="/admin/productlist" element={<ProductListScreen/>}/>
              
            </Routes>
          </Container>
        </main>
        
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
