setInterval(logClockTime, 1000);

function logClockTime() {
  let time = getClockTime();
  console.clear();
  console.log(time);
}

function getClockTime() {
  let date = new Date();
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}

// functional approach
const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

const onSecond = () => 1000;
const getCurrentDate = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});
const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});
const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format.replace("hh", time.hours).replace("mm", time.minutes).replace("ss", time.seconds).replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

const convertToCivilianTime = (clockTime) => compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(prependZero("hours"), prependZero("minutes"), prependZero("seconds"))(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentDate,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    onSecond()
  );

startTicking();
