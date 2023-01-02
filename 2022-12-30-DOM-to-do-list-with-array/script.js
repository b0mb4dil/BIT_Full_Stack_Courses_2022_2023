let addCart = document.getElementById('add-cart');
let cartContainer = document.getElementById('cart-container');

let cartArray = [];

const showCart = () => {
    let result = '';

    cartArray.map((product, index) => {
        result += `
        <div class="cart">
            <li>${product.product}</li>
            <li>${product.quantity}</li>
            <button class="deleteCart" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `
    })

    cartContainer.innerHTML = result;
}
 
const addToCart = () => {

    let productObject = {
        product: document.getElementById('input-cart').value,
        quantity: document.getElementById('input-number').value,
    }

    cartArray.push(productObject);
    
    showCart();
}

const deleteItem = (index) => {
    delete cartArray[index];
    showCart();
}


