
async function createItem(name, price, quantity){
    return {
        name, price, quantity, subtotal: subtotal(price, quantity)
    }
}

const subtotal = (price, quantity) => price * quantity;

export {
    createItem, 
    subtotal
};

