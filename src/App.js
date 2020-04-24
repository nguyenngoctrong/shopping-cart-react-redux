import React from 'react';
import './index.scss'
import { Provider } from "react-redux";
import store from "./redux/store";
import Product from './container/product/Product';
import Cart from './container/cart/Cart';

function App() {
  console.log("appp")
  return (
    <Provider store = { store }>
      <div className="App">
        <Cart/>
        <Product/>
      </div>
    </Provider>
  );
}

export default App;
