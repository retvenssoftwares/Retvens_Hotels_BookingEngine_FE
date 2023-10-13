import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { BookingContext } from "../context/bookingContext";
import Summary from "./bookingSummary";


function Room2({propertyId, roomsData}) {
  
console.log(roomsData)
  // Function to save roomSelected and roomCounts to local storage
  const saveDataToLocalStorage = () => {
    window.localStorage.setItem("roomSelected", JSON.stringify(roomSelected));
    window.localStorage.setItem("roomCounts", JSON.stringify(roomCounts));
    window.localStorage.setItem(
      "roomsLeft",
      JSON.stringify(roomData.map((room) => room.roomsLeft))
    );
  };

  // Function to load roomSelected and roomCounts from local storage
  const loadDataFromLocalStorage = () => {
    const storedRoomSelected = JSON.parse(
      window.localStorage.getItem("roomSelected")
    );
    const storedRoomCounts = JSON.parse(
      window.localStorage.getItem("roomCounts")
    );
    const storedRoomsLeft = JSON.parse(
      window.localStorage.getItem("roomsLeft")
    );
    if (storedRoomSelected) {
      setRoomSelected(storedRoomSelected);
    }
    if (storedRoomCounts) {
      setRoomCounts(storedRoomCounts);
    }
    if (storedRoomsLeft) {
      const updatedRoomData = roomData.map((room, index) => ({
        ...room,
        roomsLeft: storedRoomsLeft[index],
      }));
      setRoomData(updatedRoomData);
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
    // Add an event listener for beforeunload to clear data on page refresh
    window.addEventListener("beforeunload", clearLocalStorage);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);
  const clearLocalStorage = () => {
    // Clear the relevant data from local storage
    window.localStorage.removeItem("containerVisible");
    window.localStorage.removeItem("counterValue");
    window.localStorage.removeItem("roomSelected");
    window.localStorage.removeItem("roomCounts");
    window.localStorage.removeItem("roomBookVisible");
    window.localStorage.removeItem("totalAmount");
    window.localStorage.removeItem("roomsLeft");
  };

  useEffect(() => {
    setRoomBookVisible(true);
  }, []);

  const [containerVisible, setContainerVisible] = useState(
    window.localStorage.getItem("containerVisible") === "true"
  );
  // Retrieve the counterValue from local storage or set it to 0
  const initialCounterValue =
    parseInt(window.localStorage.getItem("counterValue")) || 0;
  const [counterValue, setCounterValue] = useState(initialCounterValue);
  // const [counterValue, setCounterValue] = useState(
  //   parseInt(window.localStorage.getItem("counterValue")) || 0
  // );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [roomBookVisible, setRoomBookVisible] = useState(
    window.localStorage.getItem("roomBookVisible") === "true"
  );
  const navigate = useNavigate();
  const {
    totalAmount,
    setTotalAmount,
    roomSelected,
    setRoomSelected,
    updateValue,
    updateChildValue,
    adultValue,
    childValue,
  } = useContext(BookingContext);
  const [selectedRoomType, setSelectedRoomType] = useState(null);

  // Track room counts for each room type
  const [roomCounts, setRoomCounts] = useState({});

  const [roomData, setRoomData] = useState(roomsData);

  const toggleButton = (roomType) => {
    setSelectedRoomType(roomType);
    const newContainerVisible = !containerVisible;
    setContainerVisible(newContainerVisible);
    window.localStorage.setItem(
      "containerVisible",
      newContainerVisible.toString()
    );
  };

  const toggleRoomBook = () => {
    const newRoomBookVisible = !roomBookVisible;
    setRoomBookVisible(newRoomBookVisible);

    window.localStorage.setItem(
      "roomBookVisible",
      newRoomBookVisible.toString()
    );
  };

  useEffect(() => {
    const calculatedTotalAmount = roomSelected.length * roomData.rate;
    setTotalAmount(calculatedTotalAmount);

    window.localStorage.setItem(
      "totalAmount",
      calculatedTotalAmount.toString()
    );
  }, [roomSelected]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getSelectedRoomsOfType = (roomType) => {
    return roomSelected.filter((room) => room?.roomType === roomType);
  };

 
  const incrementRoomCount = (roomType, index) => {
    const updatedCounts = { ...roomCounts };
    if (roomsData.find((room) => room.type === roomType)?.roomsLeft > 0) {
      updatedCounts[roomType] = (updatedCounts[roomType] || 0) + 1;
  
      // Update the roomsLeft for the specific room type
      const updatedRoomData = roomsData.map((room) => {
        if (room.type === roomType) {
          return {
            ...room,
            roomsLeft: Math.max(0, room.roomsLeft - 1), // Ensure roomsLeft is not negative
          };
        }
        return room;
      });
  
      setRoomCounts(updatedCounts);
      setRoomData(updatedRoomData);
  
      const newRoom = {
        name: `${roomType} ${updatedCounts[roomType]}`,
        adult: 1,
        child: 0,
        roomType: roomType,
      };
  
      setRoomSelected((prev) => [...prev, newRoom]);
  
      // Save data to local storage
      saveDataToLocalStorage();
    }
  };
  



  const decrementRoomCount = (roomType) => {
    if (roomCounts[roomType] > 0) {
      const lastAddedRoom = roomSelected.find(
        (room) => room?.roomType === roomType
      );

      if (lastAddedRoom) {
        const updatedCounts = { ...roomCounts };
        updatedCounts[roomType] = (updatedCounts[roomType] || 0) - 1;

        // Increase the roomsLeft for the specific room type
        const updatedRoomData = roomsData.map((room) => {
          if (room.roomType === roomType) {
            return {
              ...room,
              roomsLeft: room.roomsLeft + 1,
            };
          }
          return room;
        });

        setRoomCounts(updatedCounts);
        setRoomData(updatedRoomData);

        setRoomSelected((prevRooms) =>
          prevRooms.filter(
            (room) => room?.roomType !== roomType || room !== lastAddedRoom
          )
        );
        // Save data to local storage
        saveDataToLocalStorage();
      }
    }
  };

  useEffect(() => {
    const calculatedTotalAmount = roomSelected.length * 10000;
    setTotalAmount(calculatedTotalAmount);
    window.localStorage.setItem(
      "totalAmount",
      calculatedTotalAmount.toString()
    );
  }, [roomSelected, adultValue, childValue]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const buttonStyle = {
    width: "60px",
    height: "30px",
  };

  const roomImages = [
    "/assets/images/hotelroom1.png",
    "/assets/images/hotelRoom1.png",
    "/assets/images/hotelRooms2.png",
    "/assets/images/hotelRoom4.png",
    "/assets/images/hotelRooms3.png",
    "/assets/images/hotelRoom4.png",
  ];

  const modalStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "400px",
    marginTop: "50px",
    height: "80%",
    width: "50%",
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const ad = roomSelected.reduce((accumulator, currentValue) => {
      if (currentValue.adult && typeof currentValue.adult === "number") {
        return accumulator + currentValue.adult;
      } else {
        return accumulator;
      }
    }, 0);

    const ch = roomSelected.reduce((accumulator, currentValue) => {
      if (currentValue.child && typeof currentValue.child === "number") {
        return accumulator + currentValue.child;
      } else {
        return accumulator;
      }
    }, 0);

    updateValue(ad);
    updateChildValue(ch);
  }, [roomSelected]);

  const handleRoomChange = (event, index, roomName) => {
    const { name, value } = event.target;
    setRoomSelected((prevRooms) => {
      const newArr = prevRooms.map((prevRoom, prevIndex) =>
        prevRoom.name.includes(roomName)
          ? { ...prevRoom, [name]: parseInt(value) }
          : prevRoom
      );

      const a = [...prevRooms];
      return newArr;
    });
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      window.localStorage.removeItem("containerVisible");
      window.localStorage.removeItem("counterValue");
      window.localStorage.removeItem("roomsLeft");
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    setRoomBookVisible(true);
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      window.localStorage.removeItem("containerVisible");
      window.localStorage.removeItem("counterValue");
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    setRoomBookVisible(true);
  }, []);

  useEffect(() => {
    // Store the current counterValue in local storage
    window.localStorage.setItem("counterValue", counterValue.toString());
  }, [counterValue]);
  console.log(roomData)
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
            {roomsData && roomsData.map((room, index) => {
             
              return(
              <div key={index}>
                <div className="room-box">
                  <div
                    className="col-lg-6"
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
                  {/* ... (rest of the room details) */}
                  <div className="room-type-info" style={{ textAlign: "left" }}>
                    <h4 style={{ whiteSpace: "nowrap" }}>{room?.type}</h4>
                    <label>ROOM RATES EXCLUSIVE OF TAX</label>
                    <br />
                    <label>MAX {room?.maxGuests} Guests</label>
                    <div>
                      <ul>
                        <li style={{display:'block'}}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>EV Charging Station</li>
                        <li style={{display:'block'}}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Travel Desk</li>
                        <li style={{display:'block'}}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Complimentary Wi-Fi</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5>Rs.{room?.rate}.00</h5>
                    <p style={{ whiteSpace: "nowrap", color: "black" }}>
                      PER NIGHT
                    </p>
                    <p style={{ whiteSpace: "nowrap", color: "green" }}>
                      {room?.roomsLeft} Rooms Left
                    </p>
                    {selectedRoomType === room?.type ? (
                      <div>
                        <button
                          onClick={() => decrementRoomCount(room?.type)}
                          style={buttonStyle}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={roomCounts[room?.type] || 0}
                          readOnly
                          style={buttonStyle}
                        />
                        <button
                          onClick={() => incrementRoomCount(room?.type, index)}
                          style={buttonStyle}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleButton(room?.type)}
                        className="add-room"
                      >
                        Add Room
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  {selectedRoomType === room?.type &&
                    getSelectedRoomsOfType(room?.type).map((room, index) => (
                      <div key={index} className="select-room">
                        <h5>{room?.name}</h5>
                        <div>
                          <label htmlFor={`adult-${index}`}>Adult</label>
                          <select
                            name="adult"
                            value={room?.adult}
                            onChange={(event) =>
                              handleRoomChange(event, index, room?.name)
                            }
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
                          <label htmlFor={`child-${index}`}>Children</label>
                          <select
                            name="child"
                            value={room?.child}
                            onChange={(event) =>
                              handleRoomChange(event, index, room?.name)
                            }
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
                    ))}
                </div>
              </div>
            )})}
          </Item>
        </Grid>
        <Grid item xs={4.5}>
          {roomBookVisible && totalAmount > 0 && (
            <Summary propertyId={propertyId} totalAmount={totalAmount} />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Room2;

///////////////////////////////

// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Modal from "@mui/material/Modal";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
// import { BookingContext } from "../context/bookingContext";
// import Summary from "./bookingSummary";

// function RoomDetails({ room, setTotalAmount, setRoomData, totalAmount }) {
//   const {

//     adultValue,
//     setAdultValue,
//     updateValue,
//     childValue,
//     setChildValue,
//     updateChildValue,
//     rooms,
//     updateRoomValue,
//   } = useContext(BookingContext);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const [count, setCount] = useState(0);

//  const [roomSelected, setRoomSelected] = useState([]);
//   const [roomBookVisible, setRoomBookVisible] = useState(
//     Array(roomSelected.length).fill(false) // Initialize visibility for each room
//   );
//    //const { totalAmount, setTotalAmount, roomSelected, setRoomSelected, adultValue, setAdultValue, updateValue, childValue, setChildValue, updateChildValue, rooms, updateRoomValue } = useContext(BookingContext);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const decrement = () => {
//     if (count === 0) {
//       return setShowButton((prev) => !prev);
//     }

//     setCount((prev) => prev - 1);

//     // Remove the last room from roomSelected
//     setRoomSelected((prev) => {
//       const updated = [...prev];
//       updated.pop();
//       return updated;
//     });

//     // Remove the last room visibility from roomBookVisible
//     setRoomBookVisible((prev) => {
//       const updated = [...prev];
//       updated.pop();
//       return updated;
//     });
//   };

//   const increment = () => {
//     setCount((prev) => prev + 1);
//     setRoomSelected((prev) => [
//       ...prev,
//       { adult: 0, child: 0 },
//     ]);

//   // Decrease the roomLeft value by one
//   setRoomData((prev) => {
//     return prev.map((item) => {
//       if (item.roomName === room?.roomName) {
//         return {
//           ...item,
//           roomLeft: item.roomLeft - 1,
//         };
//       }
//       return item;
//     });
//   });

//   setRoomBookVisible((prev) => [
//     ...prev,
//     true // Show the Summary for the newly added room
//   ]);
// };
// //In this code, we first add the new room to roomSelected and then decrement the roomLeft value for the corresponding room object in roomData. This should ensure that the roomLeft value decreases when you add a room?.

//   const buttonStyle = {
//     width: "50px",
//     height: "30px",
//   };

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;

//     setRoomSelected((prev) => {
//       const updatedRooms = [...prev];
//       updatedRooms[index][name] = parseInt(value, 10); // Parse the value as an integer
//       return updatedRooms;
//     });
//     setRoomData((prev) => {
//       const updateRooms = prev.map((item, roomIndex) => {
//         if (roomIndex === index) {
//           return {
//             ...item,
//             roomSelected: roomSelected,
//           };
//         }
//         return item;
//       });
//       return updateRooms;
//     });
//   };

//   useEffect(() => {
//     function updateRoom() {
//       if (count === 0) {
//         setRoomData((prev) => {
//           const updated = prev.filter(
//             (item) => item.roomName !== room?.roomName
//           );
//           return updated;
//         });
//       }
//       if (count === 1) {
//         setRoomData((prev) => {
//           const updated = {
//             roomName: room?.roomName,
//             price: room?.price
//           };
//           return [...prev, updated];
//         });
//       }
//     }
//     updateRoom();
//   }, [count]);

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   const roomImages = [
//     "/assets/images/hotelroom?.png",
//     "/assets/images/hotelRoom1.png",
//     "/assets/images/hotelRooms2.png",
//     "/assets/images/hotelRoom4.png",
//     "/assets/images/hotelRooms3.png",
//     "/assets/images/hotelRoom4.png",
//   ];

//   const openModal = (index) => {
//     setSelectedImageIndex(index);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

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
//   function calculateTotalAdults() {
//         const totalAdults = roomSelected.reduce((accumulator, currentValue) => {
//           if (currentValue.adult && typeof currentValue.adult === "number") {
//             return accumulator + currentValue.adult;
//           } else {
//             return accumulator;
//           }
//         }, 0);

//         return totalAdults;
//       }

//       function calculateTotalChild() {
//         const totalChildren = roomSelected.reduce((accumulator, currentValue) => {
//           if (currentValue.child && typeof currentValue.child === "number") {
//             return accumulator + currentValue.child;
//           } else {
//             return accumulator;
//           }
//         }, 0);

//         return totalChildren;
//       }

//       useEffect(() => {
//         const ad = calculateTotalAdults();
//         const ch = calculateTotalChild();
//         updateValue(ad);
//         updateChildValue(ch);
//       }, [roomSelected, setRoomSelected]);

//   return (
//     <>
//       <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>
//         <Grid item xs={6}>
//           <Item>
//             <div>
//               <div className="room-box">
//                 <div className="col-lg-4" onClick={() => openModal(0)} style={{ cursor: "pointer" }}>
//                   <img src="/assets/images/hotel.png" alt="" className="room-image" />
//                 </div>
//                 <Modal open={modalOpen} onClose={closeModal} style={modalStyles}>
//                   <div className="modal-content">
//                     <Carousel autoPlay={false} animation="fade" index={selectedImageIndex}>
//                       {roomImages.map((image, index) => (
//                         <Paper key={index} elevation={3}>
//                           <img src={image} alt={`Room ${index + 1}`} style={{ width: "100%" }} />
//                         </Paper>
//                       ))}
//                     </Carousel>
//                     <div className="modal-controls">
//                       <Button onClick={prevImage}>Previous</Button>
//                       <Button onClick={nextImage}>Next</Button>
//                     </div>
//                   </div>
//                 </Modal>
//                 <div className="room-info">
//                   <div className="room-type-info" style={{ textAlign: "left" }}>
//                     <h4 style={{ whiteSpace: "nowrap" }}>{room?.roomName}</h4>
//                     <label>ROOM RATES EXCLUSIVE OF TAX</label>
//                     <br />
//                     <label>MAX {room?.maxGuests} Guests</label>
//                   </div>
//                   <div className="flex flex-col justify-between">
//                     <div>
//                       <h5>{room?.price}</h5>
//                       <p style={{ whiteSpace: 'nowrap', color: "black" }}>PER NIGHT</p>
//                       <p style={{ whiteSpace: 'nowrap', color: "green" }}>{room?.roomLeft} room left</p>
//                     </div>
//                     <div className="mb-3">
//                       {!showButton ? (
//                         <button onClick={() =>{ setShowButton(true);}} className='add-room' >Add Rooms</button>
//                       ) : (
//                         <div id="container" className="flex">
//                           <div className="bg-[#e7e7e7] text-black flex h-full w-32  ">
//                             <div>
//                               <button onClick={decrement} className="p-2" style={buttonStyle}>-</button>
//                               <input type="text" value={count} readOnly className="w-2 h-full rounded-none text-center" style={buttonStyle} />
//                               <button onClick={increment} className="p-2" style={buttonStyle}>+</button>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 {roomSelected && roomSelected.map((room, index) => (
//                   <div key={index} className="select-room">
//                     <h4>Room {index}</h4>
//                     <div className="flex items-center">
//                       <label>Adult</label>
//                       <select
//                         id=""
//                         name="adult"
//                         className="border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5"
//                         value={room?.adult}
//                         onChange={(e) => handleChange(e, index)}
//                       >
//                         {[0,1, 2].map((room, index) => (
//                           <option
//                             className="cursor-pointer px-4 py-2 border-b rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                             key={index}
//                           >
//                             {room}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex items-center">
//                       <label>Child</label>
//                       <select
//                         id=""
//                         name="child"
//                         className="border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5"
//                         value={room?.child}
//                         onChange={(e) => handleChange(e, index)}
//                       >
//                         {[0, 1, 2].map((room, index) => (
//                           <option
//                             className="cursor-pointer px-4 py-2 border-b rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                             key={index}
//                           >
//                             {room}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 ))}

//               </div>
//             </div>
//           </Item>
//         </Grid>
//         <Grid item xs={4.5}>
//         {roomBookVisible  && (
//              <Summary room={room} totalAmount={totalAmount}   />
//            )}
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default RoomDetails;
