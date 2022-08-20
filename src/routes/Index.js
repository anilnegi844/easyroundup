import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/dashboard";
import AddPatient from "../Pages/Addpatient";
import User from "../Pages/User";
// import AddPaitent from "../Components/Modals/AddPaitent";
// import Contact from "../Pages/Contact";

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/dashboard" name="dashboard" element={<Dashboard/>} />
          <Route exact path="/add-patient" name="add-paitent" element={<AddPatient/>} />
          <Route exact path="/user" name="user" element={<User/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Index;
