
// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Modal from "@mui/material/Modal";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
// import { BookingContext } from "../context/bookingContext";
// import Summary from "./bookingSummary";


// function Room2({ totalAdults }) {
//   const initialContainerVisible = window.localStorage.getItem("containerVisible") === "true";
//   const [containerVisible, setContainerVisible] = useState(initialContainerVisible);
//   //const [containerVisible, setContainerVisible] = useState(false);
//   //  // Retrieve the initial counterValue from window.window.localStorage if available
//   const initialCounterValue = parseInt(window.localStorage.getItem("counterValue")) || 0;
//   const [counterValue, setCounterValue] = useState(initialCounterValue);
//   //const [counterValue, setCounterValue] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   //const [] = useState([]);
//   const [roomBookVisible, setRoomBookVisible] = useState(window.localStorage.getItem("roomBookVisible") === "true");
//   const [roomToIncrement, setRoomToIncrement] = useState(null);
//   const navigate = useNavigate();
//   const { totalAmount, setTotalAmount, roomSelected, setRoomSelected, adultValue, setAdultValue, updateValue, childValue, setChildValue, updateChildValue, rooms, updateRoomValue } = useContext(BookingContext);
//   const [selectedRoomType, setSelectedRoomType] = useState(null);
//   const [counterValues, setCounterValues] = useState([]);
//   const [roomStates, setRoomStates] = useState([
//     {
//       id: 1,
//       counterValue: 0,
//       roomSelected: { name: "Room 1", adult: 1, child: 0 },
//     },
//     {
//       id: 1,
//       counterValue: 0,
//       roomSelected: { name: "Room 2", adult: 1, child: 0 },
//     },
//     // Add more initial room states as needed
//   ]);
//   const roomData = [
//     {
//       id: 1,
//       type: "Deluxe",
//       rate: 10000,
//       maxGuests: 5,
//       roomsLeft: 10,
//       roomType: "Deluxe",

//     },
//     {
//       id: 2,
//       type: "Standard",
//       rate: 8000,
//       maxGuests: 4,
//       roomsLeft: 5,
//       roomType: "Standard",
//     },
//     {
//       id: 3,
//       type: "luxury",
//       rate: 8000,
//       maxGuests: 4,
//       roomsLeft: 5,
//       roomType: "luxury",
//     },

//   ];
//   console.log(roomData)
//   const [roomCounters, setRoomCounters] = useState(
//     roomData.map(() => ({ count: 0 }))
//   );

//   //Function to toggle the containerVisible state and store it in window.localStorage
//   const toggleButton = (roomType) => {
//     setSelectedRoomType(roomType);
//     const newContainerVisible = !containerVisible;
//     setContainerVisible(newContainerVisible);
//     window.localStorage.setItem("containerVisible", newContainerVisible.toString());
//   };

//   // Function to toggle the roomBookVisible state and store it in window.localStorage
//   const toggleRoomBook = () => {
//     const newRoomBookVisible = !roomBookVisible;
//     setRoomBookVisible(newRoomBookVisible);

//     // Store the updated roomBookVisible value in window.localStorage
//     window.localStorage.setItem("roomBookVisible", newRoomBookVisible.toString());
//   };

//   useEffect(() => {
//     // Update the totalAmount whenever roomSelected, adultValue, or childValue changes
//     // You should adjust this calculation based on your specific logic
//     const calculatedTotalAmount = roomSelected.length * 10000; // Adjust this calculation
//     setTotalAmount(calculatedTotalAmount);

//     // Store the updated totalAmount value in window.localStorage
//     window.localStorage.setItem("totalAmount", calculatedTotalAmount.toString());
//   }, [roomSelected, adultValue, childValue]);

//   const openModal = (index) => {
//     setSelectedImageIndex(index);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const incrementCounter = (roomType) => {
//     const newCounterValue = counterValues.map((value, index) =>
//       index === counterValues.length ? value + 1 : value
//     );
//     setCounterValue(newCounterValue);

//     window.localStorage.setItem("counterValue", newCounterValue.toString());

//     // Create a new room with a unique name and add it to roomSelected for the selected room type

//     const newRoom = {
//       name: `Room ${newCounterValue}`,
//       adult: 1,
//       child: 0,
//       roomType: roomType, // Add the roomType to the room object
//     };

//     setRoomSelected((prev) => [...prev, newRoom]);

//     // Find the room in roomStates with matching ID and update the counterValue
//     const updatedRoomStates = roomStates.map((roomState) => {
//       if (roomState.id === newCounterValue) {
//         return {
//           ...roomState,
//           counterValue: roomState.counterValue + 1,
//         };
//       }
//       return roomState;
//     });

//     setRoomStates(updatedRoomStates);
//     setTotalAmount((prev) => prev + 10000);
//   };


//   const decrementCounter = () => {
//     if (counterValue > 0) {
//       // Find the last added room based on the counterValue
//       const lastAddedRoom = roomSelected.find((room) => room.name === `Room ${counterValue}`);

//       if (lastAddedRoom) {
//         // Decrease the counterValue
//         setCounterValue(counterValue - 1);

//         // Decrease the totalAmount
//         setTotalAmount((prev) => prev - 10000);

//         // Remove the last added room
//         setRoomSelected((prevRooms) => prevRooms.filter((room) => room.name !== lastAddedRoom.name));
//       }
//     } else {
//       toggleButton(); // Convert back to the button when counter is less than 1
//     }
//   };



//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));


//   const buttonStyle = {
//     width: "50px",
//     height: "30px",
//   };

//   const roomImages = [
//     "/assets/images/hotelRoom.png",
//     "/assets/images/hotelRoom1.png",
//     "/assets/images/hotelRooms2.png",
//     "/assets/images/hotelRoom4.png",
//     "/assets/images/hotelRooms3.png",
//     "/assets/images/hotelRoom4.png",
//   ];



//   const nextImage = () => {
//     setSelectedImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
//     );
//   };

//   const modalStyles = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: "400px",
//     marginTop: "50px",
//     height: "80%",
//     width: "50%",
//   };

//   const handleChange = () => {
//     return;
//   };

//   function calculateTotalAdults() {
//     const totalAdults = roomSelected.reduce((accumulator, currentValue) => {
//       if (currentValue.adult && typeof currentValue.adult === "number") {
//         return accumulator + currentValue.adult;
//       } else {
//         return accumulator;
//       }
//     }, 0);

//     return totalAdults;
//   }

//   function calculateTotalChild() {
//     const totalChildren = roomSelected.reduce((accumulator, currentValue) => {
//       if (currentValue.child && typeof currentValue.child === "number") {
//         return accumulator + currentValue.child;
//       } else {
//         return accumulator;
//       }
//     }, 0);

//     return totalChildren;
//   }

//   useEffect(() => {
//     const ad = calculateTotalAdults();
//     const ch = calculateTotalChild();
//     updateValue(ad);
//     updateChildValue(ch);
//   }, [roomSelected, setRoomSelected]);

//   useEffect(() => {
//     // Remove specific items from local storage when the page is about to unload (refreshed or closed)
//     window.onbeforeunload = () => {
//       window.localStorage.removeItem("containerVisible");
//       window.localStorage.removeItem("counterValue");
//     };

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.onbeforeunload = null;
//     };
//   }, []);

//   // Initialize roomBookVisible to true when the component mounts
//   useEffect(() => {
//     setRoomBookVisible(true);
//   }, []);
//   return (
//     <>
//       <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>

//         <Grid item xs={6} >

//           <Item>
//             {roomData.map((room, index) => (
//               <div key={room.id}>
//                 <div className="room-box">
//                   <div className="col-lg-4" onClick={() => openModal(0)} style={{ cursor: "pointer" }}>
//                     <img src="/assets/images/hotel.png" alt="" className="room-image" />
//                   </div>
//                   <Modal open={modalOpen} onClose={closeModal} style={modalStyles}>
//                     <div className="modal-content">
//                       <Carousel autoPlay={false} animation="fade" index={selectedImageIndex}>
//                         {roomImages.map((image, index) => (
//                           <Paper key={index} elevation={3}>
//                             <img src={image} alt={`Room ${index + 1}`} style={{ width: "100%" }} />
//                           </Paper>
//                         ))}
//                       </Carousel>
//                       <div className="modal-controls">
//                         <Button onClick={prevImage}>Previous</Button>
//                         <Button onClick={nextImage}>Next</Button>
//                       </div>
//                     </div>
//                   </Modal>
//                   <div className="room-info">
//                     <div className="room-type-info" style={{ textAlign: "left" }}>
//                       <h4 style={{ whiteSpace: "nowrap" }}>{room.type}</h4>
//                       <label>ROOM RATES EXCLUSIVE OF TAX</label>
//                       <br />
//                       <label>MAX {room.maxGuests} Guests</label>
//                     </div>
//                     <div>
//                       <h5>Rs.{room.rate}.00</h5>
//                       <p style={{ whiteSpace: "nowrap", color: "black" }}>PER NIGHT</p>
//                       <p style={{ whiteSpace: "nowrap", color: "green" }}>{room.roomsLeft} Rooms Left</p>
//                       {selectedRoomType === room.type ? (
//                         <div>
//                           <button onClick={() => decrementCounter(index)} style={buttonStyle}>-</button>
//                           <input type="text" value={roomSelected.length} readOnly style={buttonStyle} />
//                           <button onClick={() => incrementCounter(room.type)} style={buttonStyle}>+</button>
//                         </div>
//                       ) : (
//                         <button onClick={() => toggleButton(room.type)} className="add-room">
//                           Add Room
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div>

//                   {roomSelected.length > 0 &&
//                     roomSelected.map((room, index) => {
//                       const handleChange = (event) => {
//                         const { name, value } = event.target;
//                         setRoomSelected((prevRooms) =>
//                           prevRooms.map((prevRoom, prevIndex) =>
//                             prevIndex === index
//                               ? { ...prevRoom, [name]: parseInt(value) }

//                               : prevRoom
//                           )
//                         );
//                       };

//                       return (
//                         <div key={index} className="select-room">
//                           <h5>{room.name}</h5>
//                           <div className="">
//                             <label htmlFor="adult">Adult</label>
//                             <select
//                               name="adult"
//                               value={room.adult}
//                               onChange={handleChange}
//                               id={`adult-${index}`}
//                             >
//                               {[0, 1, 2].map((value) => (
//                                 <option key={value} value={value}>
//                                   {value}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>

//                           <div>
//                             <label htmlFor="child">Children</label>
//                             <select
//                               name="child"
//                               value={room.child}
//                               onChange={handleChange}
//                               id={`child-${index}`}
//                             >
//                               {[0, 1, 2].map((value) => (
//                                 <option key={value} value={value}>
//                                   {value}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>
//                       );
//                     })}
//                 </div>
//               </div>
//             ))}
//           </Item>

//         </Grid>


//         <Grid item xs={4.5}>
//           {roomBookVisible && totalAmount > 0 && (
//             <Summary totalAmount={totalAmount} />
//           )}
//         </Grid>

//       </Grid>

//     </>
//   );
// }
// export default Room2;




///////////////////////////////


import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { BookingContext } from "../context/bookingContext";
import Summary from "./bookingSummary";

function RoomDetails({ room, setTotalAmount, setRoomData, totalAmount }) {
  const {
 
    adultValue,
    setAdultValue,
    updateValue,
    childValue,
    setChildValue,
    updateChildValue,
    rooms,
    updateRoomValue,
  } = useContext(BookingContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(0);
 const [roomSelected, setRoomSelected] = useState([]);
  const [roomBookVisible, setRoomBookVisible] = useState(
    Array(roomSelected.length).fill(false) // Initialize visibility for each room
  );
   //const { totalAmount, setTotalAmount, roomSelected, setRoomSelected, adultValue, setAdultValue, updateValue, childValue, setChildValue, updateChildValue, rooms, updateRoomValue } = useContext(BookingContext);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
 

  const decrement = () => {
    if (count === 0) {
      return setShowButton((prev) => !prev);
    }

    setCount((prev) => prev - 1);

    // Remove the last room from roomSelected
    setRoomSelected((prev) => {
      const updated = [...prev];
      updated.pop();
      return updated;
    });

    // Remove the last room visibility from roomBookVisible
    setRoomBookVisible((prev) => {
      const updated = [...prev];
      updated.pop();
      return updated;
    });
  };

  const increment = () => {
    setCount((prev) => prev + 1);
    setRoomSelected((prev) => [
      ...prev,
      { adult: 0, child: 0 },
    ]);
    
  
  // Decrease the roomLeft value by one
  setRoomData((prev) => {
    return prev.map((item) => {
      if (item.roomName === room.roomName) {
        return {
          ...item,
          roomLeft: item.roomLeft - 1,
        };
      }
      return item;
    });
  });

  setRoomBookVisible((prev) => [
    ...prev,
    true // Show the Summary for the newly added room
  ]);
};
//In this code, we first add the new room to roomSelected and then decrement the roomLeft value for the corresponding room object in roomData. This should ensure that the roomLeft value decreases when you add a room.


  const buttonStyle = {
    width: "50px",
    height: "30px",
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    setRoomSelected((prev) => {
      const updatedRooms = [...prev];
      updatedRooms[index][name] = parseInt(value, 10); // Parse the value as an integer
      return updatedRooms;
    });
    setRoomData((prev) => {
      const updateRooms = prev.map((item, roomIndex) => {
        if (roomIndex === index) {
          return {
            ...item,
            roomSelected: roomSelected,
          };
        }
        return item;
      });
      return updateRooms;
    });
  };

  useEffect(() => {
    function updateRoom() {
      if (count === 0) {
        setRoomData((prev) => {
          const updated = prev.filter(
            (item) => item.roomName !== room.roomName
          );
          return updated;
        });
      }
      if (count === 1) {
        setRoomData((prev) => {
          const updated = {
            roomName: room.roomName,
            price: room.price
          };
          return [...prev, updated];
        });
      }
    }
    updateRoom();
  }, [count]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const roomImages = [
    "/assets/images/hotelRoom.png",
    "/assets/images/hotelRoom1.png",
    "/assets/images/hotelRooms2.png",
    "/assets/images/hotelRoom4.png",
    "/assets/images/hotelRooms3.png",
    "/assets/images/hotelRoom4.png",
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
  

  return (
    <>
      <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>
        <Grid item xs={6}>
          <Item>
            <div>
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
                    <h4 style={{ whiteSpace: "nowrap" }}>{room.roomName}</h4>
                    <label>ROOM RATES EXCLUSIVE OF TAX</label>
                    <br />
                    <label>MAX {room.maxGuests} Guests</label>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h5>{room.price}</h5>
                      <p style={{ whiteSpace: 'nowrap', color: "black" }}>PER NIGHT</p>
                      <p style={{ whiteSpace: 'nowrap', color: "green" }}>{room.roomLeft} room left</p>
                    </div>
                    <div className="mb-3">
                      {!showButton ? (
                        <button onClick={() => setShowButton(true)} className='add-room' >Add Rooms</button>
                      ) : (
                        <div id="container" className="flex">
                          <div className="bg-[#e7e7e7] text-black flex h-full w-32  ">
                            <div>
                              <button onClick={decrement} className="p-2" style={buttonStyle}>-</button>
                              <input type="text" value={count} readOnly className="w-2 h-full rounded-none text-center" style={buttonStyle} />
                              <button onClick={increment} className="p-2" style={buttonStyle}>+</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                {roomSelected && roomSelected.map((room, index) => (
                  <div key={index} className="select-room">
                    <h4>Room {index}</h4>
                    <div className="flex items-center">
                      <label>Adult</label>
                      <select
                        id=""
                        name="adult"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5"
                        value={room.adult}
                        onChange={(e) => handleChange(e, index)}
                      >
                        {[1, 2].map((room, index) => (
                          <option
                            className="cursor-pointer px-4 py-2 border-b rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            key={index}
                          >
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label>Child</label>
                      <select
                        id=""
                        name="child"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5"
                        value={room.child}
                        onChange={(e) => handleChange(e, index)}
                      >
                        {[0, 1, 2].map((room, index) => (
                          <option
                            className="cursor-pointer px-4 py-2 border-b rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            key={index}
                          >
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4.5}>
          {roomBookVisible[0] && <Summary totalAmount={totalAmount} roomSelected={roomSelected} room={room}/>}
        </Grid>
      </Grid>
    </>
  );
}

export default RoomDetails;
