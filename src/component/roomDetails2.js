import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Row, Col } from "reactstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal"; // Import Modal component
import Carousel from "react-material-ui-carousel"; // Import Carousel component
import { Paper, Button } from "@mui/material";
import BookingRooms from "./bookingRooms";
import Booking from './booking'

function Room2({ totalAmount, setTotalAmount, hotelData }) {
  const [containerVisible, setContainerVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal open/close
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Index of selected image
  const [roomSelected, setRoomSelected] = useState([
    // { name: "Room 1", adult: 1, child: 0 },
  ]);

  console.log(hotelData);
  const toggleButton = () => {
    setContainerVisible(!containerVisible);
  };

  // Function to open the modal and set the selected image index
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
    setRoomSelected((prev) => [
      ...prev,
      { name: "Room " + (roomSelected.length + 1), adult: 1, child: 0 },
    ]);
    setTotalAmount((prev) => prev + 10000);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);

      setTotalAmount((prev) => prev - 10000);

      const arr = [...roomSelected];
      arr.pop();
      setRoomSelected(arr);
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

  const handleChange = () => {
    return;
  };
  function calculateTotalAdults() {
    // Use the reduce method to sum up the 'adult' property of each object
    const totalAdults = roomSelected.reduce((accumulator, currentValue) => {
      // Check if the 'adult' property exists in the current object and is a number
      if (currentValue.adult && typeof currentValue.adult === "number") {
        return accumulator + currentValue.adult;
      } else {
        return accumulator;
      }
    }, 0); // Initialize the accumulator to 0

    return totalAdults;
  }
  function calculateTotalChild() {
    // Use the reduce method to sum up the 'adult' property of each object
    const totalAdults = roomSelected.reduce((accumulator, currentValue) => {
      // Check if the 'adult' property exists in the current object and is a number
      if (currentValue.child && typeof currentValue.child === "number") {
        return accumulator + currentValue.child;
      } else {
        return accumulator;
      }
    }, 0); // Initialize the accumulator to 0

    return totalAdults;
  }
  console.log(hotelData);
  return (
    <>
      <Grid
        container
        spacing={2}
        className="main-box"
        style={{ marginLeft: "2px" }}
      >
        <Grid item xs={7}>
          <Item>
            <div>
              <div className="room-box">
                <div
                  className="col-lg-4"
                  onClick={() => openModal(0)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/assets/images/hotel.png"
                    alt=""
                    className="room-image"
                  />
                </div>
                <Modal
                  open={modalOpen}
                  onClose={closeModal}
                  style={modalStyles}
                >
                  <div className="modal-content">
                    <Carousel
                      autoPlay={false}
                      animation="fade"
                      index={selectedImageIndex}
                    >
                      {roomImages.map((image, index) => (
                        <Paper key={index} elevation={3}>
                          <img
                            src={image}
                            alt={`Room ${index + 1}`}
                            style={{ width: "100%" }}
                          />
                        </Paper>
                      ))}
                    </Carousel>
                    <div className="modal-controls">
                      <Button onClick={prevImage}>Previous</Button>
                      <Button onClick={nextImage}>Next</Button>
                    </div>
                  </div>
                </Modal>
                <div className="room-info">
                  <div className="room-type-info" style={{ textAlign: "left" }}>
                    <h4 style={{ whiteSpace: "nowrap" }}>{}</h4>
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
                      <button
                        onClick={toggleButton}
                        className="add-room"
                        style={{}}
                      >
                        Add Room
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {roomSelected.length > 0 &&
                  roomSelected.map((room, index) => {
                    const handleChange = (event) => {
                      const { name, value } = event.target;
                      setRoomSelected((prevRooms) =>
                        prevRooms.map((prevRoom, prevIndex) =>
                          prevIndex === index
                            ? { ...prevRoom, [name]: parseInt(value) }
                            : prevRoom
                        )
                      );
                    };

                    return (
                      <div key={index} className="select-room">
                        <h5>{room.name}</h5>
                        <div className="">
                          <label htmlFor="adult">Adult</label>
                          <select
                            name="adult"
                            value={room.adult}
                            onChange={handleChange}
                            id={`adult-${index}`} // Add a unique ID
                          >
                            {[0, 1, 2].map((value) => (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="child">Children</label>
                          <select
                            name="child"
                            value={room.child}
                            onChange={handleChange}
                            id={`child-${index}`} // Add a unique ID
                          >
                            {[0, 1, 2].map((value) => (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          {totalAmount > 0 && (
            <Item className="room-book">
              <div style={{ margin: "10px" }}>
                <h3
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                    alignItems: "center",
                  }}
                >
                  SHAHPURA HAVELI, SHAHPURA
                </h3>
                <hr class="solid" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "start",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <h5>Delux Room</h5>
                  <p>Nights</p>
                  <p>
                    {calculateTotalAdults()} Adult, {calculateTotalChild()}{" "}
                    Child
                  </p>
                </div>
                <div style={{ textAlign: "right", alignItems: "center" }}>
                  <h5>Rs 10000</h5>
                  <p>{roomSelected.length} Rooms</p>
                </div>
                <hr class="solid" />
              </div>
              <a href="/booking" class="text-decoration-none">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "end",
                    backgroundColor: "#272a3d",
                    height: "45px",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  >
                    Pay
                  </p>
                  <p style={{ color: "white" }}>Rs {totalAmount.toFixed(2)}</p>
                </div>
              </a>
            </Item>
          )}
        </Grid>
      </Grid>
      <Modal open={modalOpen} onClose={closeModal} style={modalStyles}>
                <div className="modal-content">
                  <Carousel
                    autoPlay={false}
                    animation="fade"
                    index={selectedImageIndex}
                  >
                    {roomImages.map((image, index) => (
                      <Paper key={index} elevation={3}>
                        <img
                          src={image}
                          alt={`Room ${index + 1}`}
                          style={{ width: "100%" }}
                        />
                      </Paper>
                    ))}
                  </Carousel>
                  <div className="modal-controls">
                    <Button onClick={prevImage}>Previous</Button>
                    <Button onClick={nextImage}>Next</Button>
                  </div>
                </div>
              </Modal>
    </>
  );
}
export default Room2;
