function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function reverse(head){
    let cursor = head;
    let previous = null;
    let temp;

    while(cursor != null){
        temp = cursor.next;
        cursor.next = previous;
        previous = cursor;
        cursor = temp;
    }

    return previous;
}

