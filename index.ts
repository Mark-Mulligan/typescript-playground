function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length - 1) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result = [i, j];
          break;
        }
      }
    }
  }

  return result;
}
