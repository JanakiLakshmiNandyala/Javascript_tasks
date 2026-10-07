// Helper function to extract and validate inputs for 2 numbers
function getInputs() {
    const v1 = document.getElementById("n1").value;
    const v2 = document.getElementById("n2").value;

    if (v1 === "" || v2 === "") {
        alert("Please enter values for both fields.");
        return null;
    }

    const num1 = parseFloat(v1);
    const num2 = parseFloat(v2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numeric inputs.");
        return null;
    }

    return [num1, num2];
}

function addnum() {
    const inputs = getInputs();
    if (!inputs) return;

    const sum = inputs[0] + inputs[1];
    document.getElementById("result").value = sum;
}

function subnum() {
    const inputs = getInputs();
    if (!inputs) return;

    const difference = inputs[0] - inputs[1];
    document.getElementById("result").value = difference;
}

function mulnum() {
    const inputs = getInputs();
    if (!inputs) return;

    const product = inputs[0] * inputs[1];
    document.getElementById("result").value = product;
}

function divnum() {
    const inputs = getInputs();
    if (!inputs) return;

    if (inputs[1] === 0) {
        document.getElementById("result").value = "Error (Div by 0)";
        return;
    }

    const quotient = inputs[0] / inputs[1];
    document.getElementById("result").value = Number.isInteger(quotient)
        ? quotient
        : quotient.toFixed(4);
}