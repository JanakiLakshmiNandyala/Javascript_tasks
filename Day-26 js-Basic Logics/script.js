function addTwo(){
let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let sum=n1+n2;
document.getElementById("res").value=sum;
}

function avg1(){
let n1=parseInt(document.getElementById("n3").value);
let n2=parseInt(document.getElementById("n4").value);
let n3=parseInt(document.getElementById("n5").value);
let sum=n1+n2+n3;
let avg=sum/3;
document.getElementById("res1").value=avg;
}

function nSum(){
    let n=parseInt(document.getElementById("n6").value);
    let sum=(n*(n+1))/2;
    document.getElementById("res2").value=sum;
}

function avg(){
    let n=parseInt(document.getElementById("n7").value);
    let sum=(n*(n+1))/2;
    let avg=sum/n;
    document.getElementById("res3").value=avg;
}

function ppg(){
let n1=parseInt(document.getElementById("n8").value);
let n2=parseInt(document.getElementById("n9").value);
let profit=n2-n1;
let pPercentage=(profit/n1)*100;
document.getElementById("res4").value=pPercentage;
}

function si(){
let n1=parseInt(document.getElementById("n10").value);
let n2=parseInt(document.getElementById("n11").value);
let n3=parseInt(document.getElementById("n12").value);
let SI=(n1*n2*n3)/100;
document.getElementById("res5").value=SI;
}