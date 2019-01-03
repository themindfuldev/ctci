// Frequency table approach - O(n) time and O(n) space (worst case)
function isPermutation1(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    const frequency = {};

    for (const char1 of string1) {
        frequency[char1] = frequency[char1]+1 || 1;
    }

    for (const char2 of string2) {
        if (!frequency[char2]) {
            return false;
        }
        frequency[char2]--;
    }

    return true;
}

console.log('Frequency table approach');
console.log(isPermutation1('tiago', 'ogait'));
console.log(isPermutation1('potato', 'tomato'));
console.log(isPermutation1('banana', 'ananas'));
console.log(isPermutation1('sublime', 'limebus'));

// Sort approach - O(n ln g) time and O(1) space
function isPermutation2(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    return sortedString1 === sortedString2;
}

console.log('Sort approach');
console.log(isPermutation1('tiago', 'ogait'));
console.log(isPermutation1('potato', 'tomato'));
console.log(isPermutation1('banana', 'ananas'));
console.log(isPermutation1('sublime', 'limebus'));