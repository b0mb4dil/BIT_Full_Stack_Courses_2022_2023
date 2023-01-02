let addCart = document.getElementById('add-cart');
let cartContainer = document.getElementById('cart-container');

let cartArray = [];


const showCart = () => {
    // Tikrinama ar krepšelis tuščias
    if (cartArray.length === 0) {
        document.querySelector('.information').innerHTML = '<div class="danger">Prekių krepšelis tuščias</div>';
        document.querySelector('.danger').style.display = 'block';
    } 
    if (cartArray.length > 0) {
        document.querySelector('.information').innerHTML = `<div class="success">Prekių krepšelyje yra ${cartArray.length} prekės/prekių</div>`;
        document.querySelector('.success').style.display = 'block'
    }

    // Krepšelio atvaizdavimas
    let result = '';

    cartArray.map((product, index) => {
        result += `
        <div class="cart">
            <li>${product.product}</li>
            <li>${product.quantity} vnt.</li>
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


    // Tikrinima ar teisingai įvesti duomenys
    document.querySelector('.attention').innerHTML = '<span class="dangerAtt"></span>'

    if (document.getElementById('input-cart').value === '') {
        document.querySelector('.attention').innerHTML = '<span class="dangerAtt">Prašome įvesti prekę</span>';
        document.querySelector('.dangerAtt').style.display = 'block';
    } else if (document.getElementById('input-number').value < 1) {
        document.querySelector('.attention').innerHTML = '<span class="dangerAtt">Prašome įvesti kiekį</span>';
        document.querySelector('.dangerAtt').style.display = 'block';
    } else {
        cartArray.push(productObject);
        document.querySelector('.dangerAtt').style.display = 'none';
    }

    // Nunulinami įvedimo laukeliai
    document.getElementById('input-cart').value = '';
    document.getElementById('input-number').value = '';
    showCart();

}


// Elemento ištrinimas iš masyvo
const deleteItem = (index) => {
    cartArray.splice(index, 1);
    showCart();
}

showCart();


