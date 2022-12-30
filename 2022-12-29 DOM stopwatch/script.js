const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


// Variables

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for time

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Variables for set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped"

// Stopwatch function

function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }
    

    let displayTimer = document.getElementById('timer').innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


startStopBtn.addEventListener('click', function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";

    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped"
    }
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = '00:00:00';
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
})

