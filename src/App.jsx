import React from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import FoodPage from "./pages/Food/FoodPage.jsx";
import DrinksPage from "./pages/Drinks/DrinksPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
