let addCart = document.getElementById('add-cart');
let cartContainer = document.getElementById('cart-container');
let inputCart = document.getElementById('input-cart');
let inputQuantity = document.getElementById('input-number')

addCart.addEventListener('click', function() {
    let cart = document.createElement('div')
    cart.classList.add('cart');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    li1.innerText = `${inputCart.value}`;
    li2.innerText = `${inputQuantity.value}`;
    cart.appendChild(li1);
    cart.appendChild(li2);

    console.log(isNaN(inputQuantity.value))

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkCart');
    cart.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteCart');
    cart.appendChild(deleteButton);


    if (inputCart.value === "") {
        alert('Prašome įvesti prekę')
    } else if (inputQuantity.value < 1) {
        alert('Prašome įvesti kiekį')
    } else {
        cartContainer.appendChild(cart)
    }

    

    inputCart.value = "";
    inputQuantity.value = "";

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function (e) {
		let target = e.target;
		if (target.matches('button')) {
			target.parentElement.remove();
		}
		if (target.matches('i')) {
			target.parentElement.parentElement.remove();
		}
	});
})
