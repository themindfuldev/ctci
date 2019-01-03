class StringBuilder {
    constructor() {
        this.chars = [];
    }

    append(char) {
        this.chars.push(char);
    }

    toString() {
        return this.chars.join('');
    }
}

function joinWords(words) {
    const sentence = new StringBuilder();
    words.forEach(c => sentence.append(c));
    return sentence.toString();
}

console.log(joinWords(['hello', 'i', 'love', 'you']));  
