/*
00 -> 00   00 ^ 11 = 11
11 -> 11   11 ^ 11 = 00
01 -> 10   01 ^ 11 = 10
10 -> 01   10 ^ 11 = 01
*/

const swapOddAndEvenBits = number => {
    let step = 0;
    while (step < 32) {
        const trailingDigits = (number >> step) & 0b11;
        if (trailingDigits !== 0 && trailingDigits !== 0b11) {
            number ^= 0b11 << step;
        }

        step += 2;
    }
    return number;
};

console.log(swapOddAndEvenBits(0b11100100).toString(2));