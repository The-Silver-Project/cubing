/* eslint-disable prefer-template */
function padZero(n) {
  return n >= 10 ? `${n}` : '0' + n;
}

function getTimestring(timeInMs) {
  let time = Math.floor(timeInMs / 10);
  const ms = time - 100 * Math.floor(time / 100); time = Math.floor(time / 100);
  const s = time - 60 * Math.floor(time / 60); time = Math.floor(time / 60);
  const m = time - 60 * Math.floor(time / 60); time = Math.floor(time / 60);
  const h = time;

  return (h ? padZero(h) + ':' : '')
    + (m ? padZero(m) + ':' : '')
    + padZero(s) + ':'
    + padZero(ms);
}

module.exports = {
  getTimestring,
};
