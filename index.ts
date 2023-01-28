function isPalindrome(s: string): boolean {
  let formattedS = s.toLowerCase().replace(/[^\w]|_/g, '');
  let p1 = 0;
  let p2 = formattedS.length - 1;

  console.log(formattedS);

  while (p1 < p2) {
    if (formattedS[p1] !== formattedS[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}

console.log(isPalindrome('ab_a'));
