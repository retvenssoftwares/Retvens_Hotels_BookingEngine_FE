import React, { useState, useEffect } from 'react';

function BookingRooms({totalAmount, setTotalAmount}) {
    return (
        <>
            <div className="category-item  bookings-box mb-4">
                <label className="booking-summary">Booking Summary</label>
                <h5 className="date">Dates</h5>
                <label className="night">Nights</label>
                <h4 className="total">Total: Rs.{totalAmount.toFixed(2)}</h4> {/* Display the updated total amount */}
                <a href="/booking"><button className="book-btn">Book</button></a>
            </div>

        </>
    );
}

export default BookingRooms




