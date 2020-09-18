/*
- first element is HEAD
- last element is TAIL and it points to null
- each element is called NODE
- each element is also linked to previous element
- example is a music player list: each element has reference to the next and previous song
*/
class LinkedList{
    constructor(){
        this.head = this.tail = null;
    }
    //add to the end of list
    append(value){
        if(!this.tail){
            this.head = this.tail = new Node(value);
        }else{
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    //add to the begining of list
    prepend(value){
        if(!this.head){
            this.head=this.tail=new Node(value);
        } else{
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }
    deleteHead(){
        if(!this.head) {
            return null;
        } else{
            let removedHead = this.head;
            //if 1 element left
            if(this.head === this.tail){
                this.head = this.tail = null;
            } else{
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removedHead.value;
        }
    }
    deleteTail(){
        if(!this.tail){
            return null;
        } else{
            let removedTail = this.tail;
            //if 1 el left
            if(this.tail===this.head){
                this.tail = this.head = null;
            } else{
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail;
        }
    }
    search(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return current;
            }
            current = current.next;
        }
        return null;
    }
}
class Node{
    constructor (value, prev, next){
        this.value = value;
        this.prev = prev||null;//default value if not specified in the constructor)
        this.next = next||null;
    }
}

let myList = new LinkedList();
myList.append(12);//12
myList.prepend(1);//1,12
myList.deleteHead()//1
myList.prepend(45)//45,12
myList.deleteTail()//45
console.log(myList);//45
console.log(myList.search(45));//0
myList.append(18);
myList.prepend(36);
console.log(myList);
console.log(myList.search(18));//2