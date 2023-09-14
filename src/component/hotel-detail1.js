import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal"; // Import Modal component
import Carousel from "react-material-ui-carousel"; // Import Carousel component
import { Paper, Button } from "@mui/material";
import Room from "./roomDetails";
import BookingRooms from "./bookingRooms";
import Room2 from "./roomDetails2";
import HotelList from "./hotel-list";
import HotelInfo from "./hotelInfo";
import RoomSearch from "./roomSearch";
import Room4 from "./roomDetails4";




function HotelDetail1() {
  const { hotel_id } = useParams();
  const [hotelData, setHotelData] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'apiEndpoint' with your actual API endpoint
        const response = await fetch(`http://localhost:8000/api/get/hotelById/${hotel_id}/9/9`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHotelData(data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchData();
  }, [hotel_id]);

  return (
    <div style={{ backgroundColor: "#f0f3f6", minHeight: "100%" }}>
      <HotelInfo roomData={hotelData} />
      <RoomSearch setHotelData={setHotelData} hotel_id={hotel_id} />
      <Room4 hotelData={hotelData} />
    </div>
  );
}

export default HotelDetail1;