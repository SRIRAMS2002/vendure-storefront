import React from 'react';

import ProductList from "./Components/ProductList";

import "./App.css";
// import Hygraph from "./Components/Hygraph";

import Image from "./Components/Image";
import Notification from './Components/Notification';

const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Vendure Storefront</h1>
      </header>
      <main>
        {/* <Hygraph /> */}
        <Image/>
        <ProductList />
        <Notification/>
       
       
      </main>
    </div>
  );
};

export default App;
