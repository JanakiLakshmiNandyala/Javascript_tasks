function sum() {
    var num1 = parseInt(document.getElementById("n1").value) || 0;
    var num2 = parseInt(document.getElementById("n2").value) || 0;
    var num3 = parseInt(document.getElementById("n3").value) || 0;
    
    var add = num1 + num2 + num3;
    
    document.getElementById("result").innerText = "Sum of " + num1 + ", " + num2 + " and " + num3 + " : " + add;
}