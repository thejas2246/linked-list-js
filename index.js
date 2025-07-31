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
    size(){
        let temp = this.head;
        let count = 0;
        while(temp!=null){
            count++;
            temp = temp.nextNode;
        }
        return count;
    }
    getHead(){
        if(!this.head){
            return null
        }
        return this.head.value;
    }
    getTail(){
        if(!this.head){
            return null
        }
        let temp = this.head;
        while(temp.nextNode!=null){
            temp = temp.nextNode;
        }
        return temp.value

    }
    at(index){
        let count = -1;
        if(index<0){
            return null;
        }
        let temp = this.head;
        while(temp.nextNode!=null){
            count++;
            if(count ===index){
                console.log(temp.value)
                return temp.value;
            }
            temp = temp.nextNode;
        }
        return null
    }
    pop(){
         if(!this.head){
            return null;
         }
         let temp = this.head;
         while(temp.nextNode.nextNode!=null){
            temp = temp.nextNode;
         }
         console.log(temp.nextNode.value);
         temp.nextNode = null;

    }
    contains(value){
        if(!this.head){
            return false;
        }
        let temp = this.head;
        while(temp){
            if(temp.value===value){
                return true;
            }
            temp = temp.nextNode
        }

        return false
    }
    find(value){
        if(!this.head){
            return null
        }
        let count = 0;
        let temp = this.head;
        while(temp){
            if(temp.value ===value){
                return count;
            }
            temp = temp.nextNode
            count++
        }
        return null
    }
    toString(){
        let string = "";
        if(!this.head){
            return string;
        }
        let temp = this.head;
        let count = 0;
        while(temp){
            if(count===0){
            string += `(${temp.value})`;
            }
            else{
                string += `->(${temp.value})`;
            }
            temp = temp.nextNode
            if(temp==null){
                string+='->null'
            }
            count++;
        }
        return string;
    }
    insertAt(value,index){
        if(!this.head){
            return null;
        }
        if(index === 0){
            this.prepend(value);
            return;
        }
        if(index<0){
            return null
        }
        let count = 0;
        let temp = this.head;
        while(temp){
            if(count ===index-1){
                let node = new Node(value,temp.nextNode);
                temp.nextNode = node;
                return ;
            }
            temp = temp.nextNode
            count++
        }

        console.log('Enter a valid index')
        return null;

    }
}

class Node{
    constructor(value = null,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

console.log(list.toString())
list.insertAt(9,2);
console.log(list.toString())
console.log(list.contains(2))
console.log(list.find(4))
