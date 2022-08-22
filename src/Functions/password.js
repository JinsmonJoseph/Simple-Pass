//function to generate a random number between 0 and max excluding both
const getrandom = (max) => {
    let myArray = new Uint32Array(1);
    let r = "" + crypto.getRandomValues(myArray);
    r = r[0] + r[1];
    r = parseInt(r)
    while (r == 0) {
        let nArray = new Uint32Array(1);
        r = "" + crypto.getRandomValues(nArray);
        r = r[0] + r[1];
        r = parseInt(r)
    }
    r = r % max;
    return (r)
}

export const generatepass=(data)=>{
    const KeyVar=createKey(data);
    const PassWord=generator(KeyVar,data);
    return(passObject);
};
export const decodePass=(data)=>{
    const passObj=generatepass(data)
    return(passObj.password);
}
//function to get the positional values as an array
const getPosArray=(posArr1,posArr2,posArr3,currentItemNum)=>{
    let currentPosArr=[];
    let posFilled=0;
    let posVal;
    while(posFilled<currentItemNum){
        posVal=getrandom(totalPos+1);
        occupied=posArr1.includes(posVal) || posArr2.includes(posVal) || posArr3.includes(posVal) || currentPosArr.includes(posVal);
        if(occupied==false){
            currentPosArr.push(posVal-1);
            posFilled=posFilled+1;
        }
    }
    return currentPosArr;
}
//function to store positional values in totalsized binary strings
const getPosBinary=(posArr,totalPos)=>{
    let posBin=""
    for(let i=0;i<totalPos;i++){
        if(posArr.includes(i)) posBin=posBin+"1"
        else posBin=posBin+"0";
    }
    return posBin;
    
}
//function to convert input binary string to 24 digit standardsize
const convertToStdSize = (binstr) => {
    let m = 0
    let add = ""
    while (m < 24 - binstr.length) {
        add = add + "0"
        m = m + 1
    }
    binstr = add + binstr
    return(binstr)
}
//Function to split 24 bit binary string to a 4 element array of 6-bit binary strings
const splitString = (binStr) => {
    let index = 0;
    let list = [];
    let six = 0;
    while (head < binStr.length) {
        six = 0;
        temp = "";
        while (six < 6) {
            temp = temp + binStr[head];
            head = head + 1;
            six = six + 1;
        }
        list.push(temp);
    }
    return(list);
}
//function to convert 6 bit binary string to base64 Value
const binToBase64 = (x) => {
    let num = 0
    let m = x.length - 1
    let head = m
    while (head > -1) {
        if (x[head] == "1") {
            num = num + Math.pow(2, m - head)
            head = head - 1
        }
        else head = head - 1
    }
    //Decimal value to base64 value
    let val = 0
    const cap = 64
    const sm = 96
    if (num < 10) {
        val = num
    }
    else if (num < 36) {
        num = num - 9
        num = num + cap
        val = String.fromCharCode(num)
    }
    else if (num < 62) {
        num = num - 35
        num = num + sm
        val = String.fromCharCode(num)
    }
    else if (num == 62) {
        val = "@"
    }
    else {
        val = "#"
    }
    return (val)
}
//function to generate an 18 bit key 
const createKey = (data) => {
    let passSize = data.passSize;
    let r1 = getrandom(10);
    let r2 = getrandom(10);
    let numberOfCaps = 0;
    let numberOfSmalls = 0;
    let numberOfDigits = 0;
    let numberOfSpecials = 0;
    let smallPos = [];
    let digitsPos = [];
    let capsPos = [];
    let specialPos = [];
    while (r1 === r2) {
        r2 = getrandom(10);
    }
    if (data.smalls == true) {
        numberOfSmalls = getrandom((passSize - 2))
    }
    if (data.digits == true) {
        numberOfDigits = getrandom(passSize - (numberOfSmalls + 1))
    }
    if (data.caps == true) {
        numberOfCaps = getrandom(passSize - (numberOfSmalls + numberOfDigits))
    }
    if (data.specials == false) {
        numberOfSmalls = numberOfSmalls + 1
    }
    else {
        numberOfSpecials = s - (numberOfSmalls + numberOfDigits + numberOfCaps)
    }

    //these three arrays holds the positions starting from 0 which have that particular type
    smallPos = getPosArray(digitsPos, capsPos, specialPos, numberOfSmalls);
    digitsPos = getPosArray(digitsPos, capsPos, specialPos, numberOfDigits);
    capsPos = getPosArray(digitsPos, capsPos, specialPos, numberOfCaps);

    //checks the remaining positions and assigns it to the specials array
    for (let i = 0; i < passSize; i++) {
        let occup = smallPos.includes(i) || capsPos.includes(i) || digitsPos.includes(i) || specialPos.includes(i)
        if (occup == false) {
            specialPos.push(i);
        }
    }
    let smallPosBin = getPosBinary(smallPos, passSize);
    smallPosBin = convertToStdSize(smallPosBin);
    let capsPosBin = getPosBinary(capsPos, passSize);
    capsPosBin = convertToStdSize(capsPosBin);
    let digitsPosBin = getPosBinary(digitsPos, passSize);
    digitsPosBin = convertToStdSize(digitsPosBin);
    let specialsPosBin = getPosBinary(specialsPos, passSize);
    specialsPosBin = convertToStdSize(specialsPosBin);

    let smallPosBinArr = splitString(smallPosBin);
    let capsPosBinArr = splitString(capsPosBin);
    let digitsPosBinArr = splitString(digitsPosBin);
    let specialsPosBinArr = splitString(specialsPosBin);
    let temp1 = ""
    let temp2 = ""
    let temp3 = ""
    let temp4 = ""
    for (i = 0; i < smallPosBinArr.length; i++) {
        temp1 = temp1 + binToBase64(smallPosBinArr[i]);
        temp2 = temp2 + binToBase64(capsPosBinArr[i]);
        temp3 = temp3 + binToBase64(digitsPosBinArr[i]);
        temp4 = temp4 + binToBase64(specialsPosBinArr[i]);
    }
    const key = r1 + r2 + temp1 + temp2 + temp3 + temp4;
    return (key);
}


