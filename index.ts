function isValidSudoku(board: string[][]): boolean {
  // rows
  for (let i = 0; i < board.length; i++) {
    const numHash = {};
    for (let j = 0; j < board[i].length; j++) {
      const char = board[i][j];
      if (char === '.') continue;
      if (numHash[char]) return false;
      numHash[char] = 1;
    }
  }

  // columns
  for (let i = 0; i < board.length; i++) {
    const numHash = {};
    for (let j = 0; j < board[i].length; j++) {
      const char = board[j][i];
      if (char === '.') continue;
      if (numHash[char]) return false;
      numHash[char] = 1;
    }
  }

  // squares
  for (let i = 0; i < 9; i++) {
    let startingRow = Math.floor(i / 3) * 3;
    let startingCol = (i % 3) * 3;
    const numHash = {};

    for (let row = startingRow; row < startingRow + 3; row++) {
      for (let col = startingCol; col < startingCol + 3; col++) {
        const char = board[row][col];
        if (char === '.') continue;
        if (numHash[char]) return false;
        numHash[char] = 1;
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '7', '.', '.', '.', '.', '6', '.'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
