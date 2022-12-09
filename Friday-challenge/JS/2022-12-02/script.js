function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task - 1
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite rand() funkcija nuo 5 iki 3000.
console.log('-----Task - 1-----')
console.log('------------------')


let candleQuantity = rand(5, 3000)
console.log(`Žvakių kiekis: ${candleQuantity}`)

if (candleQuantity > 1000 && candleQuantity < 2000) {
    let candlePrice = candleQuantity * 1 * 0.97;
    console.log(`Žvakių kaina su 3% nuolaida: ${candlePrice}`);
} else if (candleQuantity > 2000) {
    let candlePrice = candleQuantity * 1 * 0.96;
    console.log(`Žvakių kaina su 4% nuolaida: ${candlePrice}`);
} else {
    let candlePrice = candleQuantity * 1 ;
    console.log(`Žvakių kaina be nuolaidos: ${candlePrice}`);
}

// Task - 2
// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100. Suskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
console.log('-----Task - 2-----')
console.log('------------------')

let num1 = rand(0, 100)
let num2 = rand(0, 100)
let num3 = rand(0, 100)
console.log(`Skaičiai: ${num1}, ${num2}, ${num3}`)
let average = Math.floor((num1 + num2 + num3)/3)
console.log(`Trijų skaičių vidurkis: ${average}`)

if (num1 < 10 || num1 > 90) {
    num1 = 0;
} if (num2 < 10 || num2 > 90) {
    num2 = 0;
} if (num3 < 10 || num3 > 90) {
    num3 = 0;
}
 
let averageBelowAbove = Math.floor((num1 + num2 + num3)/3)

console.log(`Vidurkis be < 10 ir > 90 skaičių: ${averageBelowAbove}`)

// Task - 3
// Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją rand(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
console.log('-----Task - 3-----')
console.log('------------------')

let randHour = rand(0, 23)
let randMinute = rand(0, 59)
let randSecond = rand(0, 59)



console.log(`Sugeneruotas laikas: ${randHour}h, ${randMinute}min, ${randSecond}s.`)

let additionalSeconds = rand(0, 300)
console.log(`Papildomos sekundės: ${additionalSeconds}s`)

function newTime(h, min, s, add) {
    h = h * 3600;
    min = min * 60;
    let newTime = h + min + s + add

    newHour =  Math.floor(newTime / 3600)
    newMinute = Math.floor((newTime - (newHour * 3600)) / 60)
    newSecond = (newTime - (newHour * 3600) - (newMinute * 60))

    if (newHour >= 24 && newMinute > 0 && newSecond > 0) {
        newHour = 0;
    }
    console.log(`Naujas laikas: ${newHour}h, ${newMinute}min, ${newSecond}s.`)
}

newTime(randHour, randMinute, randSecond, additionalSeconds)