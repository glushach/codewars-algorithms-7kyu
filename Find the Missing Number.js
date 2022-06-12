// codewars.com/kata/57f5e7bd60d0a0cfd900032d
function missingNo(nums) {
  nums.sort((a, b) => a - b)

  if (nums[0] !== 0) return 0;
  if (nums[nums.length - 1] !== 100) return 100;

  for(let i = 1; i < nums.length; i++) {

    let prev = nums[i - 1];
    let current = nums[i] - 1;

    if (prev !== current) {
      return nums[i] - 1;
    }
  }
}

// РЕШЕНИЕ ДРУГИХ
// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/solutions/javascript