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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="src/pages/Food/FoodPage" element={<FoodPage />} />
          <Route path="src/pages/Drinks/DrinksPage" element={<DrinksPage />} />
          <Route
            path="src/pages/Contact/ContactPage"
            element={<ContactPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
