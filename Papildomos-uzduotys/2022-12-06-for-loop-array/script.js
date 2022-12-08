function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Task - 1 & 2 //
// ------------ //

// const size = 25;
// let result = '';

// for(let y = 0; y < size; y++) {
//     for(let x = 0; x < size; x++) {
//         if (y === x || x === (size - y) - 1) {
//             result += '<span style="color: red;">*</span>';
//         } else if (y === (x + 6) || x === (size - y) + 5) {
//             result += '<span style="color: red;">*</span>';
//         } else if (y === (x + 18) || x === (size - y) + 5) {
//             result += '<span style="color: red;">*</span>';
//         } else if (y === (x - 6) || x === (size - y) - 6) {
//             result += '<span style="color: red;">*</span>';
//         } else if( y === 12 || x === 12) {
//             result += '<span style="color: red;">*</span>';
//         } else {
//             result += '*';
//         }
//     }
//     result += '<br>';
// }
// document.write(result);


// Task - 3 //
// -------- //
let coinFlip = []
let trysHerbai = []


for (let i = 0; i < 200; i++) {
    coinFlip.push(rand(0, 1))
    if (coinFlip[i] === 0) {
        trysHerbai.push(coinFlip[i])
        console.log('Iškrito herbas');
        //break;
    } 
    if (coinFlip[i - 0] === 0 && coinFlip[i - 1] === 0 && coinFlip[i - 2] === 0) {
        console.log('Tris kartus iš eilės iškrito herbas');
        break;
    } 
    if (coinFlip[i] === 1) {
        console.log('Iškrito skaičius');
    }
    if (trysHerbai.length === 3) {
        console.log('Iškrito trys herbai')
        // break;
    }
} 
console.log('Visi monetos metimai:',coinFlip)

// Task - 4 //
// -------- //
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log('**************************************')
console.log('Task - 4   ')

const array30 = []

for (let i = 0; i < 30; i++) {
    array30.push(rand(5, 25))
}
console.log(array30)


// Task - 5 //
// -------- //
console.log('**************************************')
console.log('Task - 5')


let above10 = 0
let max = Math.max(...array30)
let indexes = []

for (let i = 0; i < array30.length; i++) {
    if (array30[i] > 10) {
        above10++;
    }
    if (array30[i] > max) {
        max = array30[i]
    } 
    if (array30[i] === max) {
        indexes.push(i)
    }
}

console.log('Masyvas: ', array30)
console.log('Virš 10 reikšmių: ', above10)
console.log('Maksimali reikšmė: ', max)
console.log('Maksimalios reikšmės indexai: ', indexes);

// c)
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
console.log('5. c) >>>>>>>>')

let evenIndexes = []
let sum = 0

for (let i = 0; i < array30.length; i++) {
    if (i % 2 === 0 && i > 0) {
        evenIndexes.push(array30[i])
        sum += array30[i]
    }
}
let sumOfEvenIndexes = evenIndexes.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log('Lyginių indexų reikšmės:', evenIndexes)
console.log('Lyginių indexų reikšmių suma:', sumOfEvenIndexes)
console.log('Lyginių indexų reikšmių suma:', sum)

// d)
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
console.log('5. d) >>>>>>>>')

let newArray = []

for (let i = 0; i < array30.length; i++) {
    newArray.push(array30[i] - i)
}
console.log('Orginalus masyvas: ', array30)
console.log('Naujas išminusuotas masyvas: ', newArray)

// e)
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
console.log('5. e) >>>>>>>>')

for (let i = 0; i < 10; i++) {
    array30.push(rand(5, 25))
}
console.log('Papildytas masyvas', array30)

// f)
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;
console.log('5. f) >>>>>>>>')

let evenArrayOf = []
let unevenArrayOf = []

for (let i = 0; i < array30.length; i++) {
    if (array30[i] % 2 === 0 && i > 0) {
        evenArrayOf.push(array30[i])
    }
    if (array30[i] % 2 != 0 && i > 0) {
        unevenArrayOf.push(array30[i])
    }
}

console.log('Lyginis array', evenArrayOf)
console.log('Nelyginis array', unevenArrayOf)

// g)
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log('5. g) >>>>>>>>')

for (let i = 0; i < evenArrayOf.length; i++) {
    if (evenArrayOf[i] > 15) {
        evenArrayOf[i] = 0;
    }
}
console.log('Reikšmės, didesnės už 15 paverstos į 0: ',evenArrayOf)

// h)
// Iš masyvo ištrinkite visus elementus, kurių reikšmė didesnė už 10;
console.log('5. h) >>>>>>>>')
console.log('Masyvas, su visomis reikšmėmis: ', array30)

for (let i = 0; i < array30.length; i++) {
    if (array30[i] > 10) {
        array30.splice(i, 1);
        i--;
    }
}

console.log('Ištrintos reikmšmės, didesnės už 10: ', array30)