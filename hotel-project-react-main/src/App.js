import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import RoomDetails from "./pages/RoomDetails";
import Payment from "./pages/Payment";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/services" element={<Services />} />
          <Route path="/roomd" element={<RoomDetails />} />
          <Route path="/paym" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </PayPalScriptProvider>
  );
}
