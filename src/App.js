import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import ProductDetail from './pages/productDetail/ProductDetail';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
    return (
        <div className="App">

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Categories />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
            </Routes>
            <Footer />

        </div>
    );
}

export default App;
