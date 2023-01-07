import React from 'react';
import "./Personal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const background = {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 40,
    margin: 'auto'
}
const align = {
    textAlign: 'center',
    margin:'auto'
}


const Personal = () => {
    return (
        <div className="Personal" style={{ overflowY: 'scroll' }}>
            <h1 style={align}>Personal Details</h1>

            <section style={background}>
                <div class="profile-photo-info">
                    <div class="container">
                        <div class="container">
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
                        </div>
                        <br />
                        <br />
                        <div
                        >
                            <form action="" method="POST">
                                <h3 className='' style={align}>Profile Edit</h3>
                                <br />
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="profile_details_text text-lg-start">
                                                <h4 className='form-text'> First Name: <b class="important">*</b></h4>
                                            </label>
                                            <input type="text" name="first_name" class="form-control h-50px"
                                                value="" style={{ fontSize: 20 }} required />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <label class="profile_details_text form-text">
                                                <h4 className='form-text'> Last Name: <b class="important">*</b></h4>
                                            </label>
                                            <input type="text" name="last_name" class="form-control h-50px" value=""
                                                style={{ fontSize: 20 }} required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label class="profile_details_text">
                                                <h4 className='form-text'> Gender:<b class="important">*</b></h4>
                                            </label>
                                            <select name="gender" class="form-control h-50px form-text" value=""
                                                style={{ fontSize: 20 }} required>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br />
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
                                <br />
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <label class="profile_details_text">
                                                <h4 className='form-text'>Date Of Birth: <b class="important">*</b></h4>
                                            </label>
                                            <input type="date" name="birthday" class="form-control h-20 form-text"
                                                style={{ fontSize: 20 }} value="" required />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">

                                    <div class="location col-6">
                                        <h2 className='form-text'>Home</h2>
                                        <h6 className='form-text'>55 A, 1st Floor, Street No 2, Laxmi Nagar, Delhi 110092 </h6>
                                    </div>
                                    <div class=" col-6">
                                        <a href="/" style={{textDecoration:'none'}}>Edit your Address</a>
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
                                            <a href="/" style={{textDecoration:'none'}}>Change Your Password</a>
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
        </div>
    );
}

export default Personal;