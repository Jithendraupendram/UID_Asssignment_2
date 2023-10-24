// loan_calculator.js

// Function to calculate the monthly loan payment
function calculateLoanPayment() {
    // Get the input values
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);

    // Check for valid input
    if (isNaN(principal) || isNaN(interestRate) || isNaN(loanTerm) || interestRate <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate monthly interest rate and number of payments
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly payment
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Display the result
    document.getElementById("result").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

// Attach the calculateLoanPayment function to the Calculate button
document.getElementById("calculateButton").addEventListener("click", calculateLoanPayment);
