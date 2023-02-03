import React from "react";
// import Cards from "../Cards/Cards";
import CustomerReview from "../CustomerReview/CustomerReview"
import "./MainDash.css";



const MainDash = () => {
  return (
    <div className="MainDash" style={{ overflowY: 'scroll' }}>
      <div className="page-title-container"><h1 className="">Dashboard</h1></div>
      <div className='heading-div' style={{ height: 100, width: '100%', backgroundColor: 'black' }}>
        <h3 className='heading-text' style={{ color: 'white', padding: 35 }}>Dashboard</h3>
    
      </div>

      {/* <Cards /> */}
      <div className="card-group-container">
        <div class="card-group">


          <div className="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '15px', marginLeft: '20px' }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                  class="img-fluid rounded-center h-50 my-4" alt="..."
                  style={{ margin: 'auto', display: 'inherit' }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text"> Total Bookings</p>
                  <h1 class="card-title">4585</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '15px', marginLeft: '20px' }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsSvSmQn9HT7hYXmRjzjhYQuVmcISV95Nfw&usqp=CAU"
                  class="img-fluid rounded-center h-50 my-4" alt="..."
                  style={{ margin: 'auto', display: 'inherit' }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">Profile Views</p>
                  <h1 class="card-title">4585</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '15px', marginLeft: '20px' }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAlYW7ltp0fQOYdSdiLZpDH05FSGC2f-HsA&usqp=CAU"
                  class="img-fluid rounded-center h-50 my-4" alt="..."
                  style={{ margin: 'auto', display: 'inherit' }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">Days Left</p>
                  <h1 class="card-title">4585</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 card-data" style={{ maxWidth: '540px', borderRadius: '15px', marginLeft: '20px' }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkT5b3D1r0swXu0B32TtTIv2ex8bjzBNQH_w&usqp=CAU"
                  class="img-fluid my-4 h-50" alt="..."
                  style={{ margin: 'auto', display: 'inherit' }} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">No.of Favourites</p>
                  <h1 class="card-title">4585</h1>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
      <CustomerReview />
    </div>
  );
};

export default MainDash;
