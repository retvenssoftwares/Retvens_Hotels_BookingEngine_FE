import React,{useState,useContext,useEffect}from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookingContext } from "../context/bookingContext";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
function RoomData(){

    const initialContainerVisible = window.localStorage.getItem("containerVisible") === "true";
    const [containerVisible, setContainerVisible] = useState(initialContainerVisible);
    //const [containerVisible, setContainerVisible] = useState(false);
     // Retrieve the initial counterValue from window.window.localStorage if available
     const initialCounterValue = parseInt(window.localStorage.getItem("counterValue")) || 0;
     const [counterValue, setCounterValue] = useState(initialCounterValue);
    //const [counterValue, setCounterValue] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    //const [] = useState([]);
    const [roomBookVisible, setRoomBookVisible] = useState(window.localStorage.getItem("roomBookVisible") === "true");
  
    const navigate = useNavigate();
    const {totalAmount,setTotalAmount,roomSelected, setRoomSelected,adultValue, setAdultValue, updateValue, childValue, setChildValue, updateChildValue,rooms,updateRoomValue } = useContext(BookingContext);
   
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
        // {
        //   id: 2,
        //   type: "Standard",
        //   rate: 8000,
        //   maxGuests: 4,
        //   roomsLeft: 5,
        // },
        // {
        //   id: 2,
        //   type: "Standard",
        //   rate: 8000,
        //   maxGuests: 4,
        //   roomsLeft: 5,
        // },
        // Add more room data objects as needed
      ];
      const toggleButton = () => {
        const newContainerVisible = !containerVisible;
        setContainerVisible(newContainerVisible);
        window.localStorage.setItem("containerVisible", newContainerVisible.toString());
      };
    
     // Function to toggle the roomBookVisible state and store it in window.localStorage
     const toggleRoomBook = () => {
      const newRoomBookVisible = !roomBookVisible;
      setRoomBookVisible(newRoomBookVisible);
    
      // Store the updated roomBookVisible value in window.localStorage
      window.localStorage.setItem("roomBookVisible", newRoomBookVisible.toString());
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
    
     // Function to increment the counterValue and store it in window.localStorage
     const incrementCounter = (index) => {
      const newCounterValue = counterValue + 1;
      setCounterValue(newCounterValue);
      window.localStorage.setItem("counterValue", newCounterValue.toString());
    
      // Update the specific room by index
      setRoomSelected((prev) => [
          ...prev,
          { name: "Room " + (roomSelected.length + 1), adult: 1, child: 0 },
        ]);
        // Find the room in roomStates with matching ID
      const updatedRoomStates = roomStates.map((roomState) => {
        if (roomData.id === roomState.id) {
          return {
            ...roomState,
            counterValue: roomState.counterValue + 1, // Update the counterValue
          };
        }
        return roomState;
      });
    
      setRoomStates(updatedRoomStates);
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
          // Check if there are no more rooms selected, and if so, refresh the page
          if (roomSelected.length === 0) {
            window.location.reload();
          } else {
            toggleButton();
          }
        }
    }
      
    
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
    
      useEffect(() => {
        // Remove specific items from local storage when the page is about to unload (refreshed or closed)
        window.onbeforeunload = () => {
          window.localStorage.removeItem("containerVisible");
          window.localStorage.removeItem("counterValue");
        };
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.onbeforeunload = null;
        };
      }, []);
    
        // Initialize roomBookVisible to true when the component mounts
        useEffect(() => {
          setRoomBookVisible(true);
        }, []);
    return(
        <>
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
                        <button onClick={() => decrementCounter(index)} style={buttonStyle}>-</button>
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
               </>
    )
}

export default RoomData