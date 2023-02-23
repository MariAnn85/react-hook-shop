import * as React from 'react';
import './style.css';
import React from 'react';
import Product from './Product';


import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./header";
import Footer from "./footer";

  function App() {
  return <Product />
}

export default App;
export default function App() { 
return ( 
<BrowserRouter> 
<Routes> 

<Route index element={<Home />} /> 
<Route path="header" element={<Header />} /> 
<Route path="footer" element={<Footer />} /> 

</Route> 
</Routes> 
</BrowserRouter> 
); }

const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);
