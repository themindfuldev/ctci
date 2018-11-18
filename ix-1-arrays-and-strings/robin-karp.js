// Robin-karp substring search
function substringSearch(string, substring) {
    const stringLength = string.length;
    const substringLength = substring.length;

    // Generating hashes
    const hashes = [calculateHash(string, substringLength)];
    for (let i = 1; i < stringLength - substringLength; i++) {
        hashes[i] = updateHash(string, substringLength, hashes[i-1], i-1);
    }
    const substringHash = calculateHash(substring, substringLength);
    
    // Comparing hashes
    for (let i = 0; i < stringLength - substringLength; i++) {
        const index = i + substringLength;
        if (hashes[i] === substringHash && compare(string, i, substring)) {
            return i;
        }
    }

    return -1;
}

function calculateHash(string, length, startIndex = 0) {
    let hash = 0;
    for (let i = startIndex; i < length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash;
}

function updateHash(string, length, hash, outcomingIndex) {
    return hash - string.charCodeAt(outcomingIndex) + string.charCodeAt(outcomingIndex + length);
}

function compare(string, index, substring) {
    const stringLength = string.length;
    const substringLength = substring.length;

    if (index + substringLength > stringLength) {    
        return false;
    }

    for (let i = index, j = 0; i < stringLength && j < substringLength; i++, j++) {
        if (string.charAt(i) !== substring.charAt(j)) {
            return false;
        }
    }

    return true;
}

console.log(substringSearch('doe are hearing me', 'ear'));