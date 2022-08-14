export const savetoLocalStorage=(keyObj)=>{
    let keyName=keyObj.id;
    if(checkFromLocalStorage(keyName)) {
        alert("Name already exists..!! Try a different one");
    }
    else{
        let keys=JSON.parse(localStorage.getItem("Keys"));
        if(keys==null) keys=[];
        keys.push(keyObj);
        localStorage.setItem("Keys", JSON.stringify(keys));
    } 

}
export const checkFromLocalStorage=(keyName)=>{
    let keys=JSON.parse(localStorage.getItem("Keys"));
    if(keys!=null){
        let names = keys.map((key)=>key.id);
        if(names.includes(keyName.toLowerCase())){
            return(true);
        }
        else{
            return(false);
        }
    }
    else return(false)
}
export const getFromLocalStorage=(keyName)=>{
    let keys=JSON.parse(localStorage.getItem("Keys"));
    console.log(keys)
    /*const keyObj = keys.filter((key)=>(key.id==keyName));
    if(keyObj=0) {
        console.log(keyObj);
    }
    else {
        keyObj=keyObj[0];
        return(keyObj.name);
    }*/
}