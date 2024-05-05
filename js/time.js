const clock = document.getElementById("clock");
const dateToday = document.getElementById("date");

function getTime() {
  const timeNow = new Date();
  getDate(timeNow);
  getClock(timeNow);
}

function getDate(timeNow) {
  const year = String(timeNow.getFullYear());
  const month = String(timeNow.getMonth()+1).padStart(2, "0");
  const date = String(timeNow.getDate()).padStart(2, "0");

  dateToday.innerHTML = `${year}.${month}.${date}`;
}

function getClock(timeNow) {
  const hours = String(timeNow.getHours()).padStart(2, "0");
  const mins = String(timeNow.getMinutes()).padStart(2, "0");
  const secs = String(timeNow.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours}:${mins}:${secs}`;
}

getTime();
setInterval(getTime, 1000);