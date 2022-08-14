import { useState } from "react";
import PassShow from "../components/Showpassword";
import TitleAndLogo from "../components/TitleAndLogo";
import {handlefinish }from "../Functions/handleFinish";
export default function ShowRetrievedPassword({changePage,passgot}) {
    const passVal=passgot;
    const message="DO YOU WANT TO FINISH YOUR SESSION ??";
    const currentPage="password-retrieved";
    return (
      <div className="password-retrieved">
        <TitleAndLogo ></TitleAndLogo>
        <h2>Your password </h2>
        <PassShow pass={passVal}  />
        <button className="main-btn" onClick={()=>changePage(handlefinish(message,currentPage))}>Finish</button>
        <button className="back-btn" onClick={()=> changePage("retrievepassword-page")}>Go back</button>
      </div>
    );
  }