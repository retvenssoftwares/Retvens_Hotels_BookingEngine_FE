// import React, { useState, useEffect,useContext } from "react";
// import { BookingContext } from "../context/bookingContext";

// function Search(){
//   const [checkin, setCheckin] = useState(
//     new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//   );
//   const [checkout, setCheckout] = useState(
//     new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//   );

//   const {updateCheckInValue,updateCheckOutValue}  = useContext(BookingContext)


//   const handleCheckIn = (e) => {
//     setCheckin(e.target.value)
//     updateCheckInValue(e.target.value)
//   }
//   const handleCheckOut = (e) => {
//     setCheckout(e.target.value)
//     updateCheckOutValue(e.target.value)
//   }
//   return(
//     <>
//     <div class="row d-flex align-items-center justify-content-between">
// <div class="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
//   <div class="form-group">
//     <label class="checkIn-text">Check-in</label>
//     <div class="input-box">
//       <input type="date" name="date" value={checkin}
//         onChange={handleCheckIn}
//       />
//     </div>
//   </div>
// </div>
// <div class="col-lg-2 mb-2">
//   <div class="form-group">
//     <label class="checkIn-text">Check-out</label>
//     <div class="input-box">
//       <input type="date" name="date" value={checkout}
//         onChange={handleCheckOut}

//       />
//     </div>
//   </div>
// </div>

// <div class="col-lg-2" style={{ marginTop: "20px", marginRight: "370px" }}>
//   <div class="form-group mb-0 text-center">
//     <a href="#" class="nir-btn w-100">
//       <i class="fa fa-search "></i> Search Now
//     </a>
//   </div>
// </div>
// </div>
//     </>
//   )
// }
// export default Search



import React, { useState, useEffect, useContext } from "react";
import { BookingContext } from "../context/bookingContext";
import {parse,format} from "date-fns"
import { useParams } from "react-router-dom";

function Search({setRoomData}) {
  const {propertyId} = useParams()
  const [checkin, setCheckin] = useState(

    new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [checkout, setCheckout] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  function getCurrentDateFormatted() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');  // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const a = checkin.split("-")
  const originalCheckIn = a[0] + "-" + a[1] + "-" + a[2]



  const b = checkout.split("-")
  const originalCheckOut = b[0] + "-" + b[1] + "-" + b[2]
  const [searchResults, setSearchResults] = useState([]); // State to store filtered results

  const { updateCheckInValue, updateCheckOutValue } = useContext(BookingContext);
 
  const handleCheckIn = (e) => {
    setCheckin(e.target.value);
    updateCheckInValue(e.target.value);
  };

  const handleCheckOut = (e) => {
    setCheckout(e.target.value);
    updateCheckOutValue(e.target.value);
  };

  
  const handleSearch = () => {
    // Make an API request with check-in and check-out dates
    //const propertyId = "RJYud6Ea";
    fetch(`http://localhost:9000/fetchInventoryFilter?from=${originalCheckIn}&to=${originalCheckOut}&propertyId=${propertyId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response and filter the data based on your criteria
        const filteredData = data.map((room) => {
          // Add your filtering logic here
          // For example, filter rooms that meet certain conditions
          const newObj = {
            rate: room?.roomPrice,
            roomsLeft:room?.inventory,
            maxGuests:room?.maxOccupancy,
            roomType:room?.roomName,
            type:room?.roomName
          }
          return newObj
        });
      

        // Update the searchResults state with the filtered data
        setSearchResults(filteredData);
        setRoomData(filteredData)
        console.log(filteredData)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div class="row d-flex align-items-center justify-content-between">
        <div class="col-lg-2 mb-2" style={{ marginLeft: "400px" }}>
          <div class="form-group">
            <label class="checkIn-text">Check-in</label>
            <div class="input-box">
              <input
                type="date"
                name="date"
                min={getCurrentDateFormatted()}
                value={originalCheckIn}
                onChange={handleCheckIn}
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 mb-2">
          <div class="form-group">
            <label class="checkIn-text">Check-out</label>
            <div class="input-box">
              <input
                type="date"
                name="date"
                min={originalCheckIn || getCurrentDateFormatted()}
                value={originalCheckOut}
                onChange={handleCheckOut}
              />
            </div>
          </div>
        </div>

        <div class="col-lg-2" style={{ marginTop: "20px", marginRight: "370px" }}>
          <div class="form-group mb-0 text-center">
            <button onClick={handleSearch} class="nir-btn w-100">
              <i class="fa fa-search "></i> Search Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
