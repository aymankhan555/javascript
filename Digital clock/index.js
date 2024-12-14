
function updateClock() {
    const current = new Date();
    let hours = current.getHours();
    const median = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);

    const time = `${hours}:${minutes}:${seconds} ${median}`;
    document.getElementById('clock').textContent = time;
}
updateClock();
setInterval(updateClock, 1000);