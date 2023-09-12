import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal'; // Import Modal component
import Carousel from 'react-material-ui-carousel'; // Import Carousel component
import { Paper, Button } from '@mui/material';
import BookingRooms from './bookingRooms';

function Room({totalAmount, setTotalAmount}) {
    const [containerVisible, setContainerVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // State to control modal open/close
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Index of selected image
    const roomImages = [
        '/assets/images/hotel.png',
        '/assets/images/hotel1.png',
        '/assets/images/hotel2.png',
        '/assets/images/hotel3.png',
        '/assets/images/hotel4.png',
        '/assets/images/hotel5.png',
    ];

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
          <div className="nested-box" key={i} style={{ marginTop: `${nestedBoxHeight}px` }}>
            <p style={{ marginLeft: "-300px" }}>{`Room ${i + 1}`}</p>
            <FormControl fullWidth style={{ width: "70px", height: "-5px", marginTop: "-50px" }}>
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
            <FormControl fullWidth style={{ width: "70px", height: "-5px", marginTop: "-50px", marginLeft: "5px" }}>
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
    
      const categoryItemHeight=140+count*60+30 ;
    
      //model css
      const modalStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:"400px",
        marginTop:"50px",
        height: '80%', // Set your desired height here
        width: '50%',  // Set your desired width here
      };
    
    
    return (
        <>
            <section>

                <div className="category-item  box mb-4" style={{ height: `${categoryItemHeight}px` }}>
                    <div className="col-lg-4" onClick={() => openModal(0)} style={{ cursor: "pointer" }}>
                        <img src="/assets/images/hotel.png" alt="" className="room-image" />
                    </div>
                    <h4 className="room-name" style={{ whiteSpace: 'nowrap' }}>Deluxe Room</h4>
                    <label style={{ marginLeft: "-70px", marginTop: "-40px" }}>ROOM RATES EXCLUSIVE OF TAX</label><br />
                    <label style={{ marginLeft: "-190px", marginTop: "-15px" }}>MAX 5 Guests</label>
                    <h5 className="room-rate">Rs.10000.00</h5>

                    <p className="per-night" style={{ whiteSpace: 'nowrap', color: "black" }}>PER NIGHT</p>
                    <p className="room-left" style={{ whiteSpace: 'nowrap', color: "green" }}>10 Rooms Left</p>



                    {/* <div className="multi-room"></div> */}
                    {addRoomButtonVisible && (
                        <button onClick={showContainer} style={{ marginLeft: "880px", marginTop: "70px" }}>Add Rooms</button>
                    )}
                    {containerVisible && (
                        <div id="container">
                            <div className="container-price" style={{ marginLeft: "850px", marginTop: "-30px" }}>
                                <div className="item">
                                    <button onClick={decrementCount} style={{ height: "30px", width: "30px", marginTop: "90px", marginLeft: "10px" }}>-</button>
                                </div>
                                <input type="text" value={count} width="10px" readOnly style={{ height: "40px", textAlign: "center", marginLeft: "10px", marginTop: "90px" }} />
                                <div className="item">
                                    <button onClick={incrementCount} style={{ height: "30px ", width: "30px", marginTop: "90px", marginLeft: "10px" }}>+</button>
                                </div>
                            </div>

                            {/* <div className='nested-box'>
       

      </div> */}
                            {nestedBoxes}
     <BookingRooms totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
                           

                        </div>



                    )}
                </div>
            </section>
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
                                    style={{ width: '100%' }}
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
    )
}
export default Room