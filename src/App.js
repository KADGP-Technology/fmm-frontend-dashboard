import './App.css'
import Dashboard from './Maindash'
import Leads from '../src/Pages/Leads/Leads'
import Bookings from '../src/Pages/Bookings/Bookings'
import Personal from '../src/Pages/Personal/Personal'
import Inbox from './Pages/Inbox/Inbox'
import Professional from './Pages/Professional/Profesional';
import Support from './Pages/Support/Support';
import Tools from './Pages/Tool/Tool';
import Membership from './Pages/Membership/Membership';
import React  from "react";




import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { setUpAxios } from './server'
import Header from './components/Header/Header'
import { AuthProvider } from './context/Context'



function App() {
  React.useEffect(() => {
    setUpAxios();
});


  
  return (
   <>
   <AuthProvider>
   <Router>
    <div className="App">
   <Header/>
    <Routes>
      
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Professional" element={<Professional />}></Route>
        <Route path="/Inbox" element={<Inbox />}></Route>
        <Route path="/Personal" element={<Personal />}></Route>
        <Route path="/Tools" element={<Tools />}></Route>
        <Route path="/Membership" element={<Membership />}></Route>
        <Route path="/Leads" element={<Leads />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/Support" element={<Support />}></Route>
        </Routes>
        

    </div>
    </ Router>
   </AuthProvider>
   </>
  );
  }



  // <Route element={<Navbarroutes hideHeaderPaths={["/userlogin", "/usersignup", '/artistlogin']} />}>


export default App;

