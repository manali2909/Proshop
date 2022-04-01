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
              <Route path="/login" element={<LoginScreen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>}/>
              
            </Routes>
          </Container>
        </main>
        
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
