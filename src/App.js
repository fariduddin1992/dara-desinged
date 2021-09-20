import React from 'react'
import AddToCart from './components/Cart/AddToCart';
import Footer from './components/Footer/Footer';

import TopHeader from './components/Header/TopHeader';
import ProductList from './components/ProductComponent/ProductList';
import SliderPage from './components/slider/SliderPage';

function App() {
  return (   
    <div className="page-wrapper">
      <TopHeader/> 
      <SliderPage/>
      <ProductList/>
       <AddToCart/>
      <Footer/>
    </div>
  );
}

export default App;
