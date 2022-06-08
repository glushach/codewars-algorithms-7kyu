// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
/* Трансформация объектов в массиве */
function greetDevelopers(list) {
  return list.map(item => {
    item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`;
    return item
  });
}

// node "Coding Meetup 2.js", можно без раширения .js

// git add "Coding Meetup 2.js", обязательно с раширением .js при добавлении в git index
// git commit "Coding Meetup 2.js" -m"feat solve task Hider-Order-Functions", создание коммита

