dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

// const newYearDate = new Date('Jan 1, 2023 00:00:00').getTime();
const newYearTime = new Date('Jan 1, 2023 00:00:00').getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  //   console.log(now, newYearDate);
  const gap = newYearTime - now;
  //   console.log(gap);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  //   console.log(d);
  const h = Math.floor((gap % day) / hour);
  //   console.log(h);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000);
}
