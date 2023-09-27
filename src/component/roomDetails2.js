import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Row, Col } from "reactstrap";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { BookingContext } from "../context/bookingContext";

function Room2({ totalAmount, setTotalAmount, totalAdults }) {
  const [containerVisible, setContainerVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  //const [] = useState([]);

  const navigate = useNavigate();
  const { roomSelected, setRoomSelected,adultValue, setAdultValue, updateValue, childValue, setChildValue, updateChildValue,rooms,updateRoomValue } = useContext(BookingContext);

  const roomData = [
    {
      id: 1,
      type: "Deluxe",
      rate: 10000,
      maxGuests: 5,
      roomsLeft: 10,
    },
    {
      id: 2,
      type: "Standard",
      rate: 8000,
      maxGuests: 4,
      roomsLeft: 5,
    },
    {
      id: 2,
      type: "Standard",
      rate: 8000,
      maxGuests: 4,
      roomsLeft: 5,
    },
    {
      id: 2,
      type: "Standard",
      rate: 8000,
      maxGuests: 4,
      roomsLeft: 5,
    },
    // Add more room data objects as needed
  ];

  const toggleButton = () => {
    setContainerVisible(!containerVisible);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

// Modify incrementCounter function to accept an index argument
  const incrementCounter = (index) => {
    setCounterValue(counterValue + 1);
    // Update the specific room by index
    setRoomSelected((prev) => [
      ...prev.slice(0, index),
      { name: "Room " + (roomSelected.length + 1), adult: 1, child: 0 },
      ...prev.slice(index + 1), // Keep the rest of the rooms unchanged
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
      toggleButton();
    }
  };


  
  const buttonStyle = {
    width: "50px",
    height: "30px",
  };

  const roomImages = [
    "/assets/images/hotelRoom.png",
    "/assets/images/hotelRoom1.png",
    "/assets/images/hotelRooms2.png",
    "/assets/images/hotelRoom4.png",
    "/assets/images/hotelRooms3.png",
    "/assets/images/hotelRoom4.png",
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
    );
  };

  const modalStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "400px",
    marginTop: "50px",
    height: "80%",
    width: "50%",
  };

  const handleChange = () => {
    return;
  };

  function calculateTotalAdults() {
    const totalAdults = roomSelected.reduce((accumulator, currentValue) => {
      if (currentValue.adult && typeof currentValue.adult === "number") {
        return accumulator + currentValue.adult;
      } else {
        return accumulator;
      }
    }, 0);

    return totalAdults;
  }

  function calculateTotalChild() {
    const totalChildren = roomSelected.reduce((accumulator, currentValue) => {
      if (currentValue.child && typeof currentValue.child === "number") {
        return accumulator + currentValue.child;
      } else {
        return accumulator;
      }
    }, 0);

    return totalChildren;
  }

  useEffect(() => {
    const ad = calculateTotalAdults();
    const ch = calculateTotalChild();
    updateValue(ad);
    updateChildValue(ch);
  }, [roomSelected, setRoomSelected]);

  return (
    <>
      <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>
       
          <Grid item xs={7} >
       
            <Item>
            {roomData.slice(0, 5).map((room, index) => (
              <div key={room.id}>
                <div className="room-box">
                  <div className="col-lg-4" onClick={() => openModal(0)} style={{ cursor: "pointer" }}>
                    <img src="/assets/images/hotel.png" alt="" className="room-image" />
                  </div>
                  <Modal open={modalOpen} onClose={closeModal} style={modalStyles}>
                    <div className="modal-content">
                      <Carousel autoPlay={false} animation="fade" index={selectedImageIndex}>
                        {roomImages.map((image, index) => (
                          <Paper key={index} elevation={3}>
                            <img src={image} alt={`Room ${index + 1}`} style={{ width: "100%" }} />
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
                      <h4 style={{ whiteSpace: "nowrap" }}>{room.type}</h4>
                      <label>ROOM RATES EXCLUSIVE OF TAX</label>
                      <br />
                      <label>MAX {room.maxGuests} Guests</label>
                    </div>
                    <div>
                      <h5>Rs.{room.rate}.00</h5>
                      <p style={{ whiteSpace: "nowrap", color: "black" }}>PER NIGHT</p>
                      <p style={{ whiteSpace: "nowrap", color: "green" }}>{room.roomsLeft} Rooms Left</p>
                      {containerVisible ? (
                        <div>
                          <button onClick={decrementCounter} style={buttonStyle}>-</button>
                          <input type="text" value={counterValue} readOnly style={buttonStyle} />
                          <button onClick={incrementCounter} style={buttonStyle}>+</button>
                        </div>
                      ) : (
                        <button onClick={toggleButton} className="add-room" style={{}}>
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
                              id={`adult-${index}`}
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
                              id={`child-${index}`}
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
                 ))}
            </Item>
             
          </Grid>
    
    
      <Grid item xs={4.5}>
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
                  {adultValue} Adult, {childValue} Child
                </p>
              </div>
              <div style={{ textAlign: "right", alignItems: "center" }}>
                <h5>Rs {totalAmount.toFixed(2)}</h5>
                <p>{roomSelected.length} Rooms</p>
              </div>
              <hr class="solid" />
            </div>
            <div onClick={()=> navigate('/booking')} class="text-decoration-none" >
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
            </div>
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
