let textValue = document.getElementById('text-input');
let textValue2 = document.getElementById('text-input2');
let sendBtn = document.getElementById('submit-button');
let showMessages = document.getElementById('messages')


let newArray = [
    {
        Produktas: 'Bananai',
        Kaina: 3,
        Kiekis: 2
    },
    {
        Produktas: 'Pomidorai',
        Kaina: 2,
        Kiekis: 3
    },
    {
        Produktas: 'Agurkai',
        Kaina: 1,
        Kiekis: 8
    },
    {
        Produktas: 'Moliūgai',
        Kaina: 15,
        Kiekis: 2
    },
];


sendBtn.addEventListener('click', function() {
    showMessages.innerHTML = result;
})


let result = '';

newArray.map(product => {
    result += `
        <span>Produkto pavadinimas: ${product.Produktas}</span>
        <span>Kiekis: ${product.Kiekis}</span>
        <span>Suma: ${product.Kiekis * product.Kaina}</span>
        <br>
    `
})

console.log(result)