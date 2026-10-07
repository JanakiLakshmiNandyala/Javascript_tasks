function addTwo() {
    let n1 = parseFloat(document.getElementById("n1").value) || 0;
    let n2 = parseFloat(document.getElementById("n2").value) || 0;
    let sum = n1 + n2;
    document.getElementById("res").value = sum;
}

function avg1() {
    let n1 = parseFloat(document.getElementById("n3").value) || 0;
    let n2 = parseFloat(document.getElementById("n4").value) || 0;
    let n3 = parseFloat(document.getElementById("n5").value) || 0;
    let sum = n1 + n2 + n3;
    let avg = sum / 3;
    document.getElementById("res1").value = avg;
}

function nSum() {
    let n = parseFloat(document.getElementById("n6").value) || 0;
    let sum = (n * (n + 1)) / 2;
    document.getElementById("res2").value = sum;
}

function avg() {
    let n = parseFloat(document.getElementById("n7").value) || 0;
    if (n === 0) {
        document.getElementById("res3").value = "Invalid N";
        return;
    }
    let sum = (n * (n + 1)) / 2;
    let avg = sum / n;
    document.getElementById("res3").value = avg;
}

function ppg() {
    let n1 = parseFloat(document.getElementById("n8").value) || 0;
    let n2 = parseFloat(document.getElementById("n9").value) || 0;
    if (n1 === 0) {
        document.getElementById("res4").value = "Invalid CP";
        return;
    }
    let profit = n2 - n1;
    let pPercentage = (profit / n1) * 100;
    document.getElementById("res4").value = pPercentage;
}

function si() {
    let n1 = parseFloat(document.getElementById("n10").value) || 0;
    let n2 = parseFloat(document.getElementById("n11").value) || 0;
    let n3 = parseFloat(document.getElementById("n12").value) || 0;
    let SI = (n1 * n2 * n3) / 100;
    document.getElementById("res5").value = SI;
}