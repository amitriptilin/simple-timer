class Timer {
    constructor(display) {
        this.display = display;
        this.timerId = null;
        this.isRunning = false;
        this.time = 0;
        this.startStopBtn = document.getElementById('start-btn');
        this.resetBtn = document.getElementById('reset-btn');

        this.startStopBtn.addEventListener('click', () => this.startStop());
        this.resetBtn.addEventListener('click', () => this.reset());
    }
    
    startStop() {
        if(this.isRunning) {
            this.stop()
        } else {
            this.start()
        }
    }

    start() {
        this.isRunning = true;
        this.startStopBtn.textContent = 'Pause';
        this.timerId = setInterval(() => {
            this.time++;
            this.updateDisplay();
        }, 1000);
    }

    stop() {
        this.isRunning - false;
        this.startStopBtn.textContent = 'Start';
        clearInterval(this.timerId);
    }

    reset() {
        this.stop;
        this.time = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const hours = Math.floor(this.time / 3600);
        const minutes = Math.floor((this.time % 3600) / 60);
        const seconds = this.time % 60;

        document.getElementById('hours-timer').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes-timer').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds-timer').innerHTML = String(seconds).padStart(2, '0');
    }
}

const display = document.querySelector('.timer');

new Timer(display);