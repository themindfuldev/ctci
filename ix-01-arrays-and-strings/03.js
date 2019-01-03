// Replacing each char - O(n)
function urlify1(string, length) {
    let charCount = 0;
    let result = '';
    for (const char of string) {
        if (charCount < length) {
            result += char === ' '? '%20': char;
            charCount++;
        }
    }
    return result;
}

console.log('Replacing each char approach');
console.log(urlify1('Mr John Smith    ', 13));
console.log(urlify1('Mr John Smith    ', 17));

function urlify2(string, length) {
    return string.substring(0, length).replace(/\s/g, '%20');
}

console.log('Regex approach');
console.log(urlify1('Mr John Smith    ', 13));
console.log(urlify1('Mr John Smith    ', 17));