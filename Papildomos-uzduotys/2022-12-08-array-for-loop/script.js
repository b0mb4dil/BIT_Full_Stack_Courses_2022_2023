function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task - 1
// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
console.log('1. >>>>>>>>')


let pointsKazys = []
let pointsPetras = []
let sumKazys = 0
let sumPetras = 0

for (let i = 0; i < 200; i++) {
    pointsKazys.push(rand(5, 25))
    pointsPetras.push(rand(10, 20))
    sumKazys += pointsKazys[i]
    sumPetras += pointsPetras[i]
    if (sumKazys >= 222 || sumPetras >= 222) {
        break;
    }
}
if (sumKazys > sumPetras) {
    console.log('Laimėjo Kazys');
} else if (sumKazys === sumPetras) {
    console.log('Lygiosios')
} else {
    console.log('Laimėjo Petras')
}


console.log('Kazio taškai: ', pointsKazys)
console.log('Kazio taškų suma', sumKazys)

console.log('Petro taškai: ', pointsPetras)
console.log('Petro taškų suma', sumPetras)


// Task - 2
// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
console.log('2. >>>>>>>>')

const nailLength = 85

let hammerHits = []
let hammerDamage = 0
let nailsHammered = 0
// a)
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 18; j++) {
        hammerHits.push(rand(5, 20))
        hammerDamage += hammerHits[j]
        if (hammerDamage >= nailLength) {
            console.log('Vinis įkalta')
            nailsHammered++
            hammerDamage = 0
            break;
        }
    }
}
// b)
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 10; j++) {
//         hammerHits.push(rand(20, 30)*rand(0, 1))
//         hammerDamage += hammerHits[j]
//         if (hammerDamage >= nailLength) {
//             console.log('Vinis įkalta')
//             nailsHammered++
//             hammerDamage = 0
//             break;
//         }
//     }
// }

console.log('Įkalta vinių:', nailsHammered)
console.log('Reikėjo ' + hammerHits.length + ' plaktuko smūgių, kad įkalti 5 vinis.')
console.log(hammerHits)

// Task - 3
// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio.

console.log('3. >>>>>>>>')
let stringArray = []

for (let i = 0; i < 50; i++) {
    let number = rand(1, 200)
    let check = stringArray.includes(number)
    if (check === false) {
        stringArray.push(number);
    } else {
        while (check === true) {
            number = rand(1, 200)
            check = stringArray.includes(number)
            if (check === false) {
                stringArray.push(number)
            }
        }
    }
}

console.log('Sugeneruoti skaičiai:', stringArray.join(' '))
console.log('Sugeneruoti skaičiai didėjimo tvarka:', stringArray.sort(function(a, b){return a-b}).join(' '))

// Ieškau pirminių skaičių
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

let primeArray = []
stringArray.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      primeArray.push(element);
    }
});

console.log('Pirminiai skaičiai:', primeArray.sort(function(a, b){return a-b}).join(' '))
