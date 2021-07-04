/**
 * @returns true if the input is palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
  return str == str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('madan'));
