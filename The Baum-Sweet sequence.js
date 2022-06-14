function* baumSweet() {
  yield 1;

  let i = 1
  while(true) {
    yield i
      .toString(2).split(/1/g)
      .some(v => v.length % 2) ? 0 : 1;
    i++
  }
}
// РЕШЕНИЕ ДРУГИХ https://www.codewars.com/kata/5d2659626c7aec0022cb8006/solutions/javascript


// node "The Baum-Sweet sequence"