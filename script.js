
const alphaArray =[];
alphaArray[0]= "NaN";
alphaArray[1]= "a";
alphaArray[2]= "b";
alphaArray[3]= "c";
alphaArray[4]= "d";
alphaArray[5]= "e";
alphaArray[6]= "f";
alphaArray[7]= "g";
alphaArray[8]= "h";
alphaArray[9]= "i";
alphaArray[10]= "j";
alphaArray[11]= "k";
alphaArray[12]= "l";
alphaArray[13]= "m";
alphaArray[14]= "n";
alphaArray[15]= "o";
alphaArray[16]= "p";
alphaArray[17]= "q";
alphaArray[18]= "r";
alphaArray[19]= "s";
alphaArray[20]= "t";
alphaArray[21]= "u";
alphaArray[22]= "v";
alphaArray[23]= "w";
alphaArray[24]= "x";
alphaArray[25]= "y";
alphaArray[26]= "z";

let indexVal = "";
let strLetters = "code wars";
let indexNo = "";

for(i=0;i<=strLetters.length;i++){
    let stringVal = strLetters.charAt(i);
    // indexVal += alphaArray[i];
    if (alphaArray.includes(stringVal)){
      indexNo += alphaArray.indexOf(stringVal) + " ";
    }
    
}

document.getElementById("demo").innerHTML = indexNo;
//output:3 15 4 5 23 1 18 19