import React, { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";
import PasswordInput from "../components/Passwordinput";
import { handlepasswordfield } from "../Functions/handleform";

export default function Masterpasscreation({changePage}) {
    const [password,setpassword]=useState("");
    const getpass = (pass)=>setpassword(pass);
    const [confirmpassword,setconfirmpassword]=useState("");
    const getconfirmpass=(pass)=>setconfirmpassword(pass);
    const Data={pass:password,con:confirmpassword};

    return (
      <div className="masterpasscreate-page">
        <TitleAndLogo ></TitleAndLogo>
        <PasswordInput setval={getpass} text="Enter"/>
        <PasswordInput setval={getconfirmpass} text="Re-enter"/>
        <button className="main-btn" onClick={()=>{
            if(handlepasswordfield(Data)){
            changePage("masterpasscreated-page");
            }
            }}>Confirm</button>
        <button className="back-btn" onClick={()=> changePage("masterpass-page")}>Go back</button>
      </div>
    );
  }


