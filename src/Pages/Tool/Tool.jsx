import React from 'react';
import "./Tool.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const buttons = {
    width: '20%',
    height: 30,
    borderRadius: 30,
    backgroundColor: '#FF1493',
    color: 'white',
    fontSize: 13,
    border: 'none',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    cursor: 'pointer'
}



const Tools = () => {
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
                        <span class="header-text">Promotional Tool</span>
                    </div>
                    <div class="header-right" style={{ marginTop: '3px'}}>
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
                            <a href="# /" target="_blank">
                                <span><ion-icon name="home"></ion-icon></span> Dashboard
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="mail"></ion-icon></span> Inbox
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="settings"></ion-icon></span> Business Leads
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="grid"></ion-icon></span> Manage Bookings
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="person"></ion-icon></span> Personal Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="people"></ion-icon></span> Professional Details
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="hammer"></ion-icon></span> Promotional Tools
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
                                <span><ion-icon name="person-add"></ion-icon></span> Membership
                            </a>
                        </li>
                        <li class="sidebar-list-item">
                            <a href="# /" target="_blank">
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
                        <p class="font-weight-bold">Promotional Tools</p>
                    </div>


                    <div className='header-div1'>
                        <div className='header-div-text1'>
                            Display a dicount offer on your profile
                        </div>
                    </div>

                    <section class="tools-list" style={{ marginTop: '50px' }}>

                        <h3 class="text-center">
                            Select an
                            <small class="text-muted"> offer type</small>
                        </h3>

                        <div class="input-group mb-3 w-50 mx-auto">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <br />
                        <br />


                        <h3 class="text-center">
                            Select the
                            <small class="text-muted"> Service for discount</small>
                        </h3>
                        <div class="input-group mb-3 w-50 mx-auto">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <br />
                        <br />

                        <h3 class="text-center">
                            Valid
                            <small class="text-muted"> till</small>
                        </h3>
                        <div class="input-group mb-3 w-50 mx-auto">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <br />


                        <div class="tools-btn text-center">
                            <button type="button" class="btn mb-4" style={buttons}>Save & Exit</button>
                            <button type="button" class="btn mb-4" style={buttons}>Apply</button>
                        </div>
                    </section>
                </main>


            </div>

        </div>


    );
}
export default Tools;