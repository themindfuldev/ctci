// Frequency table approach, O(n) time and O(n) space
function isPalindromePermutation1(string) {
    const sanitized = string.replace(/\s/g, '').toLowerCase();

    const frequency = {};
    for (const char of sanitized) {
        frequency[char] = frequency[char]+1 || 1;
    }
    
    const hasMiddle = sanitized.length % 2 === 1;
    if (hasMiddle) {
        let hasFoundMiddle = false;
        for (const value of Object.values(frequency)) {
            if (value % 2 !== 0) {
                if (hasFoundMiddle) {
                    return false;
                }
                hasFoundMiddle = true;
            }
        }
    }
    else {
        for (const value of Object.values(frequency)) {
            if (value % 2 !== 0) {
                return false;
            }
        }
    }
    return true;
}

console.log('Frequency table approach');
console.log(isPalindromePermutation1('Tact Coa'));
console.log(isPalindromePermutation1('Tacot Coa'));
console.log(isPalindromePermutation1('Jane got a gun'));

/*
// Bit vector approach, if restricted to a-z O(n) time and O(1) space
function isPalindromePermutation2(string) {
    const sanitized = string.replace(/\s/g, '').toLowerCase();

    let vector = 0;
    for (const char of sanitized) {
        frequency[char] = frequency[char] + 1 || 1;
    }

    if (sanitized.length % 2 === 0) {
        for (const [key, value] of Object.entries(frequency)) {
            if (value % 2 !== 0) {
                return false;
            }
        }
    }
    else {
        let hasFoundMiddle = false;
        for (const [key, value] of Object.entries(frequency)) {
            if (value % 2 !== 0) {
                if (hasFoundMiddle) {
                    return false;
                }
                hasFoundMiddle = true;
            }
        }
    }
    return true;
}

console.log('Bit vector approach');
console.log(isPalindromePermutation2('Tact Coa'));
console.log(isPalindromePermutation2('Tacot Coa'));
console.log(isPalindromePermutation2('Jane got a gun'));
*/