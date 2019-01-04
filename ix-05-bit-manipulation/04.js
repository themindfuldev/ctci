/*
11011 -> 10111 and 11101

const findLeastSignificantZeroPositions = number => {
    let smallestPosition = -1, largestPosition = -1;
    let currentPosition = 0;

    let isLastDigitAZero = false;
    while (number > 0 && largestPosition === -1) {
        const currentDigit = number & 1;
        if (currentDigit === 0) {
            isLastDigitAZero = true;
        }
        else {
            if (isLastDigitAZero) {
                if (smallestPosition === -1) {
                    smallestPosition = currentPosition - 1;
                    if (smallestPosition > 0) {
                        largestPosition = smallestPosition - 1;
                    }
                }
                else {
                    largestPosition = currentPosition - 2;
                }
                isLastDigitAZero = false;
            }
        }
        number >>= 1;
        currentPosition++;
    }

    return { smallestPosition, largestPosition };
}
*/

const findLeastSignificantZeroPositions = number => {
    const binary = number.toString(2);
    const { length } = binary;
    let currentIndex = length - 1;

    let isLastDigitAZero = false;
    let nextSmallestIndex = -1;
    let nextLargestIndex = -1;
    while (currentIndex >= 0 && nextLargestIndex === -1) {
        const currentDigit = +binary.charAt(currentIndex);
        if (currentDigit === 0) {
            isLastDigitAZero = true;
            currentIndex--;
        }
        else {
            if (isLastDigitAZero) {
                if (nextSmallestIndex === -1) {
                    nextSmallestIndex = currentIndex + 1;
                }

                // Looking for nextLargest
                let nextIndex = currentIndex + 2;
                let digit;
                while (nextIndex < length && nextLargestIndex === -1) {
                    digit = +binary.charAt(nextIndex);
                    if (digit === 1) {
                        nextLargestIndex = nextIndex;
                    }
                    nextIndex++;
                } 

                isLastDigitAZero = false;
            }
            else {
                currentIndex--;
            }
        }        
    }

    if (!~nextLargestIndex) {
        nextLargestIndex = binary.indexOf('1');
    }

    return { 
        nextSmallestPosition: ~nextSmallestIndex ? length - nextSmallestIndex - 1 : -1, 
        nextLargestPosition: ~nextLargestIndex ? length - nextLargestIndex - 1 : -1 
    };
};

const getNextNumbers = number => {
    const { nextSmallestPosition, nextLargestPosition } = findLeastSignificantZeroPositions(number);
    const response = {};

    if (~nextSmallestPosition) {
        const smallest = number ^ (0b11 << nextSmallestPosition);
        response.smallest = `${smallest} (${smallest.toString(2)})`;
    }

    const largest = number ^ (0b11 << nextLargestPosition);    
    response.largest = `${largest} (${largest.toString(2)})`;

    return response;
}

console.log(`${0b11011} (11011) ->`, getNextNumbers(0b11011));
console.log(`${0b11010} (11010) ->`, getNextNumbers(0b11010));
console.log(`${0b11111} (11111) ->`, getNextNumbers(0b11111));
console.log(`${0b11000} (11000) ->`, getNextNumbers(0b11000));
console.log(`${0b10001} (10001) ->`, getNextNumbers(0b10001));