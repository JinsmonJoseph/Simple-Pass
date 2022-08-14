export const handlefinish=(message,currentPage)=>{
    if(window.confirm(message)){
        console.log(currentPage)
        return("home");
    }
    else return(currentPage);
}