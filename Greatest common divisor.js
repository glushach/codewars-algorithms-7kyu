// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

// Найти набольший общий делитель (HOD), применялась рекурсия для оптимозации, чтобы не создвать 4 цикла
function mygcd(x,y) {
  if (y > x) return mygcd(y, x);
  if (!y) return x;
  return mygcd(y, x % y);
}

console.log(mygcd(30,12),6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)

// node "Greatest common divisor"