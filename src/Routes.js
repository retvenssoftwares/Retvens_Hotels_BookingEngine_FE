import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Home from './component/home';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/about';
import Auth from './component/login';
import Booking from './component/booking';
import HotelList from './component/hotel-list';
import HotelDetail from './component/hotel-detail';
import Payment from './component/payment';
import BookingStatus from './component/BookingStatus';
import PrivacyPolicy from './component/privacyPolicy';
import TermsNConditions from './component/termsNConditions';
import TrustNSafety from './component/trustNSafety';
// import RoomBooking from './component/RoomBooking';

// import HotelDetail1 from './component/hotel-detail1';

function BookingRoutes() {

  return (

    <Router>
      <Navbar />
      <Inner/>
    </Router>

  );
}

function Inner() {

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Auth />} />
      <Route exact path="/booking/:propertyId" element={<Booking />} />
      <Route exact path="/payment/:bookingId" element={<Payment />} />
      <Route exact path="/hotel-list" element={<HotelList />} />
      <Route exact path="/hotel-detail/:propertyId" element={<HotelDetail />} />
      <Route exact path='/booking-status' element={<BookingStatus />} />
      <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route exact path='/tnc' element={<TermsNConditions />} />
      <Route exact path='/tns' element={<TrustNSafety />} />
      {/* <Route exact path="/hotel-detail1/:hotel_id" element={<HotelDetail1 />} /> */}
      {/* <Route exact path="/roombooking" element={<RoomBooking />} /> */}

    </Routes>
  )
}

export default BookingRoutes;
