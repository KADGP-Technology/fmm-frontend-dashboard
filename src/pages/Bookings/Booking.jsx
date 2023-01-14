import React from 'react';
import "./Booking.css";
import Table from '../../components/Table/Table';
import Stack from '@mui/material/Stack';
import { Button } from '@material-ui/core';


const Booking = () => {
    return (

        <div className="Booking" style={{ overflowY: 'scroll' }}>
            <div className='heading-div' style={{ height: 100, width: 'auto', backgroundColor: 'black', textAlign: 'center' }}>
                <h3 className='heading-text' style={{ color: 'white', padding: 35,float:'left',fontSize:'25px' }}>Manage Bookings</h3>
            </div>


            <Stack direction="row" spacing={2} className='ButtonGroup' style={{ width: 400, margin: 'auto', marginTop: 30, height: 60 }}>
                <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: '#FF1493', color: 'white' }}>Upcoming Booking</Button>
                <Button variant="contained" href="#contained-buttons" style={{ backgroundColor: '#FF1493', color: 'white' }}>Previous Booking</Button>
            </Stack>

            {/* <div className='table-container'>
                <div class="container">
                    <div class="row mt-3">
                        <div class="col-3"></div>
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr class="head-sticky-container">
                                            <th scope="col" class="head-sticky"></th>
                                            <th scope="col" class="head"><span><ion-icon name="person-circle" class="head-icon"></ion-icon></span>  Name</th>
                                            <th scope="col" class="head"><span><ion-icon name="list" class="head-icon"></ion-icon></span> Requirements</th>
                                            <th scope="col" class="head"><span><ion-icon name="calendar" class="head-icon"></ion-icon></span> Date</th>
                                            <th scope="col" class="head"><span><ion-icon name="Location" class="head-icon"></ion-icon></span>Location</th>
                                            <th scope="col" class="head"><span><ion-icon name="Wallet" class="head-icon"></ion-icon></span>  Budget</th>
                                            <th scope="col" class="head"><span><ion-icon name="call" class="head-icon"></ion-icon></span>  Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-24 19:52:28</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-21 11:05:16</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-22 18:44:33</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                        <tr>
                                            <th class="th-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU" alt="..." class="rounded-circle" height="60px" width="60px" /></th>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">Lorem</td>
                                            <td class="td-name">12.12.22</td>
                                            <td class="td-name">Gandhi Hall,Delhi</td>
                                            <td class="td-name">2020-01-25 18:12:58</td>
                                            <td class="td-name"><span><ion-icon name="phone-portrait"></ion-icon></span> 763903****</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </div> */}
            <Table />
        </div>
    );
}



export default Booking;