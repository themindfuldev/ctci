function getRealBinary(n) {
    //Math.trunc(0.875 / 2**-1).toString() + Math.trunc((0.875 - 2**-1) / 2**-2).toString() + Math.trunc((0.875 - 2**-1 - 2**-2) / 2**-3).toString() + + Math.trunc((0.875 - 2**-1 - 2**-2 - 2**-3) / 2**-4).toString()
    let binary = '';
    let i = -1;
    do {
        const base = 2 ** i;
        const digit = Math.trunc(n / base);
        binary += digit.toString();

        if (digit === 1) {
            n -= base;
        }

        i--;
    } while (n !== 0 && i > -32);

    return i > -32 ? `0.${binary}` : 'ERROR';
};

console.log(getRealBinary(0.839));