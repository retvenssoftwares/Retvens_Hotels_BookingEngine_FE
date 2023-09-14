import { Grid, Paper } from "@mui/material";
import RoomCard from "./roomICard";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import RoomBooking from "./RoomBooking";
import RoomCardData from "./roomICard";
import TotalAmountContext from "../context/bookingContext";


function Room4({ hotelData }) {
  // const [totalAmount, setTotalAmount] = useState(0)
  const [roomSelectData, setRoomSelectData] = useState({})
  const {totalAmount, setTotalAmount} = useContext(TotalAmountContext)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={2} className="main-box" style={{ marginLeft: "2px" }}>
        <Grid item xs={7}>
          <Item>
          {hotelData.room_availability && hotelData.room_availability.map((room, index) => {
        return (
          <div key={index}>
            <RoomCardData data={room} roomSelectData={roomSelectData} setRoomSelectData={setRoomSelectData}  />
          </div>
        )
      })}
            {/* <RoomCard roomData={hotelData.room_availability} setTotalAmount={setTotalAmount} /> */}
          </Item>
        </Grid>
        <Grid item xs={4}>
          {totalAmount > 0 && (
            <Item className="room-book">
              {totalAmount}
            </Item>
          )
          }
        </Grid>
      </Grid>
    </>
  )
}
export default Room4;
