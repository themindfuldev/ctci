function compressString(s) {
    let frequencies = [];
    let currentLetter;
    let currentLetterCount;
    for (let c of s.split('')) {
        if (c !== currentLetter) {
            if (currentLetter) {
                frequencies.push(currentLetter + currentLetterCount);
            }
            currentLetter = c;
            currentLetterCount = 1;
        }
        else {
            currentLetterCount++;
        }
    }
    frequencies.push(currentLetter + currentLetterCount);

    compressed = frequencies.join('');

    return compressed.length > s.length ? s : compressed;
}

console.log(compressString('aabcccccaaa'));
console.log(compressString('abccdeee'));