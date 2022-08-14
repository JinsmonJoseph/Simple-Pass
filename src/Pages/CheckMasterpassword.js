import React, { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";

function CheckMasterpassword({changePage}) {
   const titleClass="app-title ";
   const logoClass="app-logo btn-only";
    return (
      <div className="check-masterpassword">
        <TitleAndLogo titleClass={titleClass} logoClass={logoClass}></TitleAndLogo>
        <button className="main-btn" onClick={()=> changePage("masterpass-page")}>Create a new Master Password</button>
        <button className="second-btn" onClick={()=> changePage("passwordcreation-page")}>I have a Master Password</button>
        <button className="back-btn" onClick={()=> changePage("home")}>Go to Home</button>
      </div>
    );
  }
  export default CheckMasterpassword;