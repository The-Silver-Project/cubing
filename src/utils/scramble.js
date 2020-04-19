/*
eslint-disable
no-bitwise,
no-multi-assign,
no-param-reassign,
no-plusplus
*/

function random(N) {
  return Math.floor(Math.random() * N);
}

function getScrambleString(seq, size) {
  let s = '';
  let j;
  for (let i = 0; i < seq.length - 1; i++) {
    if (i !== 0) s += ' ';
    let k = seq[i] >> 2;
    if (size <= 5) {
      s += 'DLBURFdlburf'.charAt(k);
    } else {
      j = k % 6; k = (k - j) / 6;
      s += 'DLBURF'.charAt(j);
      if (k) s += `<sub>${k + 1}</sub>`;
    }
    j = seq[i] & 3;
    if (j !== 0) s += " 2'".charAt(j);
  }
  return s;
}

/**
 * @param {number} cubeSize Size of cube
 * @param {number} scrambleLength Scramble length
 */
function scramble(cubeSize, scrambleLength) {
  if (!cubeSize || cubeSize < 0) cubeSize = 3;
  if (!scrambleLength || scrambleLength < 0) scrambleLength = 30;

  // Unknown settings
  const mult = false;

  const seq = []; // moves generated so far

  // tl=number of allowed moves (twistable layers) on axis -- middle layer ignored
  const tl = cubeSize & 1 ? cubeSize - 1 : cubeSize;

  // set up bookkeeping
  const axsl = new Array(tl); // movement of each slice
  const axam = [0, 0, 0]; // number of slices moved each amount
  let la = -1; // last axis moved

  // while generated sequence not long enough
  while (seq.length < scrambleLength) {
    // choose a different axis than previous one
    let ax;
    do { ax = random(3); } while (ax === la);

    // reset slice/direction counters
    for (let i = 0; i < tl; i++) axsl[i] = 0;
    axam[0] = axam[1] = axam[2] = 0;

    let moved = 0;

    // generate moves on this axis
    do {
      // choose random unmoved slice
      let slice;
      do { slice = random(tl); } while (axsl[slice] !== 0);

      // choose random amount
      const randomAxis = random(3);

      if (mult // multislice moves have no reductions so always ok
        || tl !== cubeSize // odd cube always ok since middle layer is reference
        || (axam[randomAxis] + 1) * 2 < tl // less than half the slices in same direction also ok
        || (
          (axam[randomAxis] + 1) * 2 === tl
          && axam[0] + axam[1] + axam[2] - axam[randomAxis] === 0
        ) // exactly half the slices move in same direction and no other slice moved
      ) {
        axam[randomAxis]++;// adjust direction count
        moved++;
        axsl[slice] = randomAxis + 1;// mark the slice has moved amount
      }
    } while (
      random(3) === 0 // 2/3 prob for other axis next,
      && moved < tl // must change if all layers moved
      && moved + seq.length < scrambleLength // must change if done enough moves
    );

    // append these moves to current sequence in order
    for (let sl = 0; sl < tl; sl++) {
      if (axsl[sl]) {
        let q = axsl[sl] - 1;

        // get semi-axis of this move
        let sa = ax;
        let m = sl;
        if (sl + sl + 1 >= tl) { // if on other half of this axis
          sa += 3; // get semi-axis (i.e. face)
          m = tl - 1 - m; // slice number counting from that face
          q = 2 - q; // opposite direction when looking at that face
        }
        // store move
        seq[seq.length] = (m * 6 + sa) * 4 + q;
      }
    }

    // avoid this axis next time
    la = ax;
  }

  return getScrambleString(seq, cubeSize);
}

export default scramble;
