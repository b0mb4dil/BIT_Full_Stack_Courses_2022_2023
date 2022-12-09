function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Task - 1
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('1. >>>>>>>>')

let letterArrayNum = []
let letterArray = []
let countA = 0
let countB = 0
let countC = 0
let countD = 0
for (let i = 0; i < 200; i++) {
    letterArrayNum.push(rand(0, 3))
}
for (let i = 0; i < letterArrayNum.length; i++) {
    if (letterArrayNum[i] === 0) {
        letterArray.push('A')
        countA++;
    }
    if (letterArrayNum[i] === 1) {
        letterArray.push('B')
        countB++;
    }
    if (letterArrayNum[i] === 2) {
        letterArray.push('C')
        countC++;
    }
    if (letterArrayNum[i] === 3) {
        letterArray.push('D')
        countD++;
    }
}


console.log('Raidžių masyvas: ',letterArray)
console.log('Raidžių A yra: ', countA)
console.log('Raidžių B yra: ', countB)
console.log('Raidžių C yra: ', countC)
console.log('Raidžių D yra: ', countD)


// Task - 2
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
console.log('2. >>>>>>>>')
console.log('Raidžių masyvas didėjimo tvarka: ', letterArray.sort())

// Task - 3
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote. Pavyzdžiui: 
// Unikalios reikšmės (3): ['ABC', 'BAC', 'DAB', 'AAA']; 
// Unikali kombinacija masyve (AAA): ['ABC', 'ABC', 'ABC', 'AAA'];
console.log('3. >>>>>>>>')

const stringABCD = 'ABCD'
let array1 = []
let array2 = []
let array3 = []
let combination = ''

for (let i = 0; i < 100; i++) {
    let letter = stringABCD[rand(0, stringABCD.length - 1)]
    array1.push(letter);

    letter = stringABCD[rand(0, stringABCD.length - 1)]
    array2.push(letter);

    letter = stringABCD[rand(0, stringABCD.length - 1)]
    array3.push(letter);
}
console.log('Pirmas masyvas:', array1)
console.log('Antras masyvas:',array2)
console.log('Trečias masyvas:',array3)

const arrayCombined = []
let uniqueValue = 0
for (let i = 0; i < array1.length; i++) {
	arrayCombined.push(array1[i] + array2[i] + array3[i]);
    if (array1[i] !== array2[i] && array1[i] !== array3[i] && array2[i] !== array3[i]) {
        uniqueValue++;
    }
}

console.log(arrayCombined);

// Task - 3
// Unikalios kombinacijos:
let uniqueCombinations = arrayCombined.length

for (let i = 0; i < arrayCombined.length; i++) {
    for (let j = 0; j < arrayCombined.length; j++) {
        if (i !== j) {
            if (arrayCombined[i] === arrayCombined[j]) {
                uniqueCombinations--;
                break;
            }
        }
    }
}

console.log('Unikalios kombinacijos: ', uniqueCombinations)
console.log('Unikalios reikšmės: ', uniqueValue)

// Task - 4
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log('4. >>>>>>>>')

let numArray1 = []
let numArray2 = []

const masyvas = [];

// while(masyvas.length <= 200) {
//     if(!check)
//     numArray1.push(res);
// }

for (let i = 0; i < 100; i++) {
    let number = rand(100, 999)
    let check = numArray1.includes(number)
    if (check === false) {
        numArray1.push(number);
    } else {
        while (check === true) {
            number = rand(100, 999)
            check = numArray1.includes(number)
            if (check === false) {
                numArray1.push(number)
            }
        }
    }
}
for (let i = 0; i < 100; i++) {
    let number = rand(100, 999)
    let check = numArray2.includes(number)
    if (check === false) {
        numArray2.push(number);
    } else {
        while (check === true) {
            number = rand(100, 999)
            check = numArray2.includes(number)
            if (check === false) {
                numArray2.push(number)
            }
        }
    }
}
console.log('Pirmas masyvas su unikaliomis reikšmėmis: ', numArray1)
console.log('Antras masyvas su unikaliomis reikšmėmis: ', numArray2)


// Task - 5
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 4 uždavinio masyve, bet nėra antrame 4 uždavinio masyve.
console.log('5. >>>>>>>>')
let numArray3 = []


for (let i = 0; i < numArray1.length; i++) {
    let number = numArray1[i]
    let check = numArray2.includes(number)
    if (check === false) {
        numArray3.push(number);
    } 
}

console.log('Masyvas iš reikšmių, kurios yra pirmame masyve, bet nėra antrame masyve', numArray3)


// Task - 6
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
console.log('6. >>>>>>>>')
let numArray4 = []


for (let i = 0; i < numArray1.length; i++) {
    let number = numArray1[i]
    let check = numArray2.includes(number)
    if (check === true) {
        numArray4.push(number);
    } 
}

console.log('Masyvas iš reikšmių, kurios yra  ir pirmame, ir antrame masyve', numArray4)





