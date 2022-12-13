function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function functionSum(a, b, c) {
    return a + b + c
}

const x = 10;
const y = 20;
const z = 30;

// let res = functionSum(x, y, z)



// Sugeneruokite 300 atsitiktinių stringų, sudarytų iš lotyniškų raidžių. Stringo ilgis 3-12 (atsitiktinis skaičius) simboliai
// Sustabdykite stringų generavimą, jei masyve turime daugiau nei 100 reikšmių, kurių ilgis 5 simboliai ar daugiau



function generateString(myLength) {
    let stringas = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < myLength; i++) {
        let number = rand(0, stringas.length - 1);
        result += stringas[number]
    }
    return result;
}


function generateStringArray() {
    let res = [];
    let counter = 0;


    for (let i = 0; i < 10; i++) {
        if (counter >= 100) {
            return res;
        }
        const string = generateString(rand(3, 12));
        res[i] = string;
        if (string.length >= 5) {
            counter++; 
        }
    }
    console.log(counter)
    return res;
    
}
console.log(generateStringArray())


function showParams(a, b, c) {
    console.log(a, b, c)
}
showParams('testA', 'testB', 'testC');

let array = [];

function push(...values) {
    for (let i = 0; i < values.length; i++) {
        array[array.length] = values[i]
    }
    return array;
}

push('test', 10, [], 50, 'tekstas')
console.log(array)



function callbackFn(element, index, array) {
    console.log(element, index, array);
}


// let i = 0;

// function loop() {
//     i++
//     if (i < 10) {
//         loop()
//     }
// }

// function map(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback([i], i, arr)
//     }
// }

// map(array, callbackFn)