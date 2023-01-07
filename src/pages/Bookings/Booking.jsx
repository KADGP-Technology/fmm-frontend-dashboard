import React from 'react';
import "./Booking.css";
import Table from '../../components/Table/Table';
import Stack from '@mui/material/Stack';
import { Button} from '@material-ui/core';


const Booking = () => {
    return (
        
        <div className="Booking" style={{ overflowY: 'scroll' }}>
            <h1 style={{textAlign:'center'}}>Manage Bookings</h1>

    
            <Stack direction="row" spacing={2} className='ButtonGroup' style={{width:400,  margin:'auto' ,marginTop:30, height:60}}>
                <Button variant="contained" href="#contained-buttons" style={{backgroundColor:'#FF1493', color:'white'}}>Upcoming Booking</Button>
                <Button variant="contained" href="#contained-buttons" style={{backgroundColor:'#FF1493', color:'white'}}>Previous Booking</Button>
            </Stack>

            <Table />
        </div>
    );
}



export default Booking;