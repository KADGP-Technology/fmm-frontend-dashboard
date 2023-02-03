import React from 'react';
import "./Booking.css";


const Bookings = () => {
    var sidebarOpen = false;
    var sidebar = document.getElementById("sidebar");

    function openSidebar() {
        if (!sidebarOpen) {
            sidebar.classList.add("sidebar-responsive");
            sidebarOpen = true;
        }
    }

    function closeSidebar() {
        if (sidebarOpen) {
            sidebar.classList.remove("sidebar-responsive");
            sidebarOpen = false;
        }
    }

    return (
        <div>
            <div class="grid-container">


                <header class="header">
                    <div class="menu-icon" onClick={openSidebar}>
                        <span class="material-icons-outlined"><ion-icon name="list"></ion-icon></span>
                    </div>
                    <div class="header-left">
                        <span class="header-text">Bookings</span>
                    </div>
                    <div class="header-right" style={{ marginTop: '3px' }}>
                        <span class="material-icons-outlined" style={{ marginTop: '3px' }}><ion-icon name="notifications"></ion-icon></span>

                        <span class="material-icons-outlined" style={{marginLeft:'1rem'}}>Hi,User<ion-icon name="person-circle" style={{ marginTop: '-6px' }}></ion-icon></span>
                    </div>
                </header>

                <aside id="sidebar">
                    <div class="sidebar-title">
                        <div class="sidebar-brand">
                            findmy<span style={{ color: 'red' }}>mua</span>
                        </div>
                        <span class="material-icons-outlined" style={{ marginTop: '0.2rem' }} onClick={closeSidebar}><ion-icon name="close"></ion-icon></span>
                    </div>

                    <ul class="sidebar-list">
                        <li class="sidebar-list-item">
                            <a href="/" target="_blank">
                                <span><ion-icon name="home"></ion-icon></span> Dashboard
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="mail"></ion-icon></span> Inbox
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Leads" target="_blank">
                                <span><ion-icon name="settings"></ion-icon></span> Business Leads
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Bookings" target="_blank">
                                <span><ion-icon name="grid"></ion-icon></span> Manage Bookings
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Personal" target="_blank">
                                <span><ion-icon name="person"></ion-icon></span> Personal Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Professional" target="_blank">
                                <span><ion-icon name="people"></ion-icon></span> Professional Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Tools" target="_blank">
                                <span><ion-icon name="hammer"></ion-icon></span> Promotional Tools
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Membership" target="_blank">
                                <span><ion-icon name="person-add"></ion-icon></span> Membership
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Support" target="_blank">
                                <span><ion-icon name="information-circle"></ion-icon></span> Support
                            </a>
                        </li>
                        <li class="sidebar-list-item logout">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="log-out"></ion-icon></span> Log Out
                            </a>
                        </li>
                    </ul>
                </aside>

                <main class="main-container">
                    <div class="main-title">
                        <p class="font-weight-bold">Manage Bookings</p>
                    </div>



                    <div class="btn-group booking-button" role="group" aria-label="Basic radio toggle button group" style={{width:'100%'}}>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label class="btn btn-outline-primary" for="btnradio1">Manage Bookings</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio3">Upcoming Bookings</label>
                    </div>



                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"><ion-icon name="calendar-number" className='icon-head' style={{ color: 'red', fontSize: '1rem' }}></ion-icon>&nbsp;Date</th>
                                    <th scope="col"><ion-icon name="person" className='icon-head' style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Name</th>
                                    <th scope="col"><ion-icon name="location" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Location</th>
                                    <th scope="col"><ion-icon name="wallet" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Budget</th>
                                    <th scope="col"><ion-icon name="call" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Contact</th>
                                    <th scope="col" ><ion-icon name="list" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" className='range' /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                                <tr>
                                    <th scope="row">20.11.2022</th>
                                    <td>Lorem</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                    <td>Cell</td>


                                </tr>
                            </tbody>
                        </table>
                    </div>





                </main>


            </div>

        </div>


    );
}
export default Bookings;