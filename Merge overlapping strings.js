// https://www.codewars.com/kata/61c78b57ee4be50035d28d42
function mergeStrings(first, second){
  console.log(first, second)

  if (first === second) return first;
  const secondLength = second.length;


  let tail;

  for (let i = 0; i < second.length; i++) {
    if ( first.includes(second.slice(0, i)) ) {
      tail = second.slice(0, i);
    }
  }


  const firstLenght = first.length;
  const tailLenght = tail.length;

  let ENDFIRST = first.slice(firstLenght - tailLenght)

  console.log(ENDFIRST)

  if (ENDFIRST[0] === tail[0]) {
    second = second.slice(tailLenght)
  } if (ENDFIRST[0] ===  'a' && ENDFIRST[1] === 'a') {
    console.log('YES')
  }

  return first + second;
}



// РЕШЕНИЕ ДРУГИХ ОЧЕНЬ ТЯЖЕЛОЕ:
// https://www.codewars.com/kata/61c78b57ee4be50035d28d42/solutions