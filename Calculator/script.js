function calculate() {
    // Get the input values and operator
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
  
    let result;
  
    // Perform the mathematical operation based on the operator
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
        break;
    }
  
    // Update the result display
    document.getElementById("result").innerHTML = result;
  }
  