function isAllUpper(text: string): boolean {
  const upperCaseRegex = /^[^a-z]+$/;

  if (text.length > 0) {
    let match = text.match(upperCaseRegex);
    if (match) return match[0].length === text.length;
    return false;
  }

  return true;
}

console.log(isAllUpper('ALL UPPER'));
console.log(isAllUpper('all lower'));
