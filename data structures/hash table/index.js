/*
- the most efficient for key-value lookup, very quick;
- get in mind for all coding interviews as it appears very often;
- avoid COLLISIONS, when we have the same index for several values;
- one of the method to avoid collision is CHAINING, 
on the same index we store values and keys in LinkedList;
- runtime is constant time O(1) for a good hashtable and O(n) for terrible hashtable
*/

class HashTable{
    constructor(size) {
        this.values = {};
        this.size = size;
    }
    //we get string value and it changes into hashcode which than turns into number index
    genHash(key){
        let keyStr = key.toString();
        let sum = 0;
        //SUM ASCII characters
        for(let i = 0; i<keyStr.length; i++){

        }
    }
}