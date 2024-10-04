//Store Details:
const storeName = "TechTronix";
const storeLocation = "Molino, Bacoor";
const storeCapacity = 400;

//Dynamic Product Inventory:
let products =[
	{name: "Laptop", price: 18999, quantity: 50},
	{name: "Smartphone", price: 9999, quantity: 100},
	{name: "Tablet", price: 12999, quantity:80},
	{name: "Smartwatch", price: 15999, quantity: 60},
	{name: "Earphones", price: 8999, quantity: 70}

	];

//Inventory Validation:
function checkInventoryCapacity(){
	const totalProducts = products.reduce((acc, product) =>
		if (totalProducts > storeCapacity){
			console.log("WARNING!: The Store is Over Capacity!");
		}
}

//Product Manipulation
function addProduct(productName, quantity){
	const existingProduct = products.find(product => product.name === productName);
	const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0

	if (existingProduct){
		existingProduct.quantity += quantity;
	} else {
		
	}

}