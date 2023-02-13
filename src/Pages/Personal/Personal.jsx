import React from 'react';
import "./Personal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../../Images/findmymualogo2.png"

const align = {
    textAlign: 'center',
   width:'50%'
}

const Personal = () => {
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
                        <span class="header-text">Personal Details</span>
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
                            <a href="# /">
                                <span><ion-icon name="log-out"></ion-icon></span> Log Out
                            </a>
                        </li>
                    </ul>
                </aside>

                <main class="main-containerr">
                      <section>
                        <div class="profile-photo-info">    
                            <div class="container2">    
                                <div class="container2-sub">
                            
                                    <div class="avatar-upload" style={align}>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                            <label for="imageUpload"></label>
                                        </div>
                                        <div class="avatar-preview" style={{ margin: 'auto' }}>
                                            <div id="imagePreview">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style={{display: 'flex',flexDirection:'column',width:'100%',alignItems:'flex-start'}}>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="profile_details_text text-lg-start">
                                                            <h4 className='form-text'> First Name: <b class="important">*</b></h4>
                                                        </label>
                                                        <input type="text" name="first_name" class="form-control h-50px"
                                                            value="" style={{ fontSize: 20 }} required />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="profile_details_text form-text">
                                                            <h4 className='form-text'> Last Name: <b class="important">*</b></h4>
                                                        </label>
                                                        <input type="text" name="last_name" class="form-control h-50px" value=""
                                                            style={{ fontSize: 20 }} required />
                                                    </div>
                                                </div>
                                            </div>

                                </div>
                                
                                <br />
                                {/* <br /> */}
                                <div
                                >
                                    <form action="" method="POST">
                                        
                                        {/* <br /> */}
                                        <div>
                                           
                                            <br />
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="form-group" style={{ width: '25%' }}>
                                                        {/* <label class="profile_details_text">
                                                            <h4 className='form-text'> Gender:<b class="important">*</b></h4>
                                                        </label> */}
                                                        <select name="gender"  class="form-control h-50px form-text" value=""
                                                            style={{ fontSize: 20 }}  required>
                                                            <option value="Gender">Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                        <div class="border"></div>
                                        <br />
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <label class="profile_details_text">
                                                        <h4 className='form-text'>Contact Number: <b class="important">*</b></h4>
                                                    </label>
                                                    <input type="tel" name="phone" class="form-control h-50px" value=""
                                                        style={{ fontSize: 20 }} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <label class="profile_details_text">
                                                        <h4 className='form-text'>Email Address: <b class="important">*</b></h4>
                                                    </label>
                                                    <input type="email" name="email" class="form-control h-50px" value=""
                                                        style={{ fontSize: 20 }} required />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="row">

                                            <div class="location col-6">
                                                <h2 className='form-text' style={{ fontSize: 30, fontWeight: 400, color:'#000000' }}>Home</h2>
                                                <h6 className='form-text'>55 A, 1st Floor, Street No 2, Laxmi Nagar, Delhi 110092 </h6>
                                            </div>
                                            <div class=" col-6">
                                                <a href="/" style={{ textDecoration: 'none' }}>Edit your Address</a>
                                            </div>

                                        </div>
                                        <br />

                                        <div class="border"></div>
                                        <br />
                                        <div class="row">

                                            <div class="password col-6">
                                                <h2 className='form-text'>Change Password</h2>
                                            </div>
                                            <div class="col-6">
                                                <a href="/" style={{ textDecoration: 'none' }}>Change Your Password</a>
                                            </div>

                                        </div>
                                        <br />
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="profile_details_text text-lg-start">
                                                        <h4 className='form-text'>Password: <b class="important">*</b></h4>
                                                    </label>
                                                    <input type="password" name="password" class="form-control h-50px"
                                                        value="" style={{ fontSize: 20 }} required />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="profile_details_text">
                                                        <h4 className='form-text'> Confirm Password: <b class="important">*</b></h4>
                                                    </label>
                                                    <input type="password" name="confirm-password" class="form-control h-50px"
                                                        value="" style={{ fontSize: 20 }} required />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div class="border"></div>

                                        <br />
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <label class="profile_details_text">
                                                        <h4 className='form-text'>Bio for Your Profile</h4>
                                                    </label>
                                                    <div class="mb-3">
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <br />
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                                <div class="form-group">
                                                    <input type="submit" class="btn" value="Save Changes" style={{
                                                        backgroundColor: '#ff42a7', color: 'white', fontSize: 20
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>





                </main>


            </div>

        </div>


    );
}
export default Personal;