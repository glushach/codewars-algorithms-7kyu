// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  const arr = [];

  for(let i = start; i <= end; i++) {
    arr.push(`${i}`);
  }

  const result = arr.filter(item => !item.includes('5'))

  return result.length;
}