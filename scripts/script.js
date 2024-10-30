const timehtml = document.getElementById("time");
const datehtml = document.getElementById("date");

function update() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const year = now.getFullYear();
    let month = now.getMonth();
    month++;
    let monthname;
    if (month === 1) {
        monthname = "January";
    } else if (month === 2) {
        monthname = "February";
    } else if (month === 3) {
        monthname = "March";
    } else if (month === 4) {
        monthname = "April";
    } else if (month === 5) {
        monthname = "May";
    } else if (month === 6) {
        monthname = "June";
    } else if (month === 7) {
        monthname = "July";
    } else if (month === 8) {
        monthname = "August";
    } else if (month === 9) {
        monthname = "September";
    } else if (month === 10) {
        monthname = "October";
    } else if (month === 11) {
        monthname = "November";
    } else if (month === 10) {
        monthname = "December";
    }
    const day = now.getDate();

    hours = hours % 12;
    hours = hours ? hours : 12;

    timehtml.innerHTML = `${hours}:${minutes}:${seconds}`;
    datehtml.innerHTML = `${monthname} ${day}, ${year}`
}

update();
setInterval(() => {
    update();
}, 1000);