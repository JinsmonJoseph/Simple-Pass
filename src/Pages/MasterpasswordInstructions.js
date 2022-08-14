import TitleAndLogo from "../components/TitleAndLogo";


export default function MasterpasswordInstructions({changePage}) {
    return (
      <div className="masterpass-page">
        <TitleAndLogo ></TitleAndLogo>
        <h4>Your master password</h4>
        <div className="text-content"id="instructions" > 
           <ul>
           <li>It can contain upper and lower-case letters,numbers,special characters and white spaces and length should be more than 24</li>
            <li>But make sure it is something that nobody else can predict</li>
            <li>Use very few repeating characters</li>
            <li>If you forget you Master password, you lose all your passwords</li>
            </ul></div>
        <button className="main-btn" onClick={()=> changePage("masterpasscreate-page")}>I got one</button>
        <button className="back-btn" onClick={()=> changePage("check-masterpassword")}>Go back</button>
      </div>
    );
  }
  
  