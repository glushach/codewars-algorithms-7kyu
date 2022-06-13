// https://www.codewars.com/kata/5b2e5a02a454c82fb9000048
function getNeighbourhood(type, matrix, coordinates) {
  if (matrix.length === 0) return [];
  const innerArr = matrix[coordinates[0]];
  if (innerArr === undefined) return [];
  const el = innerArr[coordinates[1]];

  if (el === undefined) return [];

  /* ++++++++++++++++++++++ */
  let topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight
  if (matrix[coordinates[0] - 1] !== undefined) {
    topLeft = matrix[coordinates[0] - 1][coordinates[1] - 1];
  }
  if (matrix[coordinates[0] - 1] !== undefined) {
    top = matrix[coordinates[0] - 1][coordinates[1]];
  }
  if (matrix[coordinates[0] - 1] !== undefined) {
    topRight = matrix[coordinates[0] - 1][coordinates[1] + 1];
  }
  if (matrix[coordinates[0]] !== undefined) {
    left = matrix[coordinates[0]][coordinates[1] - 1];
  }
  if (matrix[coordinates[0]] !== undefined) {
    right = matrix[coordinates[0]][coordinates[1] + 1];
  }
  if (matrix[coordinates[0] + 1] !== undefined) {
    bottomLeft = matrix[coordinates[0] + 1][coordinates[1] - 1];
  }
  if (matrix[coordinates[0] + 1] !== undefined) {
    bottom = matrix[coordinates[0] + 1][coordinates[1]];
  }
  if (matrix[coordinates[0] + 1] !==undefined) {
    bottomRight = matrix[coordinates[0] + 1][coordinates[1] + 1];
  }

  if (type === 'moore') {
    const result = [
      topLeft, top, topRight,
      left, right,
      bottomLeft, bottom, bottomRight
    ];

    return result.filter(item => item !== undefined);
  } else {
    const result = [
      top, left, right, bottom
    ];

    return result.filter(item => item !== undefined);
  }


}

console.log(getNeighbourhood('moore',
  [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ],
  [ 1, 1 ]
))
console.log(getNeighbourhood("moore",
  [[0,1,2],[3,4,5],[6,7,8]],
  [0,0]))
console.log(getNeighbourhood("von_neumann",
  [[0,1,2],[3,4,5],[6,7,8]],
  [0,0]))

// РЕШЕНИЕ ДРУГИХ ЛЮДЕЙ https://www.codewars.com/kata/5b2e5a02a454c82fb9000048/solutions/javascript

// node "2D Cellular Neighbourhood"