/*
11011 -> 10111 and 11101
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
                while (nextIndex < length && nextLargestIndex === -1) {
                    const digit = +binary.charAt(nextIndex);
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

    let largest;
    if (~nextLargestPosition) {
        largest = number ^ (0b11 << nextLargestPosition);    
    }
    else {
        let binary = number.toString(2);
        let currentIndex = binary.indexOf('1');
        const leftMostOnePosition = binary.length - currentIndex - 1;
        largest = number ^ (0b11 << leftMostOnePosition);    

        binary = largest.toString(2);
        currentIndex += 2;
        while (currentIndex < binary.length) {
            const digit = +binary.charAt(currentIndex);
            if (digit === 0) {
                const rightMostOnePosition = binary.length - currentIndex - 1;
                largest = largest ^ (0b11 << rightMostOnePosition);    
                binary = largest.toString(2);
            }
            currentIndex++;
        } 

    }
    response.largest = `${largest} (${largest.toString(2)})`;

    return response;
}

console.log(`${0b11011} (11011) ->`, getNextNumbers(0b11011));
console.log(`${0b11010} (11010) ->`, getNextNumbers(0b11010));
console.log(`${0b11111} (11111) ->`, getNextNumbers(0b11111));
console.log(`${0b11000} (11000) ->`, getNextNumbers(0b11000));
console.log(`${0b10001} (10001) ->`, getNextNumbers(0b10001));
console.log(`${0b11011001111100} (11011001111100) ->`, getNextNumbers(0b11011001111100));