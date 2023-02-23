import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import "style.css";
import { Route, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Header from "./header";
import Footer from "./footer";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

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
