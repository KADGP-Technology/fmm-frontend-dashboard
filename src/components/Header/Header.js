import React, { useContext, useEffect, useState } from 'react'
import { userCheck } from '../../server/apis/user';
import { AuthContext } from '../../context/Context';

const Header = () => {

    // const [userInfo, setUserInfo] = useState({})

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

    const {login,userInfo} = useContext(AuthContext)

 
    useEffect(() => {
        login({_id:"63ef46970984291025837352"})
      }, [])

    // useEffect(() => {
    //  const userInformation = localStorage.getItem('userInfo')
    //  console.log("userInfo==>",JSON.parse(userInformation));
    //  setUserInfo(JSON.parse(userInformation))
    // }, [])
    
  return (
    <>
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
                            <span class="name-text" style={{ fontSize: '14px', marginRight: '20px' }}>{userInfo?userInfo.firstName:'UserName'}</span>
                            <a href="/" class="view-profile" style={{ color: '#FF385C', fontSize: '12px', textDecoration: 'none' }}>View Profile</a>
                        </div>
                        <span class="material-icons-outlined" style={{marginRight: '20px', marginTop: '8px' }}><ion-icon name="person-circle" style={{ marginTop: '-6px', fontSize: '34px'}}></ion-icon></span>
                    </div>
                </header>
                
    </>
  )
}

export default Header