"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
/**
 * @returns true if the input is palindrome, false otherwise.
 */
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
//# sourceMappingURL=index.js.map