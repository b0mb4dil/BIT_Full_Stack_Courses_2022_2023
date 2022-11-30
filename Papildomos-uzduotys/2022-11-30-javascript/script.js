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



// Task - 5 //

// Random skaičiaus generavimo funkcija //
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min
}

let randomNumber = getRandomInt(0, 2)

// Paverčiu į array //
const arr = String(randomNumber).split('').map(str => Number(str));

// Filtruoju gautą array pagal reikalingas x reikšmes ir su .length gauna išfiltruotų reikšmių skaičių //  
let zeros = arr.filter(x => x === 0).length
let ones = arr.filter(x => x === 1).length
let twos = arr.filter(x => x === 2).length


console.log('---Penkta užduotis---')
console.log(`Atsitiktinis skaičius: ${randomNumber}`)
console.log(`Nulių yra: ${zeros}, vienetų: ${ones}, dvejetų: ${twos}`)


