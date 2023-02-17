import Axios from 'axios';

export async function getBookings(data) {
    return Axios.post('http://localhost:8080/bookings/getBookings',data);
}

