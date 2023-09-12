import { Modal } from "@mui/material";
import React,{useState} from "react";
import Carousel from 'react-material-ui-carousel'; // Import Carousel component
import { Paper, Button } from '@mui/material';

function Images({ modalOpen, closeModal, setSelectedImageIndex, selectedImageIndex }) {


    //const [modalOpen, setModalOpen] = useState(false); // State to control modal open/close
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

      const roomImages = [
        '/assets/images/hotel.png',
        '/assets/images/hotel1.png',
        '/assets/images/hotel2.png',
        '/assets/images/hotel3.png',
        '/assets/images/hotel4.png',
        '/assets/images/hotel5.png',
    ];

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
    return (
        <>

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
export default Images