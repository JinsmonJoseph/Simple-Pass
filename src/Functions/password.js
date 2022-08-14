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
    const numberOfCaps=1;
    const numberOfSmalls=0;
    const numberOfDigits=1;
    const numberOfSpecials=1;
    while(r1===r2){
        r2=getrandom(10);
    }
    if(data.smalls==false){
        numberOfSmalls=0
    }
    else{
        numberOfSmalls=getrandom(1,(passSize-2))
    }
    if(data.digits==false){
        numberOfDigits=0
    }
    else{
        numberOfDigits=getrandom(1,passSize-(numberOfSmalls+1))
    }
    if(data.caps==false){
        numberOfCaps=0
    }
    else{
        numberOfCaps=getrandom(1,passSize-(numberOfSmalls+numberOfDigits))
    }
    if(data.specials==false){
        numberOfSmalls=numberOfSmalls+1
    }
    else{
        numberOfSpecials=s-(numberOfSmalls+numberOfDigits+numberOfCaps)
    }

    




}

