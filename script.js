let typeIn = document.getElementById("num");
const convertBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
let output = document.getElementById("output");
let radios = document.getElementsByName("temps");
let temp = "";


clearBtn.addEventListener("click", erase);
convertBtn.addEventListener("click",tempConv);


function tempConv(){
    let temp = typeIn.value;
 for (let i=0;i<radios.length;i++){
     if (radios[i].checked){
         tempChoice = radios[i].id;
         console.log(tempChoice);
         console.log(temp)
        
        if (tempChoice === "Fare"){
            getFare(temp);
        } else {
            getCel(temp);
        }
     }  
 }
};


function erase(){
    console.log("clear");
    typeIn.value = "";
    output.innerHTML = "";
};

function getCel(temp){
    console.log('to celsius');
    conversion = Math.floor((5/9)*(temp-32));
    if(conversion>32){
        output.innerHTML = conversion;
        output.style.color = "red";
    } else if(conversion<0){
        output.innerHTML = conversion;
        output.style.color = "blue";
    } else {
        output.innerHTML = conversion;
        output.style.color = "green";
    }  
};

function getFare(temp){
    console.log('to farenheit');
    conversion = Math.floor((temp * 9/5) + 32);
    if(conversion>90){
        output.innerHTML = conversion;
        output.style.color = "red";
    } else if(conversion<32){
        output.innerHTML = conversion;
        output.style.color = "blue";
    } else {
        output.innerHTML = conversion;
        output.style.color = "green";
    }    
};

