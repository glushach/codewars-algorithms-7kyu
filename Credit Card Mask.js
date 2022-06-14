// https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
  const arrCC = cc.split('');

  for (let i = 0; i < arrCC.length - 4; i++) {
    arrCC[i] = '#'
  }

  return arrCC.join('')

}
