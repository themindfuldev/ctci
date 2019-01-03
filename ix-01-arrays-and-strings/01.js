// Using a Hash Table, O(n) time and O(n) space
function isUnique1(string) {
    const existence = {};
    for (const char of string) {
        if (existence[char]) {
            return false;
        }
        existence[char] = true;
    }
    
    return true;
}

console.log('Hash Table approach');
console.log(isUnique1('tiago'));
console.log(isUnique1('cintia'));


// Making brute-force search, O(n^2) time and O(1) space
function isUnique2(string) {
    const length = string.length;
    for (let i = 0; i < length; i++) {
        const char1 = string.charAt(i);
        for (let j = i+1; j < length; j++) {
            if (string.charAt(j) === char1) {
                return false;
            }
        }
    }

    return true;
}

console.log('Brute force approach');
console.log(isUnique2('tiago'));
console.log(isUnique2('cintia'));


// Using sort approach, O(n lg n) and O(1) space
function isUnique3(string) {
    const sortedString = string.split('').sort().join('');

    const length = sortedString.length;
    for (let i = 0; i < length-1; i++) {
        if (sortedString[i] === sortedString[i+1]) {
            return false;
        }
    }

    return true;
}
console.log('Sort approach');
console.log(isUnique3('tiago'));
console.log(isUnique3('cintia'));


// Using a bit vector if restricted to a-z, O(n) time and O(1) space
function isUnique4(string) {
    const initialCode = 'a'.charCodeAt(0);
    let vector = 0;

    for (const char of string) {
        const charCode = char.charCodeAt(0) - initialCode;
        if (vector & (1 << charCode) !== 0) {
            return false;
        }
        vector |= (1 << charCode);
    }

    return true;
}

console.log('Bit vector approach');
console.log(isUnique3('tiago'));
console.log(isUnique3('cintia'));
