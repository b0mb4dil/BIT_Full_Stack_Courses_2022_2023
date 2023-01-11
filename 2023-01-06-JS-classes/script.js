function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


class Vaisius {
    constructor() {
        this.dydis = rand(5,25);
        this.id = rand(1000000, 9999999);
        this.prakastas = false;
    }

    prakasti() {
        this.prakastas = true;
        return 'Vaisius ką tik buvo prakąstas.'
    }
}

let grauztukai = [];



const obuolys = new Vaisius();

console.log('Ar vaisius prakąstas?', obuolys.prakastas)
console.log(obuolys.prakasti())
console.log('Ar vaisius prakąstas?', obuolys.prakastas)
console.log('')


class Krepsys {
    static vaisiai = [];

    static pripildyti() {
        if(this.vaisiai.length <= 20) {
            for (let i = 0; this.vaisiai.length + 1 <= 20; i++) {
                this.vaisiai[this.vaisiai.length] = new Vaisius();
            }
        }
        this.vaisiai.sort((a, b) => b.dydis - a.dydis);
    }

    static isimti() {
        // Išimtą vaisių perkeliu į 'grauztukai' masyvą
        // grauztukai[grauztukai.length-1].id =  this.vaisiai[0].id;
        grauztukai.push(this.vaisiai[0])
        grauztukai[grauztukai.length-1].prakastas = true;


        return this.vaisiai.splice(0, 1);
    }
}

// Pripildau masyvą 20-imi vaisių
Krepsys.pripildyti()

// Tikrinu masyvą
console.log('Gautas vaisių masyvas: ', Krepsys.vaisiai)

// Išimu vieną vaisių
console.log('Vaisius, kurį reikia išimti: ', Krepsys.vaisiai[0])
console.log('Išimtas pirmas vaisius: ', Krepsys.isimti())

// Tikrinu masyvą po didžiausio vaisiaus išėmimo
console.log('Masyvas po išėmimo: ', Krepsys.vaisiai)

// Vėl papildau masyvą
Krepsys.pripildyti()

// Tikrinu papildytą masyvą
console.log('Masyvas po papildymo: ', Krepsys.vaisiai)

// Išimu antrą vaisių
console.log('Vaisius, kurį reikia išimti: ', Krepsys.vaisiai[0])
console.log('Išimtas antras vaisius: ', Krepsys.isimti())

// Vėl papildau masyvą
Krepsys.pripildyti()

// Tikrinu papildytą masyvą
console.log('Masyvas po papildymo: ', Krepsys.vaisiai)

// Tikrinu 'grauztukai' masyvą
console.log('Grauztukai: ',grauztukai)









    
