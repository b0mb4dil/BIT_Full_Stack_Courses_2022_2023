// Task - 1
let celebrityOne = "Bruce Lee"
let celebrityTwo = "Chuck Norris"

if (celebrityOne.length > celebrityTwo.length) {
    console.log(celebrityOne + ' wins.')
} else if (celebrityOne.length == celebrityTwo.length) {
    console.log(celebrityOne + ' and ' + celebrityTwo + ' are equal.')
} else {
    console.log(celebrityTwo + ' wins.')
}


// Task - 2
let name = 'Eivydas'
let surname = 'Gricius'
let bornYear = 1993
let currentYear = 2022
let age = currentYear - bornYear
console.log(`My name is ${name} ${surname} and I'm ${age} years old.`)

// Task - 3
let celebrityOneName = "Bruce"
let celebrityOneSurname = "Lee"
let celebrityNew = celebrityOneName.slice(-3) + celebrityOneSurname.slice(-3)
console.log(celebrityNew)

// Task - 4
let string = 'Once upon a time in hollywood'
string = string.replaceAll('o', '*').replaceAll('O', '*')
console.log(string)
console.log('---------------------------------------------------------------')



// Task - 5 //

// Random skaičiaus generavimo funkcija //
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber1 = getRandomInt(0, 3)
let randomNumber2 = getRandomInt(0, 3)
let randomNumber3 = getRandomInt(0, 3)
let randomNumber4 = getRandomInt(0, 3)
let randomNumber = String(randomNumber1) + String(randomNumber2) + String(randomNumber3) + String(randomNumber4)

// Paverčiu į array //
const arr = String(randomNumber).split('').map(str => Number(str));

// Filtruoju gautą array pagal reikalingas x reikšmes ir su .length gauna išfiltruotų reikšmių skaičių //  
let zeros = arr.filter(x => x === 0).length
let ones = arr.filter(x => x === 1).length
let twos = arr.filter(x => x === 2).length


console.log('---Penkta užduotis---')
console.log(`Atsitiktinis skaičius: ${randomNumber}`)
console.log(`Nulių yra: ${zeros}, vienetų: ${ones}, dvejetų: ${twos}`)
console.log('---------------------------------------------------------------')

// Task - 5, antras variantas //
let x1 = Math.floor(Math.random() * 3);
let x2 = Math.floor(Math.random() * 3);
let x3 = Math.floor(Math.random() * 3);
let x4 = Math.floor(Math.random() * 3);

let result = String(x1) + String(x2) + String(x3) + String(x4)

console.log("Sugeneruoti skaičiai: " + result);
console.log("Skaičių 0 yra: " + (result.length - result.replaceAll('0', '').length));
console.log("Skaičių 1 yra: " + (result.length - result.replaceAll('1', '').length));
console.log("Skaičių 2 yra: " + (result.length - result.replaceAll('2', '').length));
