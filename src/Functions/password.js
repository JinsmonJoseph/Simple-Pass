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
const getPos=(posArr1,posArr2,posArr3,totalPos)=>{
    let currentPosArr=[];
    let posFilled=0;
    let posVal;
    while(posFilled<totalPos){
        posVal=getrandom(totalPos+1);
        occupied=posArr1.includes(posVal) || posArr2.includes(posVal) || posArr3.includes(posVal) || currentPosArr.includes(posVal);
        if(occupied==false){
            currentPosArr.push(posVal-1);
            posFilled=posFilled+1;
        }
    }
    return currentPosArr;
}
const getPosBinary=(posArr,totalPos)=>{
    let posBin=0
    for(let i=0;i<totalPos;i++){
        if(posArr.includes(i)) posBin=posBin*10+1;
        else posBin=posBin*10;
    }
    return possBin;
    
}
const createKey=(data)=>{
    let passSize=data.passSize;
    const r1=getrandom(10);
    const r2=getrandom(10);
    let numberOfCaps=0;
    let numberOfSmalls=0;
    let numberOfDigits=0;
    let numberOfSpecials=0;
    let smallPos=[];
    let digitsPos=[];
    let capsPos=[];
    let specialPos=[];
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
    smallPos=getPos(digitsPos,capsPos,specialPos,passSize);
    digitsPos=getPos(digitsPos,capsPos,specialPos,passSize);
    capsPos=getPos(digitsPos,capsPos,specialPos,passSize);
    for(i=0;i<passSize;i++){
        let occup=smallPos.includes(i) || capsPos.includes(i) || digitsPos.includes(i) || specialPos.includes(i)
        if(occup==false){
            specialPos.push(i);
        }
    }
    const smallPosBin=getPosBinary(smallPos,passSize);
    const capsPosBin=getPosBinary(capsPos,passSize);
    const digitsPosBin=getPosBinary(digitsPos,passSize);
    const specialsPosBin=getPosBinary(specialsPos,passSize);
    



    




}

