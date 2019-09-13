const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default (currentDate, targetDate) => ({
  days: parseInt((targetDate - currentDate) / DAY),
  hours: parseInt(((targetDate - currentDate) % DAY) / HOUR),
  minutes: parseInt(((targetDate - currentDate) % HOUR) / MINUTE),
  seconds: parseInt(((targetDate - currentDate) % MINUTE) / SECOND),
});
