
let cart = [];

const addItemToCart = (productId, productName, quantity, price) => {
  const product = { productId, productName, quantity, price };
  cart.push(product);
  console.log(`${productName} added to the cart.`);
};

const removeItemFromCart = (productId) => {
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1); 
  }
};

const updateItemQuantity = (productId, newQuantity) => {
  cart = cart.map(item =>
    item.productId === productId ? { ...item, quantity: newQuantity } : item
  );
  const updatedItem = cart.find(item => item.productId === productId);
  console.log(`Quantity of product ID ${productId} updated to ${newQuantity}.`);
};

const calculateTotalCost = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const displayCartSummary = () => {
  console.log('Cart Summary:');
  cart.forEach(item => {
    const totalPrice = item.price * item.quantity;
    console.log(`${item.productName} - Quantity: ${item.quantity}, Total: PKR ${totalPrice}`);
  });
};

const applyDiscount = (discountPercentage) => {
    const total = calculateTotalCost();
    const discountAmount = (total * discountPercentage) / 100;
    const discountedTotal = total - discountAmount;
    console.log(`Total after applying {discountPercentage}% discount: PKR {discountedTotal}`);
  };

0
addItemToCart(1, 'Tablet', 2, 65000);    
addItemToCart(2, 'Smartwatch', 1, 40000); 
addItemToCart(3, 'Speaker', 4, 20000);  

updateItemQuantity(2, 2); 

displayCartSummary(); 
