import React from 'react'
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
      <Footer/>
    </div>
  );
}

export default App;
