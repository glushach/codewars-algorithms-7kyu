// Least Larger
// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
function leastLarger(array,index) {
  const el = array[index];
  const arr = array
    .map((item, idx) => [idx, item])
    .sort((a, b) => a[1] - b[1])
    .filter(item => item[1] > el);

  if (arr.length > 0) {
    if (arr[0].length > 0) {
      return arr[0][0];
    } else {
      return -1;
    }
  } else {
    return -1;
  }

}

// Вернуть индекс наименьшего числа, которое больше, чем элемент с входным индексом
// Если нет найменьшего числа, которое больше, чем элемент с входным индексом, то вернуть -1