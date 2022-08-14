import React, { useState } from "react";
import CheckMasterpassword from "./Pages/CheckMasterpassword";
import Home from './Pages/Home';
import Startpage from './Pages/Start';
import MasterpasswordInstructions from "./Pages/MasterpasswordInstructions";
import Masterpasscreation from "./Pages/Masterpasscreation";
import MasterpassCreated from "./Pages/MasterpassCreated";
import PasswordCreation from "./Pages/PasswordCreation";
import PasswordCreated from "./Pages/PasswordCreated";
import Keyshow from "./Pages/Keyshow";
import Retrievepass from "./Pages/Retrievepass";
import ShowRetrievedPassword from "./Pages/ShowRetrievedPassword";



function Card() {
    const [pageName,setpageName]=useState("home");
    const pageChange=(pageName)=>setpageName(pageName);
    const [passDataobj,setpassDataobj]=useState({});
    const updateDataobj=(dobj)=>setpassDataobj(dobj);
    const [retrievedpass,setretrievedpass]=useState("");
    const updateretrievedpass=(retpass)=>setretrievedpass(retpass);
    switch (pageName) {
      case "start-page": {
        return (
          <div className="Card">
            <Startpage changePage={pageChange}></Startpage>
          </div>
        );
      }
      case "home":{
        return (
          <div className="Card">
            <Home changePage={pageChange}></Home>
          </div>
        );
      }
      case "check-masterpassword":{
        return (
          <div className="Card">
            <CheckMasterpassword changePage={pageChange}></CheckMasterpassword>
          </div>
        );
      }
      case "masterpass-page":{
        return (
          <div className="Card">
            <MasterpasswordInstructions changePage={pageChange}></MasterpasswordInstructions>
          </div>
        );
      }
      case "masterpasscreate-page":{
        return (
          <div className="Card">
            <Masterpasscreation changePage={pageChange}></Masterpasscreation>
          </div>
        );
      }
      case "masterpasscreated-page":{
        return (
          <div className="Card">
            <MasterpassCreated changePage={pageChange}></MasterpassCreated>
          </div>
        );
      }
      case "passwordcreation-page":{
        return (
          <div className="Card">
            <PasswordCreation changePage={pageChange} updateDataobj={updateDataobj} dataObj={passDataobj}></PasswordCreation>
          </div>
        );
      }
      case "passwordcreated-page":{
        return (
          <div className="Card">
            <PasswordCreated changePage={pageChange} updateDataobj={updateDataobj} dataObj={passDataobj}></PasswordCreated>
          </div>
        );
      }
      case "keyshow-page":{
        return (
          <div className="Card">
            <Keyshow changePage={pageChange} keyval={passDataobj.passObj.key}></Keyshow>
          </div>
        );
      }
      case "retrievepassword-page":{
        return (
          <div className="Card">
            <Retrievepass changePage={pageChange} getretrievedpass={updateretrievedpass}></Retrievepass>
          </div>
        );
      }
      case "password-retrieved":{
        return (
          <div className="Card">
            <ShowRetrievedPassword changePage={pageChange} passgot={retrievedpass}></ShowRetrievedPassword>
          </div>
        );
      }
      
      default:{
        return (
          <div className="Card">
            <Home changePage={pageChange}></Home>
          </div>
        );
      }
    }
}




  export default Card;