function isSubstring(s1, s2) {
    return !!~s1.indexOf(s2);
};

function isRotation(s1, s2) {
    return isSubstring(s1+s2, s2);
};

console.log(isRotation('waterbottle', 'erbottlewat'));