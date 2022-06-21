// https://www.codewars.com/kata/5c97be7d856e611dbb78805f
function scoreOfDive(scores, tariff) {
  return (scores.sort((a, b) => a - b).slice(2, -2).reduce((acc, item) => acc + item, 0) * tariff).toFixed(2);
}

// Обрезать первые 2 меньшие и последние 2 большие элемента массива, вернуть сумму умноженную на tariff, с двумя цифрами после точки