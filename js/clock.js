// функция для вывода времени / time output function
const updateClock = () => {
    const now = new Date;

    // получение текущего времени / getting the current time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
};

setInterval(updateClock, 1000);
updateClock();

