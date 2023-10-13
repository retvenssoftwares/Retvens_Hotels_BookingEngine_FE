import React from "react";
import { Container, Paper, Grid, Typography } from '@mui/material';

function BookingStatus() {
    return (
        <>
            <Container>
                <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Typography variant="body1">Check-In Date:</Typography>
                            <Typography variant="body2">DD/MM/YYYY</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Check-Out Date:</Typography>
                            <Typography variant="body2">DD/MM/YYYY</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Name:</Typography>
                            <Typography variant="body2">John Doe</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Booking ID:</Typography>
                            <Typography variant="body2">123456</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Payment Status:</Typography>
                            <Typography variant="body2">Paid</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1">Confirmed:</Typography>
                            <Typography variant="body2">Yes</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default BookingStatus;