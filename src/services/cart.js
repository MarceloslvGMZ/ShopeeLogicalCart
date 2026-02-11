//adicionarItem, deletarItem, removerItem, 
import * as itemService from "./item.js";

async function addItem(userCart, item){
    userCart.push(item);
}

async function calculateTotal(userCart){
    console.log("Shopee Cart Total is: ");

    const result = userCart.reduce((total, item) => {
        return total + itemService.subtotal(item.price, item.quantity);
    },0);

    console.log(`\n Total: ${result.toFixed(2)}`);
}


async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1;
    }

    else if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
    }


}


async function displayCart(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | Subtotal ${itemService.subtotal(item.price, item.quantity)}`)
        
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    displayCart,
    removeItem
}