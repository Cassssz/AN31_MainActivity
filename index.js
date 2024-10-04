// Store Details
const storeName = "TechTronix";
const storeLocation = "Molino, Bacoor, Philippines";
const storeCapacity = 400; // Maximum number of products

// Dynamic Product Inventory
//Array holding all product objects with their name, price, and quantity
let products = [
  { name: "Laptop", price: 18999, quantity: 50 },
  { name: "Smartphone", price: 9999, quantity: 100 },
  { name: "Tablet", price: 12999, quantity: 80 },
  { name: "Smartwatch", price: 15999, quantity: 60 },
  { name: "Earphones", price: 8999, quantity: 70 },
];

// Inventory Validation
// Checking if the total quantity of products exceeds the store's capacity
function checkInventoryCapacity() {

  // Calculates the total products by reducing the product quantities
  const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0);
  
  //Conditional to check if the total products exceed
  if (totalProducts > storeCapacity) {
    console.log("WARNING!: The Store is Over Capacity!");
  }
}

// Product Manipulation
function addProduct(productName, quantity) {
  const existingProduct = products.find(product => product.name === productName);
  const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0);

  if (existingProduct) {

  	// If the product exists, it will increase its quantity
    existingProduct.quantity += quantity;
  } else {

  	//Ensures that adding a product won't exceed store capacity
    if (totalProducts + quantity > storeCapacity) {
      console.log("WARNING!: Adding this Product will Exceed Store Capacity.");
      return totalProducts; // Return the original total without adding the product
    }
    products.push({ name: productName, quantity, price: 0 }); // Assume price is 0 for new products
  }

  return totalProducts + quantity;
}

function removeProduct(productName, quantity) {
  const existingProduct = products.find(product => product.name === productName);


// If a product not found, an error message will appear.
  if (!existingProduct) {
    console.log("ERROR: Product NOT found.");
    return;
  }

  if (quantity > existingProduct.quantity) {
    console.log("ERROR: Cannot Remove More Products than are in Stock.");
    return;
  }

  existingProduct.quantity -= quantity;
}

// Stretch Goal: Automatic Restocking
function restockProduct(productName, threshold) {
  const existingProduct = products.find(product => product.name === productName);

  if (!existingProduct) {
    console.log("ERROR: Product NOT Found.");
    return;
  }

  if (existingProduct.quantity < threshold) {
    existingProduct.quantity += 20;
    console.log(`Restocked ${productName}. New Quantity: ${existingProduct.quantity}`);
  }
}

// Most Expensive Product
function getMostExpensiveProduct() {
  return products.reduce((mostExpensive, product) => {
    return product.price > mostExpensive.price ? product : mostExpensive;
  }, products[0]);
}

// Total Inventory Value
function calculateTotalInventoryValue() {
  return products.reduce((totalValue, product) => totalValue + product.price * product.quantity, 0);
}

// User Interaction
const newProductName = prompt("Enter the Name of the New Product:");
const newProductPrice = parseFloat(prompt("Enter the Price of the New Product:"));
const newProductQuantity = parseInt(prompt("Enter the Quantity of the New Product:"));

const updatedTotalProducts = addProduct(newProductName, newProductQuantity);

//Prompts the user to see if they want to remove a product.
const removeProductChoice = prompt("Do you Want to remove a product? (Yes/No):");
if (removeProductChoice.toUpperCase() === "Yes") {
  const removeProductName = prompt("Enter the Name of the Product to Remove:");
  const removeProductQuantity = parseInt(prompt("Enter the Quantity to Remove:"));
  removeProduct(removeProductName, removeProductQuantity);
}

// Restock products if necessary (Stretch Goal)
products.forEach(product => restockProduct(product.name, 10));

// Output
console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products:", updatedTotalProducts);
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Most Expensive Product:", getMostExpensiveProduct().name);
checkInventoryCapacity();
