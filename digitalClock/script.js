function updateClock() {
    const time = new Date();
    let hours = time.getHours();
    const meridiem = hours>=12 ? "PM" : "AM";
    hours = hours%12 || 12; // If hours%12 is false (ie. 0) then return 12;
    hours = hours.toString().padStart(2, 0);
    const min = time.getMinutes().toString().padStart(2, 0);
    const sec= time.getSeconds().toString(). padStart(2, 0);

    const timeString = `${hours}:${min}:${sec}`;
    document.getElementById("clock").textContent = timeString; 
}

updateClock();
setInterval(updateClock, 1000);