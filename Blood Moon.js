// https://www.codewars.com/kata/5cba04533e6dce000eaf6126

function bloodMoon(r){
  const ED2 = Math.pow(r, 2) / 2;
  const sector = Math.PI * ED2 / 4;
  const treygolnic = ED2 / 2;
  const littleMoons = sector - treygolnic

  const radius = r /2;
  const BigMoons = Math.PI *  Math.pow(radius, 2) / 2

  return BigMoons - littleMoons;
}

console.log(bloodMoon(0), 0);
console.log(bloodMoon(1), 0.25);
console.log(bloodMoon(2), 1);
console.log(bloodMoon(3), 2.25);

// node "Blood Moon"