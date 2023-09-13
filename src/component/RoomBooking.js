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
  const textFieldStyle = {
    height: '1px',
    marginBottom: '50px',
    width: '400px' // Adjust the height value as needed
};
const textFieldStyle2 = {
    height: '1px',
    marginBottom: '50px',
    width: '400px' // Adjust the height value as needed
};

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
<>
{/* <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item >
         

         
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>

           
          </Item>
        </Grid>

      </Grid> */} 
        <TextField  id="outlined-basic" label="name" size="small" variant="outlined" />
<TextField fullWidth label="Property Auth Code" id="fullWidth" size="small" style={textFieldStyle} />

<TextField fullWidth label="Username" id="fullWidth" size="small" style={textFieldStyle2} />
    
<input type="text" placeholder="username" style={{height:"30px", border:"#0000 solid 2px", borderRadius:"3px", fontSize:"20px" }} />
<label class="input">
      <input class="input__field" type="text" placeholder=" " value="Valuable value" />
      <span class="input__label">Some Fancy Label</span>
    </label>
</>

    );
}
export default RoomBooking





