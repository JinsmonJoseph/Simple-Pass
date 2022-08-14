export const handlepasswordfield=(Data)=>{
    if(Data.pass.length===0 || Data.con.length===0){
        alert("Cannot be empty..Enter the Master password!!")
    }
    else if(Data.pass.length<16){
        alert("Password you entered is too small..Try again!!")
    }
    else if(Data.pass!==Data.con){
        alert("Password doesn't match..Please check again!!!")
    }
    else return(true);
}