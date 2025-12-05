function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter both numbers!";
        return;
    }

    if (operation === "add") {
        result.textContent = "Result: " + (num1 + num2);
    } 
    else if (operation === "sub") {
        result.textContent = "Result: " + (num1 - num2);
    } 
    else if (operation === "mul") {
        result.textContent = "Result: " + (num1 * num2);
    } 
    else if (operation === "div") {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero!";
        } else {
            result.textContent = "Result: " + (num1 / num2);
        }
    } 
    else {
        result.textContent = "Invalid Operation!";
    }
}