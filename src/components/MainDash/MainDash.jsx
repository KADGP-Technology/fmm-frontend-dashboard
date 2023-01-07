import React from "react";
import Cards from "../Cards/Cards";
import CustomerReview from "../CustomerReview/CustomerReview"
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash" style={{overflowY:'scroll'}}>
      <h1>Dashboard</h1>
      <Cards />
      <CustomerReview/>
    </div>
  );
};

export default MainDash;
