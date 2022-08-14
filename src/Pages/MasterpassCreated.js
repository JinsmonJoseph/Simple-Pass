import React, { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";


export default function MasterpassCreated({changePage}) {
    return (
      <div className="masterpasscreated-page">
        <TitleAndLogo ></TitleAndLogo>
        <h3>You have succesfully created your master password..</h3>
        <div className="text-content"id="instructions" > 
         <ul>
            <li>Make sure you keep your master password safe</li>
            <li>If it is compromised , all your passwords will be compromised</li>
            <li>Make sure you remember it.Otherwise your passwords will be lost</li>
         </ul>
        </div>
        <button className="main-btn" onClick={()=> changePage("passwordcreation-page")}>Continue to password creation</button>
        <button className="back-btn" onClick={()=> changePage("Home")}>Go home</button>
      </div>
    );
  }