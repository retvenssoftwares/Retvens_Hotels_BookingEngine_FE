import logo from './logo.svg';
import './App.css';

import Home from './component/home';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './component/about';
import Booking from './component/booking';
import HotelList from './component/hotel-list';
import HotelDetail from './component/hotel-detail';

function App() {
  return (
    <div className="App">
      
      <Router>
            <Navbar />
            <Routes>

                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route exact path="/hotel-list" element={<HotelList />} />
                <Route exact path="/hotel-detail/:hotel_id" element={<HotelDetail />} />
               
            </Routes>
        </Router>
    </div>
  );
}

export default App;
