// https://www.codewars.com/kata/61c78b57ee4be50035d28d42
/*
  endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках,
  возвращая, соответственно, true или false
*/
const mergeStrings = (a, b) => {
  for (let i = b.length; i > 0; i--) {
    if (a.endsWith(b.slice(0, i))) { // уменьшает строку на 1 символ с конца, где length больше на 1 последнего индекса
      return a + b.slice(i);
    }
  }
  return a + b;
}

console.log(mergeStrings("abcde", "cdefgh")) // abcdefgh
console.log(mergeStrings("abaab", "aabab"))  // abaabab
console.log(mergeStrings("abc", "def"))      // abcdef
console.log(mergeStrings("abc", "abc"))      // abc

// node "Merge overlapping strings"


// РЕШЕНИЕ ДРУГИХ ОЧЕНЬ ТЯЖЕЛОЕ:
// https://www.codewars.com/kata/61c78b57ee4be50035d28d42/solutions