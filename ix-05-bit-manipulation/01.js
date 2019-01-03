const insertNumber = (n, m, i, j) => {
    let mask = ~0 >>> 0;
    mask ^= (1 << (j+1)) - 1;
    mask |= (1 << (i+1)) - 1;

    return (n & mask) | (m << i);
};

console.log(insertNumber(0b10000000000, 0b10011, 2, 6).toString(2));