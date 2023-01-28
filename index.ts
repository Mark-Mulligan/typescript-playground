function twoSum(numbers: number[], target: number): number[] {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    let sum = numbers[p1] + numbers[p2];

    if (sum === target) return [p1 + 1, p2 + 1];
    if (sum < target) p1++;
    if (sum > target) p2--;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
