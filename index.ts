function topKFrequent(nums: number[], k: number): number[] {
  const numsHash: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsHash[nums[i]]) numsHash[nums[i]] += 1;
    else numsHash[nums[i]] = 1;
  }

  const sortedEntires = Object.entries(numsHash).sort((a, b) => b[1] - a[1]);
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(Number(sortedEntires[i][0]));
  }
  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
