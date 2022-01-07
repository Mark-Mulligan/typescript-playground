const flat = <T>(inputArr: T[][]): T[] => {
  let result = [];

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      result.push(inputArr[i][j]);
    }
  }

  return result;
};

console.log(
  flat([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
