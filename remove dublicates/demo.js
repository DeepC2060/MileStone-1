// Sample array of items in the cart
let cartItems = [  { id: 1, name: 'Product A', price: 10.99 },  { id: 2, name: 'Product B', price: 20.99 },  { id: 3, name: 'Product C', price: 15.99 },  { id: 2, name: 'Product B', price: 20.99 },  { id: 1, name: 'Product A', price: 10.99 }];

// Function to remove duplicates from the cart items array
function removeDuplicates(arr) {
  let uniqueItems = [];
  let uniqueIds = [];
  
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    if (!uniqueIds.includes(currentItem.id)) {
      uniqueItems.push(currentItem);
      uniqueIds.push(currentItem.id);
    }
  }
  
  return uniqueItems;
}

// Call the removeDuplicates function and assign the result to a new variable
let uniqueCartItems = removeDuplicates(cartItems);

// Print the unique items to the console
console.log(uniqueCartItems);
