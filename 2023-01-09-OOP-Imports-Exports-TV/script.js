class Television {
    constructor(manufacturer, channel = 1, volume = 50) {
        this.manufacturer = manufacturer;
        this.channel = channel;
        this.volume = volume;
        this.status = false;
    }


    // Statusas parodo ar įjungtas arba išjungtas televizorius
    setStatus() {
        this.status = this.status ? false : true;
    }


    // Metodas garsui nustatyti
    setVolume(volume) {
        if (volume < 0 || volume > 100 || typeof volume != "number") return;

        this.volume = volume;
    }


    // Metodas kanalui nustatyti
    setChannel(channel) {
        if (channel < 1 || channel > 50 || typeof channel != "number") {
            this.channel = 1;
        } else {
            this.channel = channel;
        };
        // If sąlygos aprašymas su 'ternary operatoriumi'
        // this.channel = (channel < 1 || channel > 50 || typeof channel != "number") ? 1 : channel
    }


    // Metodas gamykliniams nustatymams
    setFactoryReset() {
        this.channel = 1;
        this.volume = 50;
    }

    // Metodas pažiūrėti informaciją
    previewInfo() {
        if (!this.status) {
            return '';
        } else {
            return `${this.manufacturer} TV is currently showing channel ${this.channel}. Volume: ${this.volume}`;
        }
    }

}

// const tv = new Television('Samsung');
// console.log(tv);


// // Keičiamas garsas
// tv.setVolume(99);
// console.log(tv);


// // Keičiamas kanalas
// tv.setChannel(15)
// console.log(tv);

// console.log(tv.previewInfo());

// tv.setFactoryReset();
// console.log(tv.previewInfo());



const powerButton = document.querySelector('.power-button');
const channelUp = document.querySelector('.channel-up');
const channelDown = document.querySelector('.channel-down');
const soundUp = document.querySelector('.sound-up');
const soundDown = document.querySelector('.sound-down');
const infoButton = document.querySelector('.info');



const tv = new Television('Samsung');



powerButton.addEventListener('click', function() {
    tv.setStatus();
    if (tv.status === true) {
        document.querySelector('#output').style.backgroundColor = 'azure';
        showInfoBtn();
        setTimeout(showInfoBtn, 2000);
    } else {
        document.querySelector('#output').style.backgroundColor = '';
        document.getElementById('output').innerText = '';
        showInfoBtn();
    }

    
})

channelUp.addEventListener('click', function() {
    if (tv.status === true) {
        tv.setChannel(tv.channel + 1);
        showInfoBtn();
    }
})

channelDown.addEventListener('click', function() {
    if (tv.status === true) {
        tv.setChannel(tv.channel - 1);
        showInfoBtn();
    }
})

soundUp.addEventListener('click', function() {
    if (tv.status === true) {
        tv.setVolume(tv.volume + 1);
        showInfoBtn();
    }
})

soundDown.addEventListener('click', function() {
    if (tv.status === true) {
        tv.setVolume(tv.volume - 1);
        showInfoBtn();
    }
})


showInfoBtn = () => {
    if (tv && document.getElementById('output').innerText != tv.previewInfo()) {
        document.getElementById('output').innerText = tv.previewInfo();
        console.log(tv.previewInfo());
    } else {
        if (tv && document.getElementById('output').innerText === tv.previewInfo()) {
            document.getElementById('output').innerText = '';
            console.log('Paslepiu info');
        }
    }
}

infoButton.addEventListener('click', function() {
    if (tv && document.getElementById('output').innerText != tv.previewInfo()) {
        document.getElementById('output').innerText = tv.previewInfo();
        console.log(tv.previewInfo());
    } else {
        if (tv && document.getElementById('output').innerText === tv.previewInfo()) {
            document.getElementById('output').innerText = '';
            console.log('Paslepiu info');
        }
    }
})
