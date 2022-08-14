import PasswordInput from "../components/Passwordinput";
import React, { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";
import { checkFromLocalStorage,getFromLocalStorage } from "../Functions/localStorage";
import { decodePass } from "../Functions/password";

export default function Retrievepass({changePage,getretrievedpass}) {
    const [password,setpassword]=useState("");
    const getpass = (pass)=>setpassword(pass);
    const [key,setkey]=useState("");
    const getkey = (key)=>setkey(key);
    const [selected,setSelected]=useState(0);
    const getselected=(selection)=>setSelected(selection);
    const handlekeyvalue=(key,password)=>{
        const data={};
        if(key==="" || password===""){
            alert("Fields cannot be empty");
        }
        else if(selected==2){
            console.log("auto-entry");
            data.key=key;
            data.password=password;
            const val=decodePass(data)
            console.log(val);
            getretrievedpass(val);
            changePage("password-retrieved");
        }
        else{
            if(selected==1 && checkFromLocalStorage(key)){
                console.log("manual-entry");
                data.password=password;
                data.key=getFromLocalStorage(key);
                if(data.key===""){
                    alert("Key not found in local storage!! check the name again");
                }
                else{
                    getretrievedpass(decodePass(data));
                    changePage("password-retrieved");
                }
            }
        }
    }
    
    return (
      <div className="retrievepassword-page">
        <TitleAndLogo ></TitleAndLogo>
        <PasswordInput setval={getpass} text="Enter"/>
        <KeyComponent setval={getkey} setselection={getselected}selection={selected}/>
        <button className="main-btn" id="retrievepass-page-main-btn" onClick={()=>handlekeyvalue(key,password)}>Submit</button>
        <button className="back-btn" onClick={()=> changePage("home")}>Go Home</button>
    </div>)
}
function KeyComponent({setval,setselection,selection}){
    const info1={
        labeltext:"Enter the name of the key/password",
        buttontext:"Enter key manually",
        placeholder:"Eg: Facebook,Gmail account1.."
    };
    const info2={
        labeltext:"Enter your key",
        buttontext:"Get key from local storage",
        placeholder:"Type here"
    };

    if(selection==0){
        return(
            <div className="key-component">
            <button className="special-button" onClick={()=>setselection(1)}>{info2.buttontext}</button>
            <button className="special-button" onClick={()=>setselection(2)}>{info1.buttontext}</button>
            </div>
        )
    }
    else if(selection==1){
        return(
            <GetKey setval={setval} 
            info={info1}
            selection={selection}
            setselection={setselection}/>
        );
    }
    else{
        return(
            <GetKey setval={setval} 
            info={info2}
            selection={selection}
            setselection={setselection}/>
        );
    }
}
function GetKey({setval,info,selection,setselection}){
    return(
        <div className="key-component">
        <p className="small-label">{info.labeltext}</p>
        <input type="text" className="user-input" id="user-input-getkey" placeholder={info.placeholder} onInput={(e)=>{setval(e.target.value)}}/>
        <button className="special-small-button"  onClick={()=>selection==1?setselection(2):setselection(1)}>{info.buttontext}</button>
        </div>
    );
}