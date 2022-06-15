// https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2

function direction(facing, turn) {
  const facings = {
    N: 0,
    NE: 45,
    E: 90,
    SE: 135,
    S: 180,
    SW: 225,
    W: 270,
    NW: 315
  }

  // от 0 до 1080 - по часовой стрелке
  // от 0 до -1080 - против часовой стрелке
  let value = facings[facing]; // наравление не старте

  let shift = value + turn;
  console.log(shift)
  if (shift === 360) return 'N';
  if (shift > 360) {
    for (shift; shift > 360;){
      shift -= 360;
    }
  } else {
    for (shift; shift < -360;){
      shift += 360;
    }
  }

  if (shift < 0) {
    shift = 360 + shift
  }

  if (shift === 360) return 'N'

  for (let k in facings) {
    if (facings[k] === shift) {
      return k;
    }
  }
}

// console.log(direction("S", 180),  "N");
// console.log(direction("SE", -45), "E");
// console.log(direction("W", 495),  "NE");
// console.log(direction("N", -450),  "W");
console.log(direction("W", 450), 'N');

// РЕШЕНИЕ ДРУГИХ https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2/solutions/javascript

// node "Turn with a Compass"