function calculateRentalCost(numDays, carType) {
  let rentalCost;
  switch (carType) {
    case "Economy":
      rentalCost = 4000;
      break;
    case "Midsize":
      rentalCost = 10000;
      break;
    case "Luxury":
      rentalCost = 20000;
      break;
    default:
      return "Invalid car type";
  }
  let totalCost = rentalCost * numDays;
  return totalCost;
}
calculateRentalCost(3, "Economy");
