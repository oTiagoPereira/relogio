function updateDay() {
  const days = document.querySelectorAll(".day");
  const now = new Date();
  const dayIndex = now.getDay();

  days.forEach((day, index) => {
    if (index === dayIndex) {
      day.style.opacity = "1";
    } else {
      day.style.opacity = "0.25";
    }
  });
}
setInterval(updateDay, 1000);

function clock() {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}
setInterval(clock, 1000);
