
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function middle(head){
    let arr = toArray(head);
    let midpoint = Math.floor(arr.length/2);
    arr = arr.slice(midpoint);
    return toListNode(arr);
}

function toArray(head){
    let cursor = head;
    let arr = [];

    while(cursor != null){
        arr.push(cursor.val);
        cursor = cursor.next;
    }

    return arr;
}

function toListNode(arr,i=0){

    if(arr.length == 0){
        return null;
    }

    if(i === arr.length - 1){
        return new ListNode(arr[i],null);
    }
    else{
        return new ListNode(arr[i],toListNode(arr,i+1));
    }

}

