import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, Typography } from '@mui/material';
import axios from 'axios';

function BookingStatus() {
    const [bookingData, setBookingData] = useState({});
  // const userId = "your_user_id"; // Replace this with the actual user ID or fetch it from your app's state

//    useEffect(() => {
//     // Fetch data from the API
//     fetch(`http://localhost:9000/createBooking/${userId}`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("Failed to fetch data");
//             }
//         })
//         .then((data) => {
//             setBookingData(data);
//             console.log(data)
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }, [userId]);


useEffect(() => {
    // Fetch data from the API using Axios
    async function getList() {
        const userId = await window.cookieStore.get("userId")

        const url = `http://localhost:9000/getUserBookings/${userId?.value}`
        const response = await axios.get(url)
        console.log(response.data, url)
        setBookingData(response.data)
    }
    getList()
  }, []);

    return (
        <>
            <Container>
                {bookingData && 
                bookingData.map((item,index)=>{
                    return(<>
                    <Paper key={index} elevation={3} style={{ padding: 16, marginTop: 16 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Typography variant="body1">Check-In Date:</Typography>
                            <Typography variant="body2">{item.checkInDate}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Check-Out Date:</Typography>
                            <Typography variant="body2">{bookingData.checkOutDate}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Name:</Typography>
                            <Typography variant="body2">name</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Booking ID:</Typography>
                            <Typography variant="body2">{bookingData.bookingId}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Payment Status:</Typography>
                            <Typography variant="body2">{bookingData.paymentStatus}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">bookingStatus:</Typography>
                            <Typography variant="body2">{bookingData.bookingStatus}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                    </>)
                })
                
                }
            </Container>
        </>
    );
}

export default BookingStatus



// import React from "react";
// import { Container, Paper, Grid, Typography, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

// function BookingStatus() {
//     return (
//         <>
//             <Container>
//                 <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Check-In Date:</Typography>
//                             <Typography variant="body2">DD/MM/YYYY</Typography>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Check-Out Date:</Typography>
//                             <Typography variant="body2">DD/MM/YYYY</Typography>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Name:</Typography>
//                             <Typography variant="body2">John Doe</Typography>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Booking ID:</Typography>
//                             <Typography variant="body2">123456</Typography>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Payment Status:</Typography>
//                             <Typography variant="body2">Paid</Typography>
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Typography variant="body1">Confirmed:</Typography>
//                             <Typography variant="body2">Yes</Typography>
//                         </Grid>
//                         {/* <Grid item xs={2}>
//                             <Typography variant="body1">Delete:</Typography>
//                             <IconButton color="secondary" aria-label="delete">
//                                 <DeleteIcon />
//                             </IconButton>
//                         </Grid> */}
//                     </Grid>
//                 </Paper>
//             </Container>
//         </>
//     );
// };

// export default BookingStatus;