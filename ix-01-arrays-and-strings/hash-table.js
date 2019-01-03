const MAX_ENTRIES = 1024;

class HashTable {   

    constructor() {        
        this.table = [];
    }

    add(key, value) {
        const index = this.hashAndMap(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        const list = this.table[index];
        for (let entry of list) {
            if (entry.key === key) {
                entry.value = value;
                return;
            }
        }

        list.push({key, value});
    }

    get(key) {
        const index = this.hashAndMap(key);

        const list = this.table[index];
        for (let entry of list) {
            if (entry.key === key) {
                return entry.value;
            }
        }

        return null;
    }

    remove(key) {
        const index = this.hashAndMap(key);

        const list = this.table[index];
        const length = list.length;
        for (let i=0; i < length; i++) {
            const entry = list[i];
            if (entry.key === key) {
                list.splice(i, 1);
                return
            }
        }
    }

    hash(key) {
        return key.split('').reduce((hash, c) => hash + c.charCodeAt(0), 0);
    }

    map(hashCode) {
        return hashCode % MAX_ENTRIES;
    }

    hashAndMap(key) {
        return this.map(this.hash(key));
    }
}

const ht = new HashTable();
ht.add('abc', 1);
console.log(`ht.add('abc', 1);`);
console.log(`abc=${ht.get('abc')}`);

ht.add('abc', 2);
console.log(`ht.add('abc', 2);`);
console.log(`abc=${ht.get('abc')}`);

ht.add('bca', 3);
console.log(`ht.add('bca', 3);`);
console.log(`abc=${ht.get('abc')}`);
console.log(`bca=${ht.get('bca')}`);

ht.add('abd', 4);
console.log(`ht.add('abd', 4);`);
console.log(`abc=${ht.get('abc')}`);
console.log(`bca=${ht.get('bca')}`);
console.log(`abd=${ht.get('abd')}`);

ht.remove('abc');
console.log(`ht.remove('abc');`);
console.log(`abc=${ht.get('abc')}`);
console.log(`bca=${ht.get('bca')}`);
console.log(`abd=${ht.get('abd')}`);

ht.remove('abd');
console.log(`ht.remove('abd');`);
console.log(`abc=${ht.get('abc')}`);
console.log(`bca=${ht.get('bca')}`);
console.log(`abd=${ht.get('abd')}`);