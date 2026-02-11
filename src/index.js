import  * as itemService from "./services/item.js";
import * as cartService from "./services/cart.js";


const cart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart");

const item1 = await itemService.createItem("hotwheels ferrari", 20.99, 1);
const item2 = await itemService.createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

//await deleteItem(cart, item2.name);

await cartService.removeItem(cart, item2);
await cartService.removeItem(cart, item2);

await cartService.displayCart(cart);

cartService.calculateTotal(cart);