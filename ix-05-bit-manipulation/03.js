/*
  11011101111
^ 11111111111
  00100010000   

  [2,3,4] => [6,8] => 8
*/
const getOneSequences = number => {
    const oneSequences = [];
    let currentSequence = 0;
    while (number > 0) {
        const currentDigit = number & 1;
        if (currentDigit === 1) {
            currentSequence++;
        }
        else {
            oneSequences.push(currentSequence);
            currentSequence = 0;
        }

        number >>= 1;
    }
    if (currentSequence > 0) {
        oneSequences.push(currentSequence);
        currentSequence = 0;
    }
    return oneSequences;
}

const getLongestSequenceOfOnesUsingOneBitFlip = number => {
    const oneSequences = getOneSequences(number);
    const summedSequences = oneSequences.map((sequence, i, sequences) => {        
        return i > 0 ? sequence + sequences[i-1] + 1 : undefined;
    }).slice(1);
    const maxSequence = summedSequences.reduce((max, seq) => Math.max(max, seq), Number.NEGATIVE_INFINITY);
    return maxSequence;
};

console.log(getLongestSequenceOfOnesUsingOneBitFlip(0b11011101111)); 
console.log(getLongestSequenceOfOnesUsingOneBitFlip(0b10010001110)); 
console.log(getLongestSequenceOfOnesUsingOneBitFlip(0b11001001010)); 