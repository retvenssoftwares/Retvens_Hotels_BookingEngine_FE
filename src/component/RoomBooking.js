import React from "react";

function RoomBooking({totalAmount}) {


  return (
    <>
      
              <div style={{ margin: "10px" }}>
                <h3 style={{fontSize:"15px", textAlign:"left", alignItems:"center"}}>SHAHPURA HAVELI, SHAHPURA</h3>
                <hr class="solid"/>
              </div>
              <div style={{display:"flex", justifyContent:"space-around", alignItems:"start"}}>
                <div style={{textAlign:"left"}}>
                  <h5>Delux Room</h5>
                  <p>2 Nights</p>
                  <p>1 Adult, 1 Child</p>
                </div>
                <div style={{textAlign:"right", alignItems:"center"}}>
                  <h5>Rs 10000</h5>
                  <p>2 Rooms</p>
                </div>
                <hr class="solid"/>
              </div>
           
              <div style={{display:"flex", justifyContent:"space-around" , alignItems:"end", backgroundColor:"#272a3d",height:"45px"}}>
                  <p style={{color:"white",fontSize:"20px",marginTop:"5px"}}>Pay</p>
                  <p style={{color:"white"}}>Rs {totalAmount}</p>
                </div>
          
              
    </>


  );
}
export default RoomBooking;
