import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function PaymentInfo() {
   // console.log(bookingId)
    const [selectedPayment, setSelectedPayment] = useState('Cash On Delivery');
    // State to manage the selected payment option
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
    //State to manage the selected payment option
    const [selectedGPayOption, setSelectedGPayOption] = useState(null);
    //pay at hotel
    const [payAtHotel,setPayAtHotel] = useState(null);

const {bookingId}= useParams()
    
    const handlePaymentClick = (paymentType) => {
        setSelectedPayment(paymentType);
    };

    const handlePhonePeRadioChange = () => {
        setSelectedPaymentOption('PhonePe');
        setSelectedGPayOption(null); // Reset Google Pay selection
    };

    const handleGPayRadioChange = () => {
        setSelectedPaymentOption(null); // Reset PhonePe selection
        setPayAtHotel(null);
        setSelectedGPayOption('Google Pay');
    };

    const handlePayAtHotel = () => {
        setSelectedPaymentOption(null); // Reset PhonePe selection
        setSelectedGPayOption(null);
        setPayAtHotel('Pay at hotel');
    };

    const getBackgroundColor = (paymentType) => {
        return selectedPayment === paymentType ? "#ADD314" : "#272a3d";
    };

    const handlePayAtHotelConfirm = () => {
        // Make a PATCH request to the server with the bookingStatus as "confirm"
       // const bookingId = "kxoUQKzC"; // Replace with your actual booking ID
        fetch(`https://api.retvenshotels.com/patchBooking/${bookingId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookingStatus: 'Confirmed' ,paymentStatus:'pending'}),
        })
        .then(response => {
            if (response.ok) {
                // Handle success
                toast.success('Booking status updated successfully', {
                    position: 'top-center',
                    marginTop:"150px",

                    autoClose: 3000, // Close the toast after 3 seconds
                });
            } else {
                // Handle error
                console.error('Failed to update booking status');
            }
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
    };

    return (
        <>
            <div className="col-lg-8 mb-4 shadow">
                <div className="payment-book">
                    <div className="booking-box">
                        <div className="customer-information mb-4">
                            <div className="customer-information mb-4 box-shadow bg-white top-color" height="80px" padding="30px">
                                <h4 className="booking-form margin-left-text">Payment</h4>
                            </div>

                            <h6>Choose Payment Mode</h6>
                            <div className="payment-box flex">
                                <div className="payment-part w-2">
                                       <div
                                        className={`payment-part-left flex-0 p-4 w-1`}
                                        onClick={() => handlePaymentClick('UPI')}
                                        style={{ cursor: 'pointer', backgroundColor: getBackgroundColor('UPI') }}
                                    >
                                        <p className='white'>PhonePe/Google Pay/UPI</p>
                                    </div>

                                    <div
                                        className={`payment-part-left flex-0 p-4 w-1`}
                                        onClick={() => handlePaymentClick('Credit/Debit Card')}
                                        style={{ cursor: 'pointer', backgroundColor: getBackgroundColor('Credit/Debit Card') }}
                                    >
                                        <p className='white'>Credit/Debit Card</p>
                                    </div>
                                    <div
                                        className={`payment-part-left flex-0 p-4 w-1`}
                                        onClick={() => handlePaymentClick('Net Banking')}
                                        style={{ cursor: 'pointer', backgroundColor: getBackgroundColor('Net Banking') }}
                                    >
                                        <p className='white'>Net Banking</p>
                                    </div>

                                 

                                    {/* Add other payment options here */}
                                </div>
                                <div className="payment-part">
                                    {/* Right Payment Part (Right Column) */}
                                    {(selectedPayment === 'Credit/Debit Card' || selectedPayment === 'Net Banking' || selectedPayment === 'UPI') && (
                                        <div className="payment-part-right flex-0 p-2  rounded">
                                            {selectedPayment === 'Credit/Debit Card' &&
                                                <div>
                                                    <p>CREDIT/DEBIT CARD</p>
                                                    <div className='mt-2'>
                                                        <TextField
                                                            type="text"
                                                            placeholder="Card Number"
                                                            className="text-input"
                                                            size="small"
                                                            variant="outlined"
                                                            fullWidth
                                                            inputProps={{ style: { height: "20px" } }}
                                                        />
                                                    </div>
                                                    <div className='mb-2 mt-4'>
                                                        <TextField
                                                            type="text"
                                                            id="outlined-basic"
                                                            placeholder="Name of card"
                                                            className="text-input"
                                                            size="small"
                                                            variant="outlined"
                                                            fullWidth
                                                            inputProps={{ style: { height: "20px" } }}
                                                        />
                                                    </div>
                                                    <div className='mb-2 mt-4'>
                                                        <TextField
                                                            type="text"
                                                            id="outlined-basic"
                                                            placeholder="valid card(MM/YY)"
                                                            className="text-input"
                                                            size="small"
                                                            fullWidth

                                                            variant="outlined"

                                                            inputProps={{ style: { height: "20px", gap: "10px" } }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <TextField
                                                            type="text"
                                                            placeholder="CVV"
                                                             className="text-input"
                                                             fullWidth
                                                            size="small"
                                                            variant="outlined"
                                                            inputProps={{ style: { height: "20px", spacing: '4px', gap: "4px" } }}
                                                        />
                                                    </div>

                                                    <button type="button" style={{ marginTop: "30px", marginLeft: "60px", height: "40px", width: "350px", borderRadius: "8px", backgroundColor: "#ADD314" }}>confirm</button>
                                                </div>
                                            }
                                            {selectedPayment === 'Net Banking' &&
                                                <div>
                                                    <p>Net Banking</p>
                                                </div>
                                            }
                                            {selectedPayment === 'UPI' &&
                                                <div>
                                                    {/* <p>Pay Using UPI</p> */}
                                                    <FormControl style={{ marginLeft: "70px" }}>
                                                        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue="female"
                                                            name="radio-buttons-group"
                                                            style={{ marginTop: "5px" }}
                                                        >
                                                            <FormControlLabel
                                                                value="PhonePe"

                                                                control={<Radio />}
                                                                label={
                                                                    <div>
                                                                        <div>

                                                                            <img src="/assets/images/phonepe.png" height="40px" alt="PhonePe Logo" />
                                                                            PhonePe
                                                                        </div>
                                                                        {selectedPaymentOption === 'PhonePe' && (
                                                                            <div>
                                                                                <button type="button" style={{ marginTop: "20px", height: "40px", width: "250px", borderRadius: "8px", backgroundColor: "#ADD314" }}>pay</button>
                                                                            </div>
                                                                        )}


                                                                    </div>

                                                                }
                                                                onChange={handlePhonePeRadioChange} // Update the selectedPaymentOption state when PhonePe radio is clicked

                                                            />

                                                            <FormControlLabel value="Google Pay" style={{ marginTop: "15px" }} control={<Radio />} label={<div>
                                                                <div>
                                                                    <img src="/assets/images/gpay.png" height="40px" marginTop="10px" alt="GPay Logo" />
                                                                    Google Pay
                                                                </div>
                                                                {selectedGPayOption === 'Google Pay' && (
                                                                    <div>
                                                                        <button type="button" style={{ marginTop: "20px", height: "40px", width: "250px", borderRadius: "8px", backgroundColor: "#ADD314" }}>Pay</button>
                                                                    </div>
                                                                )}

                                                            </div>

                                                            }

                                                                onChange={handleGPayRadioChange}
                                                            />
                                                                <FormControlLabel value="Pay at hotel" style={{ marginTop: "10px" }} control={<Radio />} label={<div>
                                                                <div>
                                                                   
                                                                     Pay at hotel
                                                                </div>
                                                                {payAtHotel === 'Pay at hotel' && (
                                                                    <div>
                                                                        <button type="button" style={{ marginTop: "20px", height: "40px", width: "250px", borderRadius: "8px", backgroundColor: "#ADD314" }} onClick={handlePayAtHotelConfirm}> confirm</button>
                                                                    </div>
                                                                )}

                                                            </div>

                                                            }

                                                                onChange={handlePayAtHotel}
                                                            />
                                                            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            }
                                        </div>
                                    )}
                                    {/* Add other payment options content here */}
                                </div>
                            </div>
                        </div>

                        <div className="customer-information card-information">
                            {/* Content for card information */}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default PaymentInfo;





