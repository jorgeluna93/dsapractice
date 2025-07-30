
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let deleteDuplicates = function(head) {
    try{
        let noDupsArray = toArrayNoDups(head);
        return toListNode(noDupsArray);
    }
    catch(ex){
        return head;
    }
};


let toArrayNoDups = (listNode) => {
    if(listNode.val == 0 && listNode.next == null){
        return [];
    }

    let values = [];    
    let currentNode = listNode;

    while(currentNode != null){
        if(values.includes(currentNode.val) == false){
            values.push(currentNode.val);
        }
        
        currentNode = currentNode.next;

    }

    return values;
    
};

let toListNode = (theArray,currentPosition=0) => {
    if(theArray.length === 0){
        return null;
    }

    if(currentPosition == theArray.length-1){
      
        return new ListNode(theArray[currentPosition],null);
    }
    else{
        return new ListNode(theArray[currentPosition],toListNode(theArray,currentPosition+1));
    }
}