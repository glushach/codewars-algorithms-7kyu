function dropWhile(arr, predFn) {
  let i = 0;
  for (; i < arr.length; i++) {
    if(!predFn(arr[i])) {
      break;
    }
  }

  return arr.slice(i);
}
