import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Support.css'

import pic from "../../Images/findmymualogo2.png"



const Support = () => {
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


                {/* <header class="header">
                    <div class="menu-icon" onClick={openSidebar}>
                        <span class="material-icons-outlined"><ion-icon name="list"></ion-icon></span>
                    </div>
                    <div class="header-left">
                        <span class="header-text">Support</span>
                    </div>
                    <div class="header-right" style={{ display: 'flex', marginTop: '3px' }}>
                        <span class="material-icons-outlined" style={{ marginTop: '3px', marginRight: '40px' }}><ion-icon name="notifications" style={{fontSize: '31px'}}></ion-icon></span>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span class="name-text" style={{ fontSize: '14px', marginRight: '20px' }}>Dev Mot</span>
                            <a href="/" class="view-profile" style={{ color: '#FF385C', fontSize: '12px', textDecoration: 'none' }}>View Profile</a>
                        </div>
                        <span class="material-icons-outlined" style={{marginRight: '20px', marginTop: '8px' }}><ion-icon name="person-circle" style={{ marginTop: '-6px', fontSize: '34px'}}></ion-icon></span>
                    </div>
                </header> */}

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
                    <div class="main-title">
                        <p class="font-weight-bold">Support</p>
                    </div>


                    <div className='header-div3'>
                        <div className='header-div-text3'>
                            Display a dicount offer on your profile
                        </div>
                    </div>


                    <div style={{ marginTop: 120,  }}>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                
                            >
                                <Typography>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, corporis.</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, harum.</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                            <AccordionSummary
                                expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                      
                        
                    </div>
                </main>


            </div>

        </div>


    );
}
export default Support;