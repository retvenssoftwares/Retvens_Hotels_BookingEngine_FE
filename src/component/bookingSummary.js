// import React, { useState,useContext,useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { useNavigate, useParams } from "react-router-dom";
// import { Paper, Button } from "@mui/material";
// import { BookingContext } from "../context/bookingContext";
// import Details from "./guestDetails";

// function RoomSummary({ roomSelected, room }) {
//   const navigate = useNavigate();
//   const {

//     totalAmount,
//     setTotalAmount,
//     adultValue,
//     setAdultValue,
//     updateValue,
//     childValue,
//     setChildValue,
//     updateChildValue,
//   } = useContext(BookingContext);

//   const [totalRooms, setTotalRoom] = useState(roomSelected.length);
//   const {updateTotalRooms}  = useContext(BookingContext)

//  // Update totalRooms when roomSelected changes
//  useEffect(() => {
//   setTotalRoom(roomSelected.length);
//   updateTotalRooms(roomSelected.length); // Update the totalRooms in context
// }, [roomSelected, updateTotalRooms]);

//   // Set one adult by default
//   if (adultValue === 0) {
//     setAdultValue(1);
//   }

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   // Calculate the total price
//   const totalPrice = room.price * roomSelected.length;
//   return (
//     <>
//       <Item className="room-book">
//         <div style={{ margin: "10px" }}>
//           <h3
//             style={{
//               fontSize: "15px",
//               textAlign: "left",
//               alignItems: "center",
//             }}
//           >
//             SHAHPURA HAVELI, SHAHPURA
//           </h3>
//           <hr className="solid" />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "start",
//           }}
//         >
//           <div style={{ textAlign: "left" }}>
//             <h5>{room.roomName}</h5>
//             <p>Nights</p>
//             <p>
//               {adultValue} Adult, {childValue} Child
//             </p>
//           </div>
//           <div style={{ textAlign: "right", alignItems: "center" }}>
//             <h5>Rs {totalPrice}</h5>
//             <p>{totalRooms} Rooms</p>

//           </div>
//           <hr className="solid" />
//         </div>
//       </Item>

//       <div onClick={() => navigate("/booking")} className="text-decoration-none">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "end",
//             backgroundColor: "#272a3d",
//             height: "45px",
//           }}
//         >
//           <p
//             style={{
//               color: "white",
//               fontSize: "20px",
//               marginTop: "5px",
//             }}
//           >
//             Pay
//           </p>
//           <p style={{ color: "white" }}>Rs {totalPrice}</p>
//         </div>
//       </div>

//     </>
//   );
// }

// export default RoomSummary;

import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { BookingContext } from "../context/bookingContext";
import { useNavigate, useParams } from "react-router-dom";

function Summary({
  roomType,
  roomSelected,
  adultValue,
  childValue,
  totalAmount,
  roomsData,
  propertyId,
}) {
  //const { totalAmount } = useContext(BookingContext);
  console.log(totalAmount);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Item className="room-book">
      <div style={{ margin: "10px" }}>
        <h3
          style={{
            fontSize: "15px",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          SHAHPURA HAVELI, SHAHPURA
        </h3>
        <hr className="solid" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h5>{roomType} Room</h5>
          <p>Nights</p>
          <p>
            {adultValue !== undefined ? adultValue : 0} Adult,{" "}
            {childValue !== undefined ? childValue : 0} Child
          </p>
        </div>
        <div style={{ textAlign: "right", alignItems: "center" }}>
          <h5>Rs {totalAmount !== undefined ? totalAmount.toFixed(2) : 0.0}</h5>
          <p>{roomSelected.length} Rooms</p>
        </div>

        <hr className="solid" />
      </div>
    </Item>
  );
}

export default function SummaryContainer({ propertyId }) {
  const navigate = useNavigate();
  const { roomSelected, totalAmount } = useContext(BookingContext);
  console.log(propertyId)
  // Separate roomSelected by roomType
  const roomTypes = Array.from(
    new Set(roomSelected.map((room) => room.roomType))
  );

  return (
    <>
      {roomTypes.map((roomType) => {
        // Filter roomSelected for the specific room type
        const selectedRoomsOfType = roomSelected.filter(
          (room) => room.roomType === roomType
        );

        // Calculate adult and child values for this room type
        const adultValue = selectedRoomsOfType.reduce(
          (accumulator, currentValue) => accumulator + currentValue.adult,
          0
        );
        const childValue = selectedRoomsOfType.reduce(
          (accumulator, currentValue) => accumulator + currentValue.child,
          0
        );
        // Calculate totalAmount for this room type
        const totalAmount = selectedRoomsOfType.length * 10000; // Assuming a fixed rate of 10000 per room

        return (
          <Summary
            propertyId={propertyId}
            key={roomType}
            roomType={roomType}
            roomSelected={selectedRoomsOfType}
            adultValue={adultValue}
            childValue={childValue}
            totalAmount={totalAmount}
          />
        );
      })}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "end",
          backgroundColor: "#272a3d",
          height: "45px",
          cursor: "pointer",
          position: "relative",
          bottom: "0",
          width: "100%",
          marginLeft: "8px",
        }}
        onClick={() => navigate(`/booking/${propertyId}`)}
        className="text-decoration-none"
      >
        <p
          style={{
            color: "white",
            fontSize: "20px",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          Pay
        </p>
        <p style={{ color: "white" }}>
          Rs {totalAmount !== undefined ? totalAmount.toFixed(2) : 0.0}
        </p>
      </div>
    </>
  );
}
