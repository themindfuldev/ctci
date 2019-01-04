const getNumberOfBitsToFlip = (a, b) => {
    let diff = a ^ b;
    let bitsToFlip = 0;
    while (diff > 0) {
        const digit = diff & 1;
        if (digit === 1) {
            bitsToFlip++;
        }
        diff >>>= 1;
    }
    return bitsToFlip;
};

console.log(getNumberOfBitsToFlip(0b11101, 0b01111));
console.log(getNumberOfBitsToFlip(0b11111, 0b00000));
console.log(getNumberOfBitsToFlip(0b11111, 0b11111));
console.log(getNumberOfBitsToFlip(0b10101, 0b1010));