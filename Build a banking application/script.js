// Define the customer object
let customer = {
  name: "John Doe",
  balance: 1000
};

// Function to deposit money into customer account
function deposit(amount) {
  customer.balance += amount;
  console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}.`);
}

// Function to withdraw money from customer account
function withdraw(amount) {
  if (amount > customer.balance) {
    console.log("Insufficient funds. Withdrawal unsuccessful.");
  } else {
    customer.balance -= amount;
    console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}.`);
  }
}
deposit(500); 
withdraw(200);
withdraw(1500); 
