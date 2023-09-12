import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Row, Col } from "reactstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal"; // Import Modal component
import Carousel from "react-material-ui-carousel"; // Import Carousel component
// import { Paper, Button } from '@mui/material';
import BookingRooms from "./bookingRooms";

function Room2({ totalAmount, setTotalAmount }) {
  const [containerVisible, setContainerVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal open/close
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Index of selected image
  const [roomSelected, setRoomSelected] = useState([
    // { name: "Room 1", adult: 1, child: 0 },
  ]);

  const toggleButton = () => {
    setContainerVisible(!containerVisible);
  };

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
    setRoomSelected((prev)=>[...prev, { name: "Room "+(roomSelected.length+1), adult: 1, child: 0 }])
    setTotalAmount((prev)=> prev+10000)
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);

      setTotalAmount((prev)=> prev-10000)

      const arr = [...roomSelected]
      arr.pop()
      setRoomSelected(arr)

    } else {
      toggleButton(); // Convert back to button when counter is less than 1
    }
  };

  const buttonStyle = {
    width: "50px",
    height: "30px",
  };

  const roomImages = [
    "/assets/images/hotel.png",
    "/assets/images/hotel1.png",
    "/assets/images/hotel2.png",
    "/assets/images/hotel3.png",
    "/assets/images/hotel4.png",
    "/assets/images/hotel5.png",
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // Function to open the modal and set the selected image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to navigate to the next image in the carousel
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
  };

  // Function to navigate to the previous image in the carousel
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
    );
  };
  const [count, setCount] = useState(1); // Initialize room count
  const [addRoomButtonVisible, setAddRoomButtonVisible] = useState(true);
  const roomRate = 10000; // Set the room rate here

  const showContainer = () => {
    if (totalAmount === 0) {
      setTotalAmount(roomRate); // Set the initial total amount when the "Add Room" button is clicked for the first time
    }
    setCount(1);
    setContainerVisible((prev) => true);
    setAddRoomButtonVisible(false);
    updateCounterAndTotal();
  };

  const incrementCount = () => {
    setCount(count + 1);
    setTotalAmount(totalAmount + roomRate); // Increment total amount
    updateCounterAndTotal();
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalAmount(totalAmount - roomRate); // Decrement total amount
      updateCounterAndTotal();
    } else {
      // If count is zero, hide the container and show the button
      setContainerVisible(false);
      setAddRoomButtonVisible(true);
      setTotalAmount(0); // Set total amount to 0
      updateCounterAndTotal(); // Update total amount
    }
  };

  const updateCounterAndTotal = () => {
    // This function updates the counter and total amount
    // You can also add logic to update the nested boxes here
  };

  const addNestedBox = () => {
    // Function to add a new nested-box
    // You can add logic to create and append new nested boxes here
  };
  const nestedBoxes = [];
  const nestedBoxHeight = -1;
  // Create an array of nested boxes based on the count
  for (let i = 0; i < count; i++) {
    nestedBoxes.push(
      <div
        className="nested-box"
        key={i}
        style={{ marginTop: `${nestedBoxHeight}px` }}
      >
        <p style={{ marginLeft: "-300px" }}>{`Room ${i + 1}`}</p>
        <FormControl
          fullWidth
          style={{ width: "70px", height: "-5px", marginTop: "-50px" }}
        >
          <InputLabel id="demo-simple-select-label">adult</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            label="Age"
          >
            <MenuItem value={10}>0</MenuItem>
            <MenuItem value={20}>1</MenuItem>
            <MenuItem value={30}>1</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          style={{
            width: "70px",
            height: "-5px",
            marginTop: "-50px",
            marginLeft: "5px",
          }}
        >
          <InputLabel id="demo-simple-select-label">child</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            label="Age"
          >
            <MenuItem value={10}>0</MenuItem>
            <MenuItem value={20}>1</MenuItem>
            <MenuItem value={30}>2</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

  const categoryItemHeight = 140 + count * 60 + 30;

  //model css
  const modalStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "400px",
    marginTop: "50px",
    height: "80%", // Set your desired height here
    width: "50%", // Set your desired width here
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Item>
            <div className="room-box">
              <img
                src="/assets/images/hotel.png"
                alt=""
                className="room-image"
              />
              <div className="room-info">
                <div className="room-type-info">
                  <h4 style={{ whiteSpace: "nowrap" }}>Deluxe Room</h4>
                  <label>ROOM RATES EXCLUSIVE OF TAX</label>
                  <br />
                  <label>MAX 5 Guests</label>
                </div>
                <div>
                  <h5>Rs.10000.00</h5>
                  <p style={{ whiteSpace: "nowrap", color: "black" }}>
                    PER NIGHT
                  </p>
                  <p style={{ whiteSpace: "nowrap", color: "green" }}>
                    10 Rooms Left
                  </p>
                  {/* <button
                    onClick={showContainer}
                    style={{ marginLeft: "", marginTop: "" }}
                  >
                    Add Rooms
                  </button> */}
                  {containerVisible ? (
                    <div>
                      <button onClick={decrementCounter} style={buttonStyle}>
                        -
                      </button>
                      <input
                        type="text"
                        value={counterValue}
                        readOnly
                        
                        style={buttonStyle}
                      />
                      <button onClick={incrementCounter} style={buttonStyle}>
                        +
                      </button>
                    </div>
                  ) : (
                  <button onClick={toggleButton} style={{height:"30px", width:"100px", borderRadius:"2px", background:"#acd037",
                  color:"#fffff"}}>
                      Add Rooms
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div>
              {roomSelected.length > 0 &&
                roomSelected.map((room, index) => {
                  return (
                    <>
                      <div key={index} className="select-room">
                        <h5>{room.name}</h5>
                        <div className="">
                          <label for="adult">Adult</label>
                          <select id="adult">
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                          </select>
                        </div>

                        <div>
                          <label for="child">Children</label>
                          <select value={room.child} id="child">
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                          </select>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="room-book">
            <label className="">Booking Summary</label>
            <h5 className="date">Dates</h5>
            <label className="">Nights</label>
            <h4 className="">Total: Rs.{totalAmount.toFixed(2)}</h4>{" "}
            {/* Display the updated total amount */}
            <a href="/booking">
              <button className="book-btn">Book</button>
            </a>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
export default Room2;
