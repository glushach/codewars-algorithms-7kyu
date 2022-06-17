// https://www.codewars.com/kata/5828713ed04efde70e000346

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  const object = {};

  list.forEach(item => {
    if(object.hasOwnProperty(item.language)) {
      object[item.language] += 1;
    } else {
      object[item.language] = 1;
    }

  });

  return object;
}

// РЕШЕНИЕ ДРУГИХ
// https://www.codewars.com/kata/5828713ed04efde70e000346/solutions/javascript