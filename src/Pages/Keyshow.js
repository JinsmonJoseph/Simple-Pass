import applogo from "../app-logo.png";
import {GiSaveArrow} from "react-icons/gi"; 
import { useState } from "react";
import {handlefinish} from "../Functions/handleFinish";
import { savetoLocalStorage } from "../Functions/localStorage";
import TitleAndLogo from "../components/TitleAndLogo";
export default function Keyshow({changePage,keyval}) {
    const titleClass="app-title title-third";
    const logoClass="app-logo logo-third";
    const message="MAKE SURE YOU WROTE DOWN YOUR KEY.IF YOU LOSE YOUR KEY , YOU WILL LOSE THAT PASSWORD..!!";
    const currentPage="keyshow-page";
    const keyprop=keyval;
    return (
      <div className="showing-key">
        <TitleAndLogo titleClass={titleClass} logoClass={logoClass}></TitleAndLogo>
        <h4 >Your key : {keyprop}</h4>
        <p className="key-instructions" > 
           <ul>
           <li>Write down your key somewhere you always have access</li>
           <li>It is used along with your master password for password retrieval</li>
           <li>It is encrypted and cannot retrieve the the passwords by itself</li>
           </ul>
        </p>
        <h5>You have an option to save your key to local storage</h5>
        <KeySave keyv={keyprop}/>
        <button className="main-btn" onClick={()=>changePage(handlefinish(message,currentPage))}>Finish</button>
        <button className="back-btn" onClick={()=> changePage("passwordcreated-page")}>Go back</button>
      </div>
    );
  }
  function KeySave({keyv}){
    const [name,setName]=useState("No Name");
    let keyObj={id:name,value:keyv};
    return(
        <div className="passorkey" >
            <p className="small-label">Enter a name to identify the key/password in local storage</p>
            <div className="passorkey-display">
            <input type="text" className="user-input" placeholder="Eg: Facebook,Gmail account1.." onInput={(e)=>{setName(e.target.value)}}/>
            <GiSaveArrow className="copyorsave-icon" onClick={()=> savetoLocalStorage(keyObj)}/>
            </div>
        </div>

    );
  }