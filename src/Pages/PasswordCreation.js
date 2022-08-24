import React, { useState } from "react";
import TitleAndLogo from "../components/TitleAndLogo";
import PasswordInput from "../components/Passwordinput";
import { handlepasswordfield } from "../Functions/handleform";
import { generatepass } from "../Functions/password";

export default function PasswordCreation({changePage,updateDataobj,dataObj}) {
    const titleClass="app-title title-third";
    const logoClass="app-logo logo-third";
    const [password,setpassword]=useState("");
    const getpass = (pass)=>setpassword(pass);
    const [confirmpassword,setconfirmpassword]=useState("");
    const getconfirmpass=(pass)=>setconfirmpassword(pass);
    const [submitted,Setsubmitted]=useState(false);
    const [sizeValue,SetsizeValue]=useState(12);
    const changeSize=(sizeval)=>SetsizeValue(sizeval);
    const [includecaps,Setincludecaps]=useState(true);
    const checkincludecaps=(capsval)=>Setincludecaps(capsval);
    const [includesmalls,Setincludesmalls]=useState(true);
    const checkincludesmalls=(smallsval)=>Setincludesmalls(smallsval);
    const [includedigits,Setincludedigits]=useState(true);
    const checkincludedigits=(digitsval)=>Setincludedigits(digitsval);
    const [includespecials,Setincludespecials]=useState(true);
    const checkincludespecials=(specialsval)=>Setincludespecials(specialsval);
    const passData={
        mpass:password,
        con:confirmpassword,
        passSize:sizeValue,
        caps:includecaps,
        smalls:includesmalls,
        digits:includedigits,
        specials:includespecials
    }

    const handleSpecifications=(p)=>{
        if(p.passSize==0)alert("Password size cannot be zero !!");
        else if(p.smalls==false && p.digits==false){
            if(p.caps==false && p.specials==false){
                alert("Wrong input specifications !!!");
            }
            else Setsubmitted(true);
        }
        else Setsubmitted(true);
    }
 
    if(submitted==false){
    return (
      <div className="passwordcreation-page">
        <TitleAndLogo titleClass={titleClass} logoClass={logoClass}></TitleAndLogo>
        <SizeInput size={sizeValue} sizeChange={changeSize}></SizeInput>
        <CheckboxInput labeltext="Capital letters(ABC..Z)" val={includecaps} valueChange={checkincludecaps}></CheckboxInput>
        <CheckboxInput labeltext="Small letters(abc..z)" val={includesmalls} valueChange={checkincludesmalls}></CheckboxInput>
        <CheckboxInput labeltext="Digits(012..9)" val={includedigits} valueChange={checkincludedigits}></CheckboxInput>
        <CheckboxInput labeltext="Special characters(!@#..+))" val={includespecials} valueChange={checkincludespecials}></CheckboxInput>
        <button className="main-btn" onClick={()=>{
            handleSpecifications(passData)}}>Next</button>
        <button className="back-btn" onClick={()=> changePage("Home")}>Go home</button>
      </div>
    );
    }
    else{
    return (
        <div className="passwordcreation-page">
            <TitleAndLogo titleClass={titleClass} logoClass={logoClass}></TitleAndLogo>
            <PasswordInput setval={getpass} text="Enter"/>
            <PasswordInput setval={getconfirmpass} text="Re-enter"/>
            <button className="main-btn" onClick={()=>{
                if(handlepasswordfield(passData)){
                    console.log(passData);
                    const passobj=generatepass(passData);
                    passData.mpass=password;
                    passData.passObj=passobj;
                    updateDataobj(passData);
                    changePage("passwordcreated-page");
                }
            }}>Confirm</button>
            <button className="back-btn" onClick={()=>{ 
                Setincludecaps(true);
                Setincludedigits(true);
                Setincludesmalls(true);
                Setincludespecials(true);
                Setsubmitted(false)
                }}>Go back</button>
        </div>
        );
    }
  }

function SizeInput({size,sizeChange}){
    return(
        <div className="input">
            <p className="label">Password length </p>
            <div className="size-box">
                <div className="size-icon" onClick={()=>{sizeChange(size-1)}}>-</div>
                <span className="size-value">{size}</span>
                <div className="size-icon" onClick={()=>{sizeChange(size+1)}}>+</div>
            </div>
        </div>
    )
}
function CheckboxInput({labeltext,val,valueChange}){
    return(
        <div className="input">
            <p className="label">{labeltext}</p>
            <input type="checkbox" className="check-box"onChange={()=>valueChange(!val)} defaultChecked/>
        </div>
    )
}
  