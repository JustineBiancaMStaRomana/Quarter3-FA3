var num1;
var num2;
var num3;

var nHi;
var pClass;
var t;
var h;
var m;

let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scanResults(){
    num1 = Math.round(Math.random()*21);
    num2 = Math.round(Math.random()*21);
    num3 = Math.round(Math.random()*21);

    numComp();
    letterGet();
    timeGet();

    replace.innerHTML = "Life Viability of first 3 planets of " + systemName.value + " System";

    planet1.innerHTML = systemName.value + "-1: " + num1;
    planet2.innerHTML = systemName.value + "-2: " + num2;
    planet3.innerHTML = systemName.value + "-3: " + num3;

    analysis.innerHTML = "Highest Viability Score: " + nHi + "</br> Class of 1st planet: " + pClass + "</br> Scanning Time: " + t + " minutes (" + h + ":" + m + ")";
}

function numComp(){
    if(num1 > num2){
        if(num1 > num3){
            nHi = num1;
        }else{
            nHi = num3;
        }
    }else{
        if(num2 > num3){
            nHi = num2;
        }else{
            nHi = num3;
        }
    }
}

function letterGet(){
    pClass = alpha.charAt(num1);
}

function timeGet(){
    t = num2*num3;
    h = Math.floor(t/60);
    m = t%60;
}

//jbsrizkewl