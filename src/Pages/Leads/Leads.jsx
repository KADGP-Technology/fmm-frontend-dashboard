import React from 'react';
import "./Leads.css";
import pic from "../../Images/findmymualogo2.png"
// import leads from '../../Images/leads.jfif'


const Leads = () => {
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
                        <span class="header-text">Business Leads</span>
                    </div>
                    <div class="header-right" style={{ display: 'flex', marginTop: '3px' }}>
                        <span class="material-icons-outlined" style={{ marginTop: '3px', marginRight: '40px' }}><ion-icon name="notifications" style={{fontSize: '31px'}}></ion-icon></span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span class="name-text" style={{ fontSize: '14px', marginRight: '20px' }}>Dev Mot</span>
                            <a href="/" class="view-profile" style={{ color: '#FF385C', fontSize: '12px', textDecoration: 'none' }}>View Profile</a>
                        </div>
                        <span class="material-icons-outlined" style={{marginRight: '20px', marginTop: '8px' }}><ion-icon name="person-circle" style={{ marginTop: '-6px', fontSize: '34px'}}></ion-icon></span>
                    </div>
                </header>

                <aside id="sidebar">
                    <div class="sidebar-title">
                        <div class="sidebar-brand">
                            <img src={pic} style={{width: '180px'}} alt='/'/>
                        </div>
                        <span class="material-icons-outlined" style={{ marginTop: '0.2rem' }} onClick={closeSidebar}><ion-icon name="close"></ion-icon></span>
                    </div>

                    <ul class="sidebar-list">
                        <li class="sidebar-list-item">
                            <a href="/">
                                <span><ion-icon name="home"></ion-icon></span> Dashboard
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Inbox">
                                <span><ion-icon name="mail"></ion-icon></span> Inbox
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Leads">
                                <span><ion-icon name="settings"></ion-icon></span> Business Leads
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Bookings">
                                <span><ion-icon name="grid"></ion-icon></span> Manage Bookings
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Personal">
                                <span><ion-icon name="person"></ion-icon></span> Personal Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Professional">
                                <span><ion-icon name="people"></ion-icon></span> Professional Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Tools">
                                <span><ion-icon name="hammer"></ion-icon></span> Promotional Tools
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Membership">
                                <span><ion-icon name="person-add"></ion-icon></span> Membership
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="/Support">
                                <span><ion-icon name="information-circle"></ion-icon></span> Support
                            </a>
                        </li>
                        <li class="sidebar-list-item logout">
                            <a href="/">
                                <span><ion-icon name="log-out"></ion-icon></span> Log Out
                            </a>
                        </li>
                    </ul>
                </aside>

                <main class="main-container">
                    <div className='header-div'>
                        <div className='header-div-text'>
                            People Looking For MUA
                        </div>
                    </div>



                    <div class="table-responsive">
                        <table class="table">
                            <thead className="lead-thead">
                                <tr>
                                    <th scope="col"><ion-icon name="person" className='icon-head' style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Name</th>
                                    <th scope="col"><ion-icon name="list" className='icon-head' style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Requirements</th>
                                    <th scope="col"><ion-icon name="calendar-number" style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Date</th>
                                    <th scope="col"><ion-icon name="location" style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Location</th>
                                    <th scope="col"><ion-icon name="wallet" style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Budget</th>
                                    <th scope="col" ><ion-icon name="call" style={{ color: '#FF385C', fontSize: '1rem' }}></ion-icon>&nbsp;Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>


                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>

                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>

                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>


                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>


                                </tr>
                                <tr>
                                    <td>Lorem</td>
                                    <td>cell</td>
                                    <td>20.11.2022</td>
                                    <td>Gandhi Hall, Delhi</td>
                                    <td>4k <input type="range" /> 10k</td>
                                    <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>





                </main>


            </div>

        </div>


    );
}
export default Leads;