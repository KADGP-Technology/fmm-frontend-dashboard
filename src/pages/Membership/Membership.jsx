import React from 'react';
import './Membership.css'
import { useState } from 'react';
import { useRef, useEffect } from 'react';


function Membership(props) {
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
            else{
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
        <div style={{ overflowY: 'scroll' }}>
            <div>
                <div className="Leads">
                    <h1 style={{ textAlign: 'center' }}>Membership</h1>
                    <div className='heading-div' style={{ height: 150, width: 'auto', backgroundColor: 'black', borderRadius: 20, textAlign: 'center' }}>
                        <h3 className='heading-text' style={{ color: 'white', padding: 60, }}>Display a dicount offer on your profile</h3>
                    </div>
                    <div className="timer"></div>
                </div>

                <div>
                    <h2 className='head'>Countown Timer</h2>
                </div>
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
            </div>



        </div>
        
    );
}

export default Membership;

