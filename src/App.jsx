import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Object from "./pages/object";

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/object" element={<Object />} />
          </Routes>
        </Router>
    </LanguageProvider>
  </ThemeProvider>
  );
}

export default App;
