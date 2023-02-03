import './App.css'
import Sidebar from './components/Sidebar';

import React from "react";


import Professional from './pages/Professional/Professional';
import Inbox from './pages/Inbox/Inbox'
import Personal from './pages/Personaldetails/Personal';
import Tool from './pages/Tool/Tool';
import Membership from './pages/Membership/Membership'
import Leads from "./pages/Leads/Leads"
import Booking from './pages/Bookings/Booking';
import MainDash from './components/MainDash/MainDash';
import Support from './pages/Support/Support'

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        
        
        <Routes>
        <Route path="/" element={<MainDash />}></Route>
        <Route path="/Professional" element={<Professional />}></Route>
        <Route path="/Inbox" element={<Inbox />}></Route>
        <Route path="/Personal" element={<Personal />}></Route>
        <Route path="/Tool" element={<Tool />}></Route>
        <Route path="/Membership" element={<Membership />}></Route>
        <Route path="/Leads" element={<Leads />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/Support" element={<Support />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
  }



  // <Route element={<Navbarroutes hideHeaderPaths={["/userlogin", "/usersignup", '/artistlogin']} />}>


export default App;

