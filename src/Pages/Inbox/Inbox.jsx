import React from 'react';
import "./Inbox.css";


const Inbox = () => {
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



    document.querySelector('.chat[data-chat=person2]').classList.add('active-chat')
    document.querySelector('.person[data-chat=person2]').classList.add('active')

    let friends = {
        list: document.querySelector('ul.people'),
        all: document.querySelectorAll('.left .person'),
        name: ''
    },
        chat = {
            container: document.querySelector('.container .right'),
            current: null,
            person: null,
            name: document.querySelector('.container .right .top .name')
        }

    friends.all.forEach(f => {
        f.addEventListener('mousedown', () => {
            f.classList.contains('active') || setAciveChat(f)
        })
    });

    function setAciveChat(f) {
        friends.list.querySelector('.active').classList.remove('active')
        f.classList.add('active')
        chat.current = chat.container.querySelector('.active-chat')
        chat.person = f.getAttribute('data-chat')
        chat.current.classList.remove('active-chat')
        chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
        friends.name = f.querySelector('.name').innerText
        chat.name.innerHTML = friends.name
    }


    return (
        <div>
            <div class="grid-container">


                <header class="header">
                    <div class="menu-icon" onClick={openSidebar}>
                        <span class="material-icons-outlined"><ion-icon name="list"></ion-icon></span>
                    </div>
                    <div class="header-left">
                        <span class="header-text">Inbox</span>
                    </div>
                    <div class="header-right" style={{ marginTop: '3px' }}>
                        <span class="material-icons-outlined" style={{ marginTop: '3px' }}><ion-icon name="notifications"></ion-icon></span>

                        <span class="material-icons-outlined" style={{ marginLeft: '1rem' }}>Hi,User<ion-icon name="person-circle" style={{ marginTop: '-6px' }}></ion-icon></span>
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
                        <p class="font-weight-bold">Inbox</p>
                    </div>


                    <div class="wrapper">
                        <div class="container">
                            <div class="left">
                                <div class="top">
                                    <input type="text" placeholder="Search" />
                                    <a href="/" class="search">u</a>
                                </div>
                                <ul class="people">
                                    <li class="person" data-chat="person1">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                                        <span class="name">Thomas Bangalter</span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">I was wondering...</span>
                                    </li>
                                    <li class="person" data-chat="person2">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
                                        <span class="name">Dog Woofson</span>
                                        <span class="time">1:44 PM</span>
                                        <span class="preview">I've forgotten how it felt before</span>
                                    </li>
                                    <li class="person" data-chat="person3">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
                                        <span class="name">Louis CK</span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">But we’re probably gonna need a new carpet.</span>
                                    </li>
                                    <li class="person" data-chat="person4">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
                                        <span class="name">Bo Jackson</span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">It’s not that bad...</span>
                                    </li>
                                    <li class="person" data-chat="person5">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
                                        <span class="name">Michael Jordan</span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">Wasup for the third time like is
                                            you blind bitch</span>
                                    </li>
                                    <li class="person" data-chat="person6">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt="" />
                                        <span class="name">Drake</span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">howdoyoudoaspace</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="right">
                                <div class="top"><span>To: <span class="name">Dog Woofson</span></span></div>
                                <div class="chat" data-chat="person1">
                                    <div class="conversation-start">
                                        <span>Today, 6:48 AM</span>
                                    </div>
                                    <div class="bubble you">
                                        Hello,
                                    </div>
                                    <div class="bubble you">
                                        it's me.
                                    </div>
                                    <div class="bubble you">
                                        I was wondering...
                                    </div>
                                </div>
                                <div class="chat" data-chat="person2">
                                    <div class="conversation-start">
                                        <span>Today, 5:38 PM</span>
                                    </div>
                                    <div class="bubble you">
                                        Hello, can you hear me?
                                    </div>
                                    <div class="bubble you">
                                        I'm in California dreaming
                                    </div>
                                    <div class="bubble me">
                                        ... about who we used to be.
                                    </div>
                                    <div class="bubble me">
                                        Are you serious?
                                    </div>
                                    <div class="bubble you">
                                        When we were younger and free...
                                    </div>
                                    <div class="bubble you">
                                        I've forgotten how it felt before
                                    </div>
                                    
                                </div>
                                <div class="chat" data-chat="person3">
                                    <div class="conversation-start">
                                        <span>Today, 3:38 AM</span>
                                    </div>
                                    <div class="bubble you">
                                        Hey human!
                                    </div>
                                    <div class="bubble you">
                                        Umm... Someone took a shit in the hallway.
                                    </div>
                                    <div class="bubble me">
                                        ... what.
                                    </div>
                                    <div class="bubble me">
                                        Are you serious?
                                    </div>
                                    <div class="bubble you">
                                        I mean...
                                    </div>
                                    <div class="bubble you">
                                        It’s not that bad...
                                    </div>
                                    <div class="bubble you">
                                        But we’re probably gonna need a new carpet.
                                    </div>
                                </div>
                                <div class="chat" data-chat="person4">
                                    <div class="conversation-start">
                                        <span>Yesterday, 4:20 PM</span>
                                    </div>
                                    <div class="bubble me">
                                        Hey human!
                                    </div>
                                    <div class="bubble me">
                                        Umm... Someone took a shit in the hallway.
                                    </div>
                                    <div class="bubble you">
                                        ... what.
                                    </div>
                                    <div class="bubble you">
                                        Are you serious?
                                    </div>
                                    <div class="bubble me">
                                        I mean...
                                    </div>
                                    <div class="bubble me">
                                        It’s not that bad...
                                    </div>
                                </div>
                                <div class="chat" data-chat="person5">
                                    <div class="conversation-start">
                                        <span>Today, 6:28 AM</span>
                                    </div>
                                    <div class="bubble you">
                                        Wasup
                                    </div>
                                    <div class="bubble you">
                                        Wasup
                                    </div>
                                    <div class="bubble you">
                                        Wasup for the third time like is <br />you blind bitch
                                    </div>

                                </div>
                                <div class="chat" data-chat="person6">
                                    <div class="conversation-start">
                                        <span>Monday, 1:27 PM</span>
                                    </div>
                                    <div class="bubble you">
                                        So, how's your new phone?
                                    </div>
                                    <div class="bubble you">
                                        You finally have a smartphone :D
                                    </div>
                                    <div class="bubble me">
                                        Drake?
                                    </div>
                                    <div class="bubble me">
                                        Why aren't you answering?
                                    </div>
                                    <div class="bubble you">
                                        howdoyoudoaspace
                                    </div>
                                </div>
                                <div class="write">
                                    <a href="/" class="write-link attach">i</a>
                                    <input type="text" />
                                    <a href="/" class="write-link smiley">i</a>
                                    <a href="/" class="write-link send">i</a>
                                </div>
                            </div>
                        </div>
                    </div>




                </main>


            </div>

        </div>


    );
}
export default Inbox;