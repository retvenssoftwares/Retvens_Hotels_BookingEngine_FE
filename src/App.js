import logo from './logo.svg';
import './App.css';

import Home from './component/home';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/about';
import Booking from './component/booking';
import HotelList from './component/hotel-list';
import HotelDetail from './component/hotel-detail';
import BookingRoutes from './Routes';
import { BookingProvider } from './context/bookingContext';
// import RoomBooking from './component/RoomBooking';

// import HotelDetail1 from './component/hotel-detail1';

function App() {
  return (
    <BookingProvider>
      <BookingRoutes />
    </BookingProvider>
  );
}

export default App;
