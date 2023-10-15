import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Booking from "./pages/BookingPage";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function App() {
  return (
    <div className="App relative flex-1 overflow-x-hidden hide-scrollbar  flex-col-reverse " id="top">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Booking />} />
      </Routes>
      <Footer />
      <div className="rounded-full   fixed z-50 bottom-0 right-0 bg-blue-500"><a href="#top"><ArrowDropUpIcon fontSize="large"/></a></div>
    </div>
  );
}

export default App;
