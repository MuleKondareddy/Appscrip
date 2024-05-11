import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Headers/Header";
import Head from "./Component/Headers/Head";
import Footer from "./Component/Headers/Footer";
import Product from "./Component/Pages/Product";
import Skills from "./Component/Pages/Skills";
import Stories from "./Component/Pages/Stories";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import ProductDetails from "./Component/Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Head />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
