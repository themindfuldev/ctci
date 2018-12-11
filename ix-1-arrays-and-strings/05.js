// Frequency table approach, O(n) time and O(n) space
function isOneEditAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) {
        return false;
    }

    const frequencyMap = new Map();
    s1.split('').forEach(c => frequencyMap.set(c, (frequencyMap.get(c) || 0)+1));
    s2.split('').forEach(c => frequencyMap.set(c, (frequencyMap.get(c) || 0)-1));

    const diff = [...frequencyMap.values()].filter(v => v !== 0);

    return diff.length <= 2 && diff.reduce((sum, val) => sum + val, 0) <= 1;
};

console.log(isOneEditAway('pale', 'ple'));
console.log(isOneEditAway('pales', 'pale'));
console.log(isOneEditAway('pale', 'bale'));
console.log(isOneEditAway('pale', 'bake'));