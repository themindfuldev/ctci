// Frequency table approach, O(n) time and O(n) space
function isPalindromePermutation1(string) {
    const sanitized = string.replace(/\s/g, '').toLowerCase();

    const oddOccurrences = {};
    for (const char of sanitized) {
        oddOccurrences[char] = !oddOccurrences[char];
    }
    
    const hasMiddle = sanitized.length % 2 === 1;
    let hasFoundMiddle = false;
    for (const isOdd of Object.values(oddOccurrences)) {
        if (isOdd) {
            if (!hasMiddle || hasFoundMiddle) {
                return false;
            }
            hasFoundMiddle = true;
        }
    }

    return true;
}

console.log('Frequency table approach');
console.log(isPalindromePermutation1('Tact Coa'));
console.log(isPalindromePermutation1('Tacot Coa'));
console.log(isPalindromePermutation1('Jane got a gun'));

// Bit vector approach, if restricted to a-z O(n) time and O(1) space
function isPalindromePermutation2(string) {
    const sanitized = string.replace(/\s/g, '').toLowerCase();

    let oddOccurrences = 0;
    const initialCode = 'a'.charCodeAt(0);
    for (const char of sanitized) {
        const charCode = char.charCodeAt(0) - initialCode;
        oddOccurrences ^= 1 << charCode;
    }

    const hasMiddle = sanitized.length % 2 === 1;
    if (!hasMiddle) {
        return oddOccurrences === 0;
    }
    else {
        return Number.isInteger(Math.log2(oddOccurrences));
    }

    return true;
}

console.log('Bit vector approach');
console.log(isPalindromePermutation2('Tact Coa'));
console.log(isPalindromePermutation2('Tacot Coa'));
console.log(isPalindromePermutation2('Jane got a gun'));
