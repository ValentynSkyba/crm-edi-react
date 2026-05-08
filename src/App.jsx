import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Home from "./pages/HomePage/HomePage.jsx";
import FoodPage from "./pages/Food/FoodPage.jsx";
import DrinksPage from "./pages/Drinks/DrinksPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
