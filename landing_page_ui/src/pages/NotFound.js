import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Opps....</h1>
        <p>That wasn't not supposed to happen.</p>
        <p>Please visti a different page.</p>
      </div>
    </div>
  );
};

export default NotFound;
