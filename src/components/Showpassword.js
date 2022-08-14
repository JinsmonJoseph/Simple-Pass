import CopyToClipboard from "react-copy-to-clipboard";
import { BiShow,BiHide,BiCopy} from "react-icons/bi";
import { useState } from "react";
export default function PassShow({pass}){
    const [Showpass,setShowpass]= useState(false)
    const [text,setText]=useState("")
    return(
        <div className="passorkey">
            <div className="passorkey-display">
            <p className="passorkey-value">{Showpass==true?pass:"**************************"}</p>
            <CopyToClipboard text={text}>
            <BiCopy className="copyorsave-icon" onClick={()=> setText(pass)}/>
            </CopyToClipboard>
            </div>
            {Showpass==true?<BiHide className="shownhide-icon" onClick={()=>setShowpass(false)}/>:<BiShow className="shownhide-icon" onClick={()=>setShowpass(true)} />}
        </div>

    );
  }