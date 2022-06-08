// 437 Kata Found, 7 kyu, Algorithms

// https://www.codewars.com/kata/585c50e75d0930e6a7000336/train/javascript
/*
  Coprime Validator найти единаственный найбольший общий делитель без остачи.
  Это должна быть 1, вернуть true. Если есть еще кроме 1, то вернуть false
*/

function isCoprime(x, y) {
  const xArr = [];
  const yArr = [];
  const output = [];

  for(let i = 1; i <= x; i++) {
    if (x % i === 0) {
      xArr.push(i);
    }
  }

  for(let i = 1; i <= y; i++) {
    if (y % i === 0) {
      yArr.push(i);
    }
  }

  for (let i = 0; i < xArr.length; i++) {
    if (yArr.includes(xArr[i])) {
      output.push(xArr[i])
    }
  }

  return output.length === 1;
}

/*
  find в цикле не используй. find возвращает значение первого найденного в массиве
  элемента, которое удовлетворяет условию переданному в callback функции. В противном
  случае возвращается undefined.
      yArr.find(item => {
      if (item % i === 0) {
        console.log(item)
      }
    })
*/

/*
  Если вам нужно найти позицию элемента используйте yArr.indexOf(элемент)
  Возращает первый индекс элемента или -1, если его нет
*/

/*
  Если вам нужно определить наличие элемента в массиве, используйте yArr.includes(элемент).
  Возращает true, если элемент есть или false если элемента нет
*/

console.log(isCoprime(20, 27), true, 'isCoprime(20, 27)')
console.log(isCoprime(12, 39), false, 'isCoprime(12, 39)')
console.log(isCoprime(17, 34), false, 'isCoprime(17, 34)')
console.log(isCoprime(13, 78), false, 'isCoprime(13, 78)')


/* Чужие решения
   https://www.codewars.com/kata/585c50e75d0930e6a7000336/solutions/javascript
*/

// node "Coprime Validator"

