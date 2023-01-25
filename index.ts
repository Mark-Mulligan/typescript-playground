function generateParenthesis(n: number): string[] {
  const stack: any = [];
  const result: any = [];

  const backTrack = (openP: number, closedP: number) => {
    if (openP === n && closedP === openP) {
      result.push(stack.join(''));
      return;
    }

    if (openP < n) {
      stack.push('(');
      backTrack(openP + 1, closedP);
      stack.pop();
    }

    if (closedP < openP) {
      stack.push(')');
      backTrack(openP, closedP + 1);
      stack.pop();
    }
  };

  backTrack(0, 0);
  return result;
}

console.log(generateParenthesis(3));
