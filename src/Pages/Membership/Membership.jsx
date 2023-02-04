import React from 'react';
import './Membership.css'
import { useState } from 'react';
import { useRef, useEffect } from 'react';



const Membership = () => {
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









    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const StartTimer = () => {
        const countdownDate = new Date('May 30 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const Hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stops the timer
                clearInterval(interval.current);
            }
            else {
                // update timer
                setTimerDays(Days);
                setTimerHours(Hours);
                setTimerMinutes(Minutes);
                setTimerSeconds(Seconds);
            }
        }, 1000)
    };
    // componentdidmount
    useEffect(() => {
        StartTimer();
        return () => {
            clearInterval(interval.currentt);
        }
    })

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


                    <div className='header-div2'>
                        <div className='header-div-text2'>
                            Display a dicount offer on your profile
                        </div>
                    </div>


                    <div className="timer"></div>

                    <div className='countdown-container'>
                        <div className='countdown'>
                            <section>
                                <p className='content'>{timerDays}</p>
                                <small>Days</small>
                            </section>
                            <span className='span'>:</span>
                            <section>
                                <p className='content'>{timerHours}</p>
                                <small>Hours</small>
                            </section>
                            <span className='span'>:</span>
                            <section>
                                <p className='content'>{timerMinutes}</p>
                                <small>Minutes</small>
                            </section>
                            <span className='span'>:</span>
                            <section>
                                <p className='content'>{timerSeconds}</p>
                                <small>Seconds</small>
                            </section>
                        </div>
                        <br />
                        <div className='border'></div>
                    </div>
                </main>


            </div>

        </div>


    );
}
export default Membership;