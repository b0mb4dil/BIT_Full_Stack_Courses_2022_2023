function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task - 1
// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.
let array = []
let arrayInside = []

for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 5; j++) {
        arrayInside[j] = rand(5, 25)
    }
    if (i < 10) {
        arrayInside = []
        array.push(arrayInside)
    } 
}

console.log(array)

// Task - 2
// Naudodamiesi 1 uždavinio masyvu:
// a) Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let count10 = 0

for (const level1 in array) {
    for (const level2 in array[level1]) {
        if (array[level1][level2] > 10) {
            count10++
        }
    }
}

// Antras variantas a) punktui
let count = 0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] > 10) {
            count++
        }
    }
}

console.log(count10)
console.log(count)

// b) punktas
// Raskite didžiausio elemento reikšmę;
console.log('<<<<< b) punktas >>>>>')

console.log(Math.max(...array.flat()))

// c)
// Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)

console.log('<<<<< c) punktas >>>>>')

let index0sum = 0
let index1sum = 0
let index2sum = 0
let index3sum = 0
let index4sum = 0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < 1; j++) {
        if (array[i].indexOf(0)) {
            index0sum += array[i][0]
        }
        if (array[i].indexOf(1)) {
            index1sum += array[i][1]
        }
        if (array[i].indexOf(2)) {
            index2sum += array[i][2]
        }
        if (array[i].indexOf(3)) {
            index3sum += array[i][3]
        }
        if (array[i].indexOf(4)) {
            index4sum += array[i][4]
        }
        
    }
}
console.log('0 indexo skaičių suma:', index0sum)
console.log('1 indexo skaičių suma:', index1sum)
console.log('2 indexo skaičių suma:', index2sum)
console.log('3 indexo skaičių suma:', index3sum)
console.log('4 indexo skaičių suma:', index4sum)


// d)
// Visus antro lygio masyvus “pailginkite” iki 7 elementų
console.log('<<<<< d) punktas >>>>>')

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i].length < 7) {
            array[i].push(rand(50, 99))
        }
    }
}

console.log('Pailgintas antro lygio masyvas:', array)


// e)
// Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai
console.log('<<<<< e) punktas >>>>>')


let newArray = []
let indexSum = 0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[j].length; j++) {
        indexSum += array[i][j]
    }
    newArray.push(indexSum);
    indexSum = 0 

}
console.log('Gautas naujas masyvas:',newArray)


// Task - 3
// Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę: generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą. Jeigu reikšmė yra 0 masyvo nekurkite. Antro lygio masyvo reikšmes papildykite atsitiktiniais skaičiais nuo 0 iki 10. Ten kur masyvo nėra įkelkite skaičių nuo 0 iki 10.
console.log('<<<<< 3 užduotis >>>>>')

let randomArray = []
let arrayToPush = []

for (let i = 0; i < 10; i++) {
    let arrayLength = rand(0, 5)

    if (arrayLength === 0) {
        randomArray[i] = rand(0 ,10);
    } else {
        arrayToPush = []
        for (let j = 0; j < arrayLength; j++) {
            if (arrayLength > 0) {
                arrayToPush[j] = rand(1, 10)
            }
        }
        randomArray.push(arrayToPush)
    }
}

console.log(randomArray)

// Task - 4
// Paskaičiuokite 3 uždavinio masyvo visų reikšmių sumą ir išrūšiuokite masyvą taip, kad pirmiausiai eitų mažiausios masyvo reikšmės arba jeigu reikšmė yra masyvas, to masyvo reikšmių sumos.
console.log('<<<<< 4 užduotis >>>>>')


// Masyvo sumos skaičiavimo funkcija
function arrSum(arr) {
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            sumOfArray += arrSum(arr[i]);
        } else {
            sumOfArray += arr[i];
        }
    }
    return sumOfArray;
}
// Masyvo suma
console.log(arrSum(randomArray))


let sortedArrayNew = []

for (let i = 0; i < randomArray.length; i++) {
    if (typeof randomArray[i] == 'number') {
        sortedArrayNew[i] = randomArray[i]
    }
    if (typeof randomArray[i] == 'object') {
        sortedArrayNew[i] = 0
        for (let j = 0; j < randomArray[i].length; j++) {
            sortedArrayNew[i] += randomArray[i][j]
        }
    }
}

console.log(sortedArrayNew)

sortedArrayNew = sortedArrayNew.sort(function (a, b) { return a - b });

// Didėjimo tvarka išrūšiuotas masyvas
console.log(sortedArrayNew);


// Antras variantas

// let sortedArray = [];

// for (level1 in randomArray) {
//     if (typeof randomArray[level1] != 'number') {
//         sortedArray[level1] = 0;
//         for (level2 in randomArray[level1]) {
//             sortedArray[level1] += randomArray[level1][level2];
//         }
//     } else {
//         sortedArray[level1] = randomArray[level1];
//     }
// }

// sortedArray = sortedArray.sort(function (a, b) { return a - b });

// console.log(sortedArray);

