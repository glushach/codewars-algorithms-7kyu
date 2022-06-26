// https://www.codewars.com/kata/5815f7e789063238b30001aa
// Нужно мутировать входной массив, заменить все его элементы на средне арифметическое массива

function redistributeWealth(wealth) {
  // Mutate wealth
  const average = wealth.reduce((acc, i) => acc + i, 0) / wealth.length;

  wealth.forEach((item, idx, arr) => {
    arr[idx] = average;
  });
}