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
    return Math.floor(Math.random() * (max - min) + min);
}

let randomNumber1 = getRandomInt(0, 3)
let randomNumber2 = getRandomInt(0, 3)
let randomNumber3 = getRandomInt(0, 3)
let randomNumber4 = getRandomInt(0, 3)
let arr = []

// Paverčiu į array //
arr.push(randomNumber1, randomNumber2, randomNumber3, randomNumber4)

// Filtruoju gautą array pagal reikalingas x reikšmes ir su .length gauna išfiltruotų reikšmių skaičių //  
let zeros = arr.filter(x => x === 0).length
let ones = arr.filter(x => x === 1).length
let twos = arr.filter(x => x === 2).length


// Tas pats pirmas variantas, tik su "for" //
let zero0 = 0
let one1 = 0
let two2 = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        zero0++;
    } else if (arr[i] === 1) {
        one1++;
    } else {
        two2++;
    }
}
console.log(arr)
console.log(`**For*loop** nulių: ${zero0}, vienetų: ${one1}, dvejetų: ${two2}`)

console.log('-------------------------------')
console.log('Task - 5 - Pirmas variantas -')
console.log(`Atsitiktinis skaičius: ${arr}`)
console.log(`Nulių yra: ${zeros}, vienetų: ${ones}, dvejetų: ${twos}`)
console.log('---------------------------------------------------------------')

// ---------------------------//
// Task - 5, antras variantas //
console.log('-------------------------------')
console.log('Task - 5 - Antras variantas -')
let x1 = Math.floor(Math.random() * 3);
let x2 = Math.floor(Math.random() * 3);
let x3 = Math.floor(Math.random() * 3);
let x4 = Math.floor(Math.random() * 3);

let result = String(x1) + String(x2) + String(x3) + String(x4)

console.log("Sugeneruoti skaičiai: " + result);
console.log("Skaičių 0 yra: " + (result.length - result.replaceAll('0', '').length));
console.log("Skaičių 1 yra: " + (result.length - result.replaceAll('1', '').length));
console.log("Skaičių 2 yra: " + (result.length - result.replaceAll('2', '').length));

// --------------------------- //
// Task - 5, trecias variantas //
console.log('-------------------------------')
console.log('Task - 5 - Trečias variantas -')
let nuliai=0;
let vienetai=0;
let dvejetai=0;

let rnd1 = Math.floor(Math.random()* 3)
if (rnd1==0){
    nuliai++;
}else if(rnd1==1){
    vienetai++;
}else{
    dvejetai++;
}

let rnd2 = Math.floor(Math.random() * 3);
if (rnd2==0){
    nuliai++;
}else if(rnd2==1){
    vienetai++;
}else{
    dvejetai++;
}

let rnd3 = Math.floor(Math.random() * 3);
if (rnd3==0){
    nuliai++;
}else if(rnd3==1){
    vienetai++;
}else{
    dvejetai++;
}

let rnd4 = Math.floor(Math.random() * 3);
if (rnd4==0){
    nuliai++;
}else if(rnd4==1){
    vienetai++;
}else{
    dvejetai++;
}

console.log('atsitiktiniai skaičiai:', rnd1, rnd2, rnd3, rnd4);
console.log('nulių-',nuliai, 'vienetų-',vienetai, 'dvejetų-', dvejetai);
