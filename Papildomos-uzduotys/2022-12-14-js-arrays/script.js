function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Masyvai
// Task - 1
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

let array = []

for (let i = 0; i < 10; i++) {
    if (array.length <= 2) {
        array[i] = rand(5, 25)
    } else {
        array[i] = array[array.length - 1] + array[array.length - 2]
    }
}
console.log('<<<< Užduotis 1. >>>>')
console.log(array)

// Task - 2
// Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

let arrayTotal = []
let az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let arrayInside = []

for (let j = 0; j < 10; j++) {
    let randomElementCount = rand(2, 20)

    for (let i = 0; i < randomElementCount; i++) {
        if (arrayInside.length < randomElementCount) {
            arrayInside[i] = az[rand(0, az.length - 1)]
        }
        if (arrayInside.length === randomElementCount) {
            arrayTotal.push(arrayInside.sort())
            arrayInside = []
        } 
    }
}
console.log('')
console.log('<<<< Užduotis 2. Masyvai>>>>')

console.log(arrayTotal)


// Funkcijos
// Task - 1
// Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)

multiplier = (number, n) => {
    result = Math.pow(number, n) 
    return console.log(`${number} pakelta ${n} laipsniu gauname:`, result)
}

console.log('')
console.log('<<<< Užduotis 1. Funkcijos >>>>')
multiplier(2, 5)

// Task - 2
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą. Rezultatą atvaizduokite naršyklėje.

h1 = (text) => document.write(`<h1>${text}</h1>`)

h1('2 užduotis, h1 funkcija')

// Task - 3
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmąjame uždavinyje parašyta funkcija.

hCustom = (hValue, text) => document.write(`<h${hValue}>${text}</h${hValue}>`)

hCustom(2 ,'3 užduotis, h funkcija')

// Task - 4
// Aprašykite funkciją kuri priimtų vieną parametrą "number" bei patikrintų ar duotas skaičius yra pirminis.


function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
}
console.log('')
console.log('<<<< Užduotis 4. ir 5. Funkcijos >>>>')
console.log(checkPrime(3))


// Task - 5 
// Sugeneruokite 100 elementų masyvą kurio reikšmės atsitiktiniai skaičiai nuo 997 iki 15991.

function numberArray() {
    let numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers[i] = rand(997, 15991);
    }
    return numbers;
}
let myArray = numberArray()
console.log(myArray)

// Task - 6
// Pasinaudodami penktoje užduotyje aprašyta funkcija masyve palikite tik pirminius skaičius, kurie yra didesni nei 5000;
function arrayPrimeFilter(array) {
    for (let i = 0; i < array.length; i++) {
        if (checkPrime(array[i]) === false) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

console.log(arrayPrimeFilter(myArray))
