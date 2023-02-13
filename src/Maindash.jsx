import React from "react";
import './Maindash.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviewgraph from './components/Reviewgraph'
import pic from "./Images/findmymualogo2.png"

<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"></link>



function Dashboard(params) {
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
                        <span class="header-text">Dashboard</span>
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
                            {/* findmy<span style={{ color: 'red' }}>mua</span> */}
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
                                <span><ion-icon name="grid" ></ion-icon></span> Manage Bookings
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
                            <a href="# /">
                                <span><ion-icon name="log-out"></ion-icon></span> Log Out
                            </a>
                        </li>
                    </ul>
                </aside>

                <main class="main-container">
                    {/* <div class="main-title">
                        <p class="font-weight-bold">DASHBOARD</p>
                    </div> */}

                    <div class="main-cards">

                        <div className="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '20px', marginLeft: '20px', border: '1px solid',}}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex">
                                    <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                                        className="img-fluid image rounded-center h-50 my-4" alt="..."
                                         />

                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text"> TOTAL BOOKINGS</p>
                                        <h4 class="card-title" style={{fontSize: '60px'}}>4585</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '20px', marginLeft: '20px', border: '1px solid', }}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsSvSmQn9HT7hYXmRjzjhYQuVmcISV95Nfw&usqp=CAU"
                                        class="img-fluid image rounded-center h-50 my-4" alt="..."
                                         />

                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Profile Views</p>
                                        <h4 class="card-title" style={{fontSize: '60px'}}>4585</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '20px', marginLeft: '20px', border: '1px solid', }}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAlYW7ltp0fQOYdSdiLZpDH05FSGC2f-HsA&usqp=CAU"
                                        class="img-fluid image rounded-center mx-auto h-50 my-4" alt="..."
                                         />
                                      
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">Days Left</p>
                                        <h4 class="card-title" style={{fontSize: '60px'}}>4585</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '20px', marginLeft: '20px', border: '1px solid', }}>
                            <div class="row g-0" >
                                <div class="col-md-4 d-flex" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkT5b3D1r0swXu0B32TtTIv2ex8bjzBNQH_w&usqp=CAU"
                                        class="img-fluid image my-4 h-50" alt="..."
                                         />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">No.of Favourites</p>
                                        <h4 class="card-title" style={{fontSize: '60px'}}>4585</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div style={{ border: '1px', borderRadius: '18px', paddingTop: '20px' }} className="review">

                        <Reviewgraph />

                    </div>

                    
                </main>


            </div>

        </div>
    );
}

export default Dashboard