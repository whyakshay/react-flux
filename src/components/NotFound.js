import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
  return(
    <>
      <h2>Page Not Found</h2> 
      <Link to="/">Return to Home Page</Link>
    </>
  )
}

export default NotFound;
