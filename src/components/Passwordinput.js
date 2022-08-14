import {BiShow , BiHide } from "react-icons/bi";
import { useState } from "react";

export default function PasswordInput({setval,text}){
    const [Showpass,setShowpass]= useState(false)
    return(
        <div className="password-input">
            <p className="label">{text} your master password</p>
            <div className="input-field">
            <input className="user-input" type={Showpass==true?"text":"password"} placeholder="type here" onInput={(e)=>{setval(e.target.value)}}/>
            {Showpass==true?<BiHide className="shownhide-icon" onClick={()=>setShowpass(false)}/>:<BiShow className="shownhide-icon" onClick={()=>setShowpass(true)} />}
            </div>
        </div>

    );
  }