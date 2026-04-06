const prompt = require("prompt-sync")();


let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter second number: "));

let result;


switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero");
            process.exit();
        }
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
        process.exit();
}

console.log(`Result: ${result}`);