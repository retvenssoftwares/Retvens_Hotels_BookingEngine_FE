import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField'

function RoomBooking(){

  let timer;

  document.addEventListener('input', e => {
    const el = e.target;
    
    if( el.matches('[data-color]') ) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
      }, 100)
    }
  })
 
  
  const StyledInput = styled("input")({
    width: "10%", // Set the width to 100% to make it span the container
    borderRadius: "8px", // Adjust the border radius as needed
    padding: "10px", // Add padding for better appearance
    border: "1px solid #ccc", // Add a border for visual separation
    fontSize: "16px", // Set the font size
  });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
<>
 <Grid container spacing={3}>
        <Grid item xs={7}>
          {/* <Item > */}
            <div class="booing-field">
            <StyledInput className="booking-text-field" type="text"  placeholder="First Name" width={10}/>
            </div>
   
         

{/*          
          </Item> */}
        </Grid>
        <Grid item xs={4}>
          <Item>

           
          </Item>
        </Grid>

      </Grid> 
      </>


    );
}
export default RoomBooking





