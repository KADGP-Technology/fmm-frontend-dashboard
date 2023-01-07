import React from 'react';
import "./Professional.css";


const Professional = () => {
    return (
        <div className="Professional" style={{ overflowY: 'scroll' }}>
            <h2 style={{ textAlign:'center' }}>Professional Data</h2>


            <section id="bridal-section" class="services default">
                <div class="services-head-container col-12">
                    <h2 class="heading">Services</h2>
                </div>
                <br />

                <div class="specialization-container col-12">
                    <h4 className='select-head'>What's Your Specialization?</h4><h6 class="select-heading">(Select any one
                        Specialization)</h6>
                </div>

                <div class="selection-btn col-12 mb-4 row">
                    <div class="btn-group-one">
                        <button type="button" class="button" id="bridal"
                            style={{ backgroundColor: '#ff42a7', color: 'white' }} >bridal Makeup</button>
                        <button type="button" class="button btn2" id="party">Party Makeup</button>
                    </div>
                    <br />
                    <br />
                    <div class="btn-group-two">
                        <button type="button" class="button btn3" id="high" >High Fashion Makeup</button>
                        <button type="button" class="button btn4" id="cinematic">Cinematic Makeup
                        </button>
                    </div>
                </div>
            </section>





            <section id="service-offered" class="service-offered col-8 mx-auto row">
                <h2 class="service-offered-heading">Services Offered</h2>
                <br />
                <div class="check-image">
                    <div class="check" style={{color: '#ff42a7'}}>
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
                                <label class="form-check-label" for="flexCheckChecked">
                                    Cinematic Makeup
                                </label>
                        </div>
                    </div>

                    <div class="pic">
                        <div class="justify-content-end">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ifC7wFx80I-j0ck-i0kZH7--C03S0_7vQ4HXfnTPuA9NFoV8vGCQrFfbckFylq-amCA&usqp=CAU"
                                class="rounded float-end" alt="..."/>
                        </div>
                    </div>
                </div>



                <div class="h6">
                    <p class="styling">Do you offer hair Styling?</p>
                </div>
                <div class="h6">Services Starting at(in ₹)<b class="important">*</b>
                    <br />
                    <br />
                    <div class="mb-3">
                    
                        <input type="email" class="form-control styling-input" id="exampleFormControlInput1"
                            placeholder="example@gmail.com" required />
                    </div>



                    <div class="h6 certification">Do you have any certifications?<b class="important">*</b>
                        <div class="check-checkbox" style={{marginLeft: 20}}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </div>
                </div>


                <div class="experience">Experience?<b class="important">*</b></div>
                <div class="input-group w-50">
                    <br />
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

<br />
                <div class="h6 mt-8">What Brands do you use?<b class="important">*</b></div>
      
                <div class="input-group w-50">
                    <br />
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


                <div class="h6 certification mt-6">Do you have studio?<b class="important">*</b>
                    <div class="form-check  mx-20">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault"></label>
                    </div>
                </div>

<br />

                <div class="h6 mt-8">Do you travel to venue?<b class="important">*</b></div>
                <br />
                <div class="input-group w-50">
                    <br />
                    <select class="custom-select travel" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </section>



        </div>
    );
}

export default Professional;