// https://www.codewars.com/kata/55b6a3a3c776ce185c000021

function transpose(song, interval){
  // interval от -12 до 12
  const withSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const withoutSharp = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

  const indexes = [];
  for(let i = 0; i < song.length; i++) {
    if (song[i].length === 2 && !song[i].includes('#')) {
      let idx = withoutSharp.indexOf(song[i]);
      idx += interval;
      indexes.push(idx);
    } else {
      let idx = withSharp.indexOf(song[i]);
      idx += interval;
      indexes.push(idx);
    }
  }

  indexes.forEach((item, idx, arr) => {
    if (item >= 12) {
      arr[idx] = item - 12;
    } else if (item >= -12 && item < 0) {
      arr[idx] = 12 + item
    }
  });

  indexes.forEach((item, idx, arr) => {
    arr[idx] = withSharp[item];
  });

  return indexes;
}

console.log(transpose(['A'], 1), ['A#']);
console.log(transpose(['E'], 5), ['A']);
console.log(transpose(['Ab', 'Gb'] , 2), ['A#', 'G#']);
console.log(transpose(['Bb', 'C#', 'E'] , -4), ['F#', 'A', 'C']);
// node "Transposing a song"

// Ответы других программистов https://www.codewars.com/kata/55b6a3a3c776ce185c000021/solutions/javascript