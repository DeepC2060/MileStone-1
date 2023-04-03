const calculateTotalCost = (cart) => {
  let total = 0;
  for (let item of cart) {
    total += item.unitPrice * item.quantity;
  }
  return total;
}

const cart = [
  { unitPrice: 10.99, quantity: 2 },
  { unitPrice: 5.99, quantity: 3 },
  { unitPrice: 2.99, quantity: 5 }
];

const totalCost = calculateTotalCost(cart);
console.log(totalCost); // Output: 54.89
