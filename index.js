class LinkedList{
    head = null;
    append(value){
        if(!this.head){
            this.head = new Node(value);
        }
        else{
            let temp = this.head;
            while(temp.nextNode!=null){
                temp = temp.nextNode;
            }
            let node = new Node(value);
            temp.nextNode = node;
        }
    }
    prepend(value){
        if(!this.head){
            this.head = new Node(value);
        }
        else{
            let node = new Node(value);
            node.nextNode = this.head;
            this.head = node;
        }
    }
}

class Node{
    constructor(value = null,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(8)
list.prepend(7)
list.prepend(5)

list.append(3);
list.append(4);
list.append(5);

list.traverse();
