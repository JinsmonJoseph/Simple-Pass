import TitleAndLogo from "../components/TitleAndLogo";

function Home({changePage}) {
   const titleClass="app-title";
   const logoClass="app-logo btn-only";
    return (
      <div className="home">
        <TitleAndLogo titleClass={titleClass} logoClass={logoClass}></TitleAndLogo>
        <button className="main-btn" onClick={()=> changePage("start-page")}>Create a new password</button>
        <button className="second-btn" onClick={()=> changePage("retrievepassword-page")}>Retrieve a password</button>
      </div>
    );
  }
  export default Home;