function twoSum(nums, target) {
  let seen = {}; // store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (seen.hasOwnProperty(diff)) {
      return [seen[diff], i]; // return the indices
    }

    seen[num] = i; // store the index of the number
  }

  return []; // in case no solution is found
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
