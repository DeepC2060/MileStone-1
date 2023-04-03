function calculateBill(dishCosts, numPeople) {
  // calculate the total cost of all dishes
  const totalCost = dishCosts.reduce((acc, cost) => acc + cost, 0);
  // calculate the cost per person
  const costPerPerson = totalCost / numPeople;
  // create an array of the bill to be paid by each person
  const billPerPerson = new Array(numPeople).fill(costPerPerson);
  // adjust the bill for any remaining cents
  const remainingCents = Math.round((totalCost % numPeople) * 100) / 100;
  if (remainingCents > 0) {
    for (let i = 0; i < Math.floor(remainingCents * 100); i++) {
      billPerPerson[i] += 0.01;
    }
  }
  // return an object with the total bill and the bill per person
  return { total_bill: Number(totalCost.toFixed(2)), bill_per_person: billPerPerson };
}
const dishCosts = [12.50, 7.25, 9.95, 6.75];
const numPeople = 4;
const result = calculateBill(dishCosts, numPeople);
console.log(result);
