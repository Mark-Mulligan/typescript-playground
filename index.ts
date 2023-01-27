function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  const sortedNums = nums.sort((a, b) => a - b);

  let longestSequence = 1;
  let currentSequence = 1;
  let previousNum = nums[0];

  for (let i = 1; i < sortedNums.length; i++) {
    const currentNum = sortedNums[i];
    if (currentNum === previousNum) continue;

    if (currentNum === previousNum + 1) {
      currentSequence++;
      if (currentSequence > longestSequence) longestSequence = currentSequence;
    } else {
      currentSequence = 1;
    }

    previousNum = sortedNums[i];
  }

  return longestSequence;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
