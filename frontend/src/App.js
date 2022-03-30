import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
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
              <Route path="/cart/" element={<CartScreen/>}/>
            </Routes>
          </Container>
        </main>
        
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
