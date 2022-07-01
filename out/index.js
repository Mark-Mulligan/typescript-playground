function twoSum(nums, target) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (i + 1 <= nums.length - 1) {
      for (var j = i + 1; j < nums.length; j++) {
        console.log(nums[i], nums[j]);
        if (nums[i] + nums[j] === target) {
          result = [i, j];
          break;
        }
      }
    }
  }
  return result;
}

console.log(twoSum([3, 2, 4], 6));
