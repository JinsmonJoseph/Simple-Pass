import applogo from "../app-logo.png"
export default function TitleAndLogo({titleClass,logoClass}){
    return(
    <div>
    <p className={titleClass} >SimplePass</p>
    <img className={logoClass}  src={applogo} alt="App logo"/>
    </div>
    );
}
TitleAndLogo.defaultProps={
    titleClass:"app-title title-second",
    logoClass:"app-logo logo-second",
}
