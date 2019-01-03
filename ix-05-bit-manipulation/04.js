/*
11011 -> 10111 and 11101
*/

const findLeastSignificantZeroPositions = number => {
    let smallestPosition = -1, largestPosition = -1;
    let currentPosition = 0;

    while (number > 0 && largestPosition === -1) {
        const currentDigit = number & 1;
        if (currentDigit === 0) {
            if (smallestPosition === -1) {
                smallestPosition = currentPosition;
                if (smallestPosition > 0) {
                    largestPosition = currentPosition - 1;
                }
            }
            else {
                largestPosition = currentPosition - 1;
            }
        }
        number >>= 1;
        currentPosition++;
    }

    return { smallestPosition, largestPosition };
}

const getNextNumbers = number => {
    const { smallestPosition, largestPosition } = findLeastSignificantZeroPositions(number);
    const response = {};

    if (smallestPosition > -1) {
        const smallest = number ^ (0b11 << smallestPosition);
        response.smallest = `${smallest} (${smallest.toString(2)})`;
    }

    let largest;
    if (largestPosition > -1) {
        largest = number ^ (0b11 << largestPosition);
    }
    else {
        largest = number << 1;
    }
    response.largest = `${largest} (${largest.toString(2)})`;

    return response;
}

console.log(`${0b11011} (11011) ->`, getNextNumbers(0b11011));
console.log(`${0b11010} (11010) ->`, getNextNumbers(0b11010));
console.log(`${0b11111} (11111) ->`, getNextNumbers(0b11111));
console.log(`${0b11000} (11000) ->`, getNextNumbers(0b11000));