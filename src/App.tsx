import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import CategoriesView from './views/CategoriesView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingcartView from './views/ShoppingcartView';
import ProductContext from './contexts/contexts';


import NotFoundView from './views/NotFoundView';

function App() {
  const [products, setProducts] = useState({
    all: [],
    featuredProducts: [],
    flashSaleProducts: []
  })

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const fetchFlashSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, flashSaleProducts: await result.json()})
    }
    fetchFlashSaleProducts()

  }, [setProducts])
    
  
  


  return (
    <BrowserRouter>
      <ProductContext>
        <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/contacts" element={<ContactView/>} />
        <Route path="/products" element={<ProductsView/>} />
        <Route path="/products/:name" element={<ProductsDetailsView/>} />
        <Route path="/categories" element={<CategoriesView/>} />
        <Route path="/search" element={<SearchView/>} />
        <Route path="/compare" element={<CompareView/>} />
        <Route path="/wishlist" element={<WishlistView/>} />
        <Route path="/shoppingcart" element={<ShoppingcartView/>} />
        <Route path="*" element={<NotFoundView/>} />
        </Routes>
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
