import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AllBooks from "./Pages/AllBooks";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/All-books" element={<AllBooks />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
