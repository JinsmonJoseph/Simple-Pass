import TitleAndLogo from "../components/TitleAndLogo";
function Startpage({changePage}) {
    const titleClass="app-title-second";
    const logoClass="app-logo-second";
    return (
      <div className="start-page">
        <TitleAndLogo ></TitleAndLogo>
        <p className="text-content"id="description">This is for those who can remember a large master password and does not like to store  
        their password anywhere.SimplePass uses a master password for protecting all your passwords and a key for retrieving passwords without saving them anywhere.</p>
        <button className="main-btn" onClick={()=> changePage("check-masterpassword")}>Start</button>
      </div>
    );
  }
  
  export default Startpage;