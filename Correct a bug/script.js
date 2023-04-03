function doubleCartQuantity(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] = cart[i] * 2; 
    }
    return cart;
  }
  let cart = [1, 2, 3, 4];
  cart = doubleCartQuantity(cart); 
  console.log(cart); 
    

