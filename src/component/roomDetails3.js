
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
import Summary from "./bookingSummary";
import RoomData from "./roomData";

function RoomCard({ room, indexId }) {
  // const [room, setRoom] = useState(roomInfo)
  const initialContainerVisible = window.localStorage.getItem("containerVisible") === "true";
  // const [containerVisible, setContainerVisible] = useState(true);
  //const [containerVisible, setContainerVisible] = useState(false);
  //  // Retrieve the initial counterValue from window.window.localStorage if available
  const initialCounterValue = parseInt(window.localStorage.getItem("counterValue")) || 0;
  const [counterValue, setCounterValue] = useState(initialCounterValue);
  //const [counterValue, setCounterValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  //const [] = useState([]);
  const [roomBookVisible, setRoomBookVisible] = useState(window.localStorage.getItem("roomBookVisible") === "true");
  const [roomToIncrement, setRoomToIncrement] = useState(null);
  const navigate = useNavigate();
  const { totalAmount, setTotalAmount, adultValue, updateValue, childValue, setChildValue, updateChildValue, rooms, updateRoomValue } = useContext(BookingContext);
  const [selectedRoomType, setSelectedRoomType] = useState();
  const [counterValues, setCounterValues] = useState([]);
  const [roomSelected, setRoomSelected] = useState([]);
  const [roomStates, setRoomStates] = useState([
    {
      id: 1,
      counterValue: 0,
      roomSelected: { name: "Room 1", adult: 1, child: 0 },
    },
    {
      id: 1,
      counterValue: 0,
      roomSelected: { name: "Room 2", adult: 1, child: 0 },
    },
    // Add more initial room states as needed
  ]);
  
 

  //Function to toggle the containerVisible state and store it in window.localStorage
  const toggleButton = (roomType, e) => {
    e.preventDefault()
    setSelectedRoomType(roomType);
    // const newContainerVisible = !containerVisible;
    // setContainerVisible((prev) => !prev);
    // window.localStorage.setItem("containerVisible", newContainerVisible.toString());
  };



  useEffect(() => {
    // Update the totalAmount whenever roomSelected, adultValue, or childValue changes
    // You should adjust this calculation based on your specific logic
    const calculatedTotalAmount = roomSelected.length * 10000; // Adjust this calculation
    setTotalAmount(calculatedTotalAmount);

    // Store the updated totalAmount value in window.localStorage
    window.localStorage.setItem("totalAmount", calculatedTotalAmount.toString());
  }, [roomSelected, adultValue, childValue]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const incrementCounter = (roomType, e) => {
    e.preventDefault();
    const newCounterValue = counterValues.map((value, index) =>
      index === counterValues.length ? value + 1 : value
    );
    setCounterValue(newCounterValue);

    window.localStorage.setItem("counterValue", newCounterValue.toString());

    // Create a new room with a unique name and add it to roomSelected for the selected room type
    const newRoom = {
      name: `Room ${newCounterValue}`,
      adult: 1,
      child: 0,
      roomType: roomType, // Add the roomType to the room object
    };

    setRoomSelected((prev) => [...prev, newRoom]);

    // Find the room in roomStates with matching ID and update the counterValue
    const updatedRoomStates = roomStates.map((roomState) => {
      if (roomState.id === newCounterValue) {
        return {
          ...roomState,
          counterValue: roomState.counterValue + 1,
        };
      }
      return roomState;
    });

    setRoomStates(updatedRoomStates);
    setTotalAmount((prev) => prev + 10000);
  };


  const decrementCounter = (index,e) => {
    e.preventDefault();
    if (counterValues[index] > 0) {
      const newCounterValues = [...counterValues];
      newCounterValues[index] -= 1;
      setCounterValues(newCounterValues);
      
      // Rest of your code...
    } else {
      // Check if there are no more rooms selected, and if so, refresh the page
      if (roomSelected.length !== 0) {
        toggleButton();
      }
    }
  };
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


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

  // useEffect(() => {
  //   // Remove specific items from local storage when the page is about to unload (refreshed or closed)
  //   window.onbeforeunload = () => {
  //     window.localStorage.removeItem("containerVisible");
  //     window.localStorage.removeItem("counterValue");
  //   };

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     window.onbeforeunload = null;
  //   };
  // }, []);

  // Initialize roomBookVisible to true when the component mounts
  useEffect(() => {
    setRoomBookVisible(true);
  }, []);
  return (
    <>

              <div key={room?.id}>
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
                        <Button type="button" onClick={prevImage}>Previous</Button>
                        <Button type="button" onClick={nextImage}>Next</Button>
                      </div>
                    </div>
                  </Modal>
                  <div className="room-info">
                    <div className="room-type-info" style={{ textAlign: "left" }}>
                      <h4 style={{ whiteSpace: "nowrap" }}>{room?.type}</h4>
                      <label>ROOM RATES EXCLUSIVE OF TAX</label>
                      <br />
                      <label>MAX {room?.maxGuests} Guests</label>
                    </div>
                    <div>
                      <h5>Rs.{room?.rate}.00</h5>
                      <p style={{ whiteSpace: "nowrap", color: "black" }}>PER NIGHT</p>
                      <p style={{ whiteSpace: "nowrap", color: "green" }}>{room?.roomsLeft} Rooms Left</p>
                      {selectedRoomType === room?.type ? (
                        <div>
                          <button type="button" onClick={(e) => decrementCounter(indexId, e)} style={buttonStyle}>-</button>
                          <input type="text" value={roomSelected.length} readOnly style={buttonStyle} />
                          <button type="button" onClick={(e) => incrementCounter(room?.type, e)} style={buttonStyle}>+</button>
                        </div>
                      ) : (
                        <button type="button" onClick={(e) => toggleButton(room?.type, e)} className="add-room">
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
                          <h5>{room?.name}</h5>
                          <div className="">
                            <label htmlFor="adult">Adult</label>
                            <select
                              name="adult"
                              value={room?.adult}
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
                              value={room?.child}
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

  

    </>
  );
}
export default RoomCard;