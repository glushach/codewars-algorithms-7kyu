// https://www.codewars.com/kata/595249fc10b69f4f7a000003

function toQueryString (obj) {

  let string = '';

  for(let k in obj) {
    if(typeof obj[k] !== 'object') {
      string += `${k}=${obj[k]}&`;
    } else {
      obj[k].forEach(item => {
        string += `${k}=${item}&`;
      });
    }
  }
  return string.slice(0, -1);
}