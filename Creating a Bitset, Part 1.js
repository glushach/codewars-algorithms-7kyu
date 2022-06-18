// https://www.codewars.com/kata/594c6ad5d909ca19e200002f

function byteToSet (byte) {
  console.log('byte.toString(2)', byte.toString(2)) //Входное значение переводит в двоичную систему
  console.log('padStart(8, \'0\')', byte.toString(2).padStart(8, '0')) // впереди строки допишет нули, чтобы вся чтрока была равна по длине 8


  return new Set(
    byte.toString(2)
      .padStart(8, '0')
      .split('')
      .map((el, idx) => +el ? idx : -1)
      .filter(el => el !== -1)
  );
}

// Здесь разбор на английском https://www.youtube.com/watch?v=xK75-26fpSg

console.log(byteToSet(0), new Set());
console.log(byteToSet(3), new Set([6, 7]));
console.log(byteToSet(255), new Set([0, 1, 2, 3, 4, 5, 6, 7]));

// node "Creating a Bitset, Part 1"