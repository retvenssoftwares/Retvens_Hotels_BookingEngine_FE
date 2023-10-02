import React from "react";
import { Grid, Paper, styled } from "@mui/material";
import PaymentInfo from './paymentInfo'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%", // Added to make the card take full height
}));

function Payment() {
    return (
        // <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>
        //   <Grid item xs={4}> {/* One column for both mobile and larger screens */}
        //     <Item>
        //       <div className="room-box">
        //         <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-4 mb-4">
        //           <h4>Hotel</h4>
        //           <h4>Hotel Name</h4>
        //           <h4>Address</h4>
        //         </div>
        //       </div>
        //       <div className="room-box">
        //         <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-4 mb-4">
        //           <h6>Booking Details</h6>
        //           <h6>Check-in</h6>
        //           <h6>Ckeck-out</h6>
        //           <h6>Total Length of Stay</h6>
        //         </div>
        //       </div>

        //     </Item>
        //   </Grid>
        //   <Grid item xs={8}> {/* One column for both mobile and larger screens */}
        //     <Item>

        //     </Item>
        //   </Grid>
        // </Grid>
        <section className="trending pt-4 ml-0 pb-0 bg-lgrey">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-4 ml-0 ps-ld-4">
                        <div className="sidebar-sticky">
                            {/* <div className="sidebar-item bg-white rounded  overflow-hidden p-3 mb-4 shadow">
                                <h4>Hotel</h4>
                            </div>

                            <div className="sidebar-item bg-white rounded  overflow-hidden p-3 mb-4 shadow">
                                <h4>Your arrival time</h4>
                               
                            </div> */}

                            <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4 shadow">
                                <h4>Hotel</h4>
                                <h5>Hotel Name</h5>
                                <h6>Address</h6>

                            </div>
                            <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4 shadow">
                                <h4>Booking Details</h4>
                                <div className="trend-full border-b pb-2 mb-2">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 ps-0">
                                            <p className="mb-0">Check-in</p>
                                            <p className="mb-0">Check-out</p>
                                            <p className="mb-0">Total length of stay</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4 ps-0 text-end">
                                            <p className="col-lg-10 ps-0 mb-0">20-10-2023</p>
                                            <p className="col-lg-10 ps-0 mb-0">20-10-2023</p>
                                            <p className="col-lg-6 ps-0 mb-0">12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4 shadow">
                                <h4>Your Price Summary</h4>
                              
                                <div className="trend-full border-b pb-2 mb-2">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 ps-0">
                                            <p className="mb-0">Original Price</p>
                                            <p className="mb-0">Discount</p>
                                            <p className="mb-0">Total Price</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4 ps-0 text-end">
                                            <p className="col-lg-10 ps-0 mb-0">20000</p>
                                            <p className="col-lg-10 ps-0 mb-0">1500</p>
                                            <p className="col-lg-10 ps-0 mb-0">18000</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>


                    <PaymentInfo />



                </div>
            </div>
        </section>
    );
}

export default Payment;
