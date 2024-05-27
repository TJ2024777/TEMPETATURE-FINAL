function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    console.log("Select the operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    const operation = parseInt(prompt("Enter the number corresponding to the desired operation:"));

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    switch(operation) {
        case 1:
            result = num1 + num2;
            console.log("Result: " + result);
            break;
        case 2:
            result = num1 - num2;
            console.log("Result: " + result);
            break;
        case 3:
            result = num1 * num2;
            console.log("Result: " + result);
            break;
        case 4:
            if (num2 === 0) {
                console.log("Error: Division by zero.");
            } else {
                result = num1 / num2;
                console.log("Result: " + result);
            }
            break;
        default:
            console.log("Invalid operation. Please enter a number between 1 and 4.");
    }
}

calculator();

