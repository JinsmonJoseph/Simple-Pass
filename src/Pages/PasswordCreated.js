import { useState } from "react";
import PassShow from "../components/Showpassword";
import TitleAndLogo from "../components/TitleAndLogo";
import { generatepass } from "../Functions/password";



export default function PasswordCreated({changePage,updateDataobj,dataObj}) {
    const [passVal,setpassVal]=useState(dataObj.passObj.password);
    return (
      <div className="password-created">
        <TitleAndLogo ></TitleAndLogo>
        <h2>Your password </h2>
        <PassShow pass={passVal}  />
        <button className="main-btn" onClick={()=> changePage("keyshow-page")}>Get the password key</button>
        <button className="second-btn" onClick={()=>{
            const tempObj=dataObj;
            const temppassObj=generatepass(tempObj);
            setpassVal(temppassObj.password);
            tempObj.passObj=temppassObj;
            updateDataobj(tempObj);
        } }>Try a different one</button>
        <button className="back-btn" onClick={()=> changePage("check-masterpassword")}>Start Over</button>
      </div>
    );
  }