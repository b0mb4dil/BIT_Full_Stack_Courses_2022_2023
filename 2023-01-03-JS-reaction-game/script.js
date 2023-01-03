// Atsitiktinio skaičiaus funkcjia
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let counter = '0'; 
let counterComputer = '0';

// Atsitiktinės pozicijos ir spalvos funkcija
const randomPosition = () => {
    let x = rand(0, 450);
    let y = rand(0, 450);

    let r = rand(0, 255);
    let g = rand(0, 255);
    let b = rand(0, 255);
    document.querySelector('.box').style.display = 'block'
    document.querySelector('.box').style.top = x + 'px';
    document.querySelector('.box').style.left = y + 'px';
    document.querySelector('.box').style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
}


// Žaidėjo taškų skaičiavimas 
let playerClick = document.querySelector('.box').addEventListener('click', function() {
    if (seconds < 10) {
        counter++;
        counterComputer--;
        document.getElementById('player-score').innerText = counter;
    }
})



// ---------- Laikmatis ---------- //

// Variables

let seconds = 0;

// Variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped"

// Stopwatch function

function stopWatch() {
    document.querySelector('.time').style.display = 'flex';
    seconds++
    document.getElementById('timer').innerText = seconds;
    document.getElementById('player-score').innerText = counter;
    document.getElementById('computer-score').innerText = counterComputer;

    randomPosition();
    
    counterComputer++;
    document.getElementById('computer-score').innerText = counterComputer;
    
    if (seconds === 10) {
        if (counter > counterComputer) {
            document.getElementById('winner').style.display = 'flex';
            document.getElementById('winner').innerText = 'Laimėjo žaidėjas';
        } else if (counter === counterComputer) {
            document.getElementById('winner').style.display = 'flex';
            document.getElementById('winner').innerText = 'Lygiosios';
        } else {
            document.getElementById('winner').style.display = 'flex';
            document.getElementById('winner').innerText = 'Laimėjo kompiuteris';
        }
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
    }   
}


const timer = () => {
    seconds = 0;
    counter = 0;
    counterComputer = 0;
    document.getElementById('player-score').innerText = counter;
    document.getElementById('computer-score').innerText = counterComputer;
    document.getElementById('timer').innerText = seconds;
    document.getElementById('winner').style.display = 'none';


    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
    }
}


