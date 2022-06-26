// https://www.codewars.com/kata/588e68aed4cff457d300002e

// НАПИСАТЬ АЛГОРИТМ ПОВОРТА ВРОВА ВЛЕВО ПО КОМПАСУ
function turn(current, target) {
  if (current === "N") {
    if (target === "E") {
      return "right"
    } else {
      return 'left'
    }
  }
  if (current === "S") {
    if (target === "W") {
      return "right"
    } else {
      return 'left'
    }
  }
  if (current === "E") {
    if (target === "S") {
      return "right"
    } else {
      return 'left'
    }
  }
  if (current === "W") {
    if (target === "N") {
      return "right"
    } else {
      return 'left'
    }
  }
}

// У меня еще не плохое решение, но самое лучшее это
/*
  const directions = {
    N: {W: "left", E: "right"},
    S: {W: "right", E: "left"},
    W: {N: "right", S: "left"},
    E: {N: "left", S: "right"},
  }

  function turn(current, target) {
    return directions[current][target]
  }
*/
// Решение других https://www.codewars.com/kata/588e68aed4cff457d300002e/solutions/javascript