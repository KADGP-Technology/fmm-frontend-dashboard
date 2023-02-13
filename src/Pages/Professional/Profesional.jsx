import React from 'react';
import "./Professional.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "../../Images/findmymualogo2.png"
import headimage from '../../../src/Images/professional.jpeg'




const Professional = () => {
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
                        <span class="header-text">Professional Details</span>
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
                            <a href="Membership">
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
                    <div class="main-title">
                        <p class="font-weight-bold">Professional Details</p>
                    </div>



                    <div className='heading-div' style={{ height: 250, width: 'auto', backgroundColor: 'rgba(128,128,128,0.3)', textAlign: 'center' }}>
                        <div className='image-head' id='image-head'>
                            <img className='starter-img' src={headimage} alt="" />
                        </div>
                    </div>
 
                    <div className='button-div' style={{ height: 120,  backgroundColor: 'pink',overflowX:'scroll',overflowY:'hidden' }}>
                        <div className='button-div-first-row'>
                            <button type="button" class="btn btn-light btn-lg color" style={{ marginTop: '0.4rem', fontSize: '20px' }}>Album Name</button>
                            <button type="button" class="btn btn-light" style={{ marginTop: '0.4rem', height: '70%' }}><h4>+</h4></button>
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>
                            
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>
                            
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>
                            
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>
                            
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>



                        </div>
                        <div className='button-div-first-row2'>
                            <button type="button" class="btn btn-light btn-lg color" style={{ marginTop: '0.3rem', fontSize: '20px' }}>Album Name</button>
                            <button type="button" class="btn btn-light" style={{ marginTop: '0.4rem', height: '70%' }}><h4>+</h4></button>
                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>

                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>


                            <button type="button" class="btn btn-light image-btn" style={{ marginTop: '0.4rem', height: '40px', width: '50px', padding: '0', borderRadius: 10 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ22b_OXqthKNUD0RojZdv8gwUsiWFBrSePQ&usqp=CAU" alt="" style={{ height: '100%', width: '100%', borderRadius: 10 }} /></button>
                        </div>
                    </div>





                    <section id="bridal-section" class="services mt-8 default">
                        <div class="services-head-container col-12">
                            <h2 class="my-5" style={{ color: '#ff42a7' }}>Services</h2>
                        </div>

                        <div class="specialization-container col-12 d-flex">
                            <h4>What's Your Specialization?</h4>&nbsp;<h6 class="text-muted mt-1">(Select any one
                                Specialization)</h6>
                        </div>
                        <br />

                        <div class="selection-btn col-12 row">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                <label class="btn btn-outline-primary my-3" for="btnradio1">Bridal Makeup</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-primary my-3" for="btnradio2">Party Makeup</label>

                            </div>
                            <br />
                            <br />
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked />
                                <label class="btn btn-outline-primary my-3" for="btnradio3">High Fashion Makeup</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                <label class="btn btn-outline-primary my-3" for="btnradio4">Cinematic Makeup</label>

                            </div>
                        </div>
                    </section>


                    <section id="service-offered" class="service-offered mx-auto col-12 row">
                        <h2 class="service-offered-heading text-center my-5">Services Offered</h2>
                        <br />
                        <div class="check-image">
                            <div class="col-6  my-5" style={{ color: '#ff42a7' }}>
                                <div class="form-check font-size-h4">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Bridal Makeup
                                    </label>
                                </div>
                                <br />
                                <div class="form-check font-size-h4">
                                    <input class=" form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Party Makeup
                                    </label>
                                </div>
                                <br />
                                <div class="form-check font-size-h4">
                                    <input class=" form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        High Fashion Makeup
                                    </label>
                                </div>
                                <br />
                                <div class="form-check font-size-h4">
                                    <input class=" form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Body & Face Art
                                    </label>
                                </div>
                                <br />
                                <div class="form-check font-size-h4">
                                    <input class=" form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked" >
                                        Cinematic Makeup
                                    </label>
                                </div>
                            </div>

                            <div class="col-6 pic mt-5">
                                <div class="justify-content-end">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ifC7wFx80I-j0ck-i0kZH7--C03S0_7vQ4HXfnTPuA9NFoV8vGCQrFfbckFylq-amCA&usqp=CAU"
                                        class="rounded float-end" alt="..." />
                                </div>
                            </div>
                        </div>


                        <div class="h6">
                            <p class="h6">Do you offer hair Styling?</p>
                        </div>


                        <div class="mb-3">
                            <div class="h6">Services Starting at(in ₹)<b class="important">*</b>
                            </div>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="example@gmail.com" requiredb />
                        </div>

                        <div class="h6 certification" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>Do you have any certifications?
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </div>

                        <div class="h6 mt-6" style={{ marginTop: '1rem' }}>Experience?<b class="important">*</b></div>
                        <br />
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div class="h6" style={{ marginTop: '2rem' }}>What Brands do you use?<b class="important">*</b></div>
                        <br />
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div class="h6 certification" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>Do you have studio?
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </div>

                        <div class="h6" style={{ marginTop: '1rem' }}>Do you travel to venue?<b class="important">*</b></div>
                        <br />
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div class="col-12" style={{ marginTop: '2rem' }}>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>




                    </section>



                </main>


            </div>

        </div>


    );
}
export default Professional;