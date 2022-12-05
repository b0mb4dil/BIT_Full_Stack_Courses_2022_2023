// Task - 1
console.log('-----Task - 1-----')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let rand1 = getRandomInt(0, 4)
let rand2 = getRandomInt(0, 4)
if (rand1 >= rand2) {
    if (rand2 === 0) {
        console.log('Dalyba iš nulio negalima')
    }
    let result = rand1/rand2;
    console.log(`Atsitiktiniai skaičiai: rand1 ${rand1}, rand2 ${rand2}`);
    console.log(`Atsakymas: ${result}`);
    let resultRounded = parseFloat(result.toFixed(2));
    console.log(`Suapvalintas rezultatas: ${resultRounded}`);
} else {
    if (rand1 === 0) {
        console.log('Dalyba iš nulio negalima')
    } 
    let result = rand2/rand1;
    console.log(`Atsitiktiniai skaičiai: rand1 ${rand1}, rand2 ${rand2}`);
    console.log(`Atsakymas: ${result}`);
    let resultRounded = result.toFixed(2);
    console.log(`Suapvalintas rezultatas: ${resultRounded}`);
}


// Task - 2
console.log('-----Task - 2-----')

function getRandomIntFloor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let x = getRandomIntFloor(0, 24)
let y = getRandomIntFloor(0, 24)
let z = getRandomIntFloor(0, 24)
console.log(`Kintamieji: x=${x}, y=${y}, z=${z}`)

if (Math.min(x, y, z) < x && Math.max(x, y, z) > x) {
    console.log('Vidurinysis kintamasis x.');
} else if (Math.min(x, y, z) < y && Math.max(x, y, z) > y) {
    console.log('Vidurinysis kintamasis y.');
} else if (Math.min(x, y, z) < z && Math.max(x, y, z) > z) {
    console.log('Vidurinysis kintamasis z.');
} else if (x === z && x != y) {
    console.log('x ir z lygūs')
} else if (x === y && x != z) {
    console.log('x ir y lygūs')
} else if (y === z && y != x) {
    console.log('y ir z lygūs')
} else if (y === z && y === x && x === z ) {
    console.log('x, y ir z lygūs')
}


// Task - 3
console.log('-----Task - 3-----')

let starName = 'Bruce'
let starSurname = 'Lee'

console.log(starName, starSurname,'inicialai:' ,starName[0] + starSurname[0]);

// Task - 4
console.log('-----Task - 4-----')

let abc = 'abcdefghijklmnopqrstuvwxyz'
let letterOneIndex = getRandomIntFloor(0, (abc.length - 1))
let letterTwoIndex = getRandomIntFloor(0, (abc.length - 1))
let letterThreeIndex = getRandomIntFloor(0, (abc.length - 1))

let resultLetters = abc[letterOneIndex] + abc[letterTwoIndex] + abc[letterThreeIndex];
console.log(`Raidžių index'ai: pirmos ${letterOneIndex}, antros ${letterTwoIndex}, trečios ${letterThreeIndex}`)
console.log(`Gautos trys atsitiktinės raidės: ${resultLetters}`);