const getrandom=(max)=>{
    const myArray = new Uint32Array(1);
    let r=""+crypto.getRandomValues(myArray);
    r=r[0]+r[1];
    while(r==0){
    const nArray = new Uint32Array(1);
    r=""+crypto.getRandomValues(nArray);
    r=r[0]+r[1];
    r=parseInt(r)
    }
    r=r%max;
    return(r)
}

export const generatepass=(data)=>{
    createKey(data);
    return(passObject);
};
export const decodePass=(data)=>{
    const passObj=generatepass(data)
    return(passObj.password);
}
const createKey=(data)=>{
    let passSize=data.passSize;
    const r1=getrandom(10);
    const r2=getrandom(10);
    const numberOfCaps=0;
    const numberOfSmalls=0;
    const numberOfDigits=0;
    const numberOfSpecials=0;
    while(r1===r2){
        r2=getrandom(10);
    }
    if(data.smalls==true){
        numberOfSmalls=getrandom((passSize-2))
    }
    if(data.digits==true){
        numberOfDigits=getrandom(passSize-(numberOfSmalls+1))
    }
    if(data.caps==true){
        numberOfCaps=getrandom(passSize-(numberOfSmalls+numberOfDigits))
    }
    if(data.specials==false){
        numberOfSmalls=numberOfSmalls+1
    }
    else{
        numberOfSpecials=s-(numberOfSmalls+numberOfDigits+numberOfCaps)
    }

    




}

