
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function reverse(head){
    let arr = toArray(head);
    let revArr = [];
    
    for(let i = arr.length-1;i>=0;i--){
        revArr.push(arr[i]);
    }

    return toLinkedList(revArr);

}

function toArray(head){
    let arr = [];
    let cursor = head;

    while(cursor != null){
        arr.push(cursor.val);
        cursor = cursor.next;
    }

    return arr;
}

function toLinkedList(arr,i=0){

    if(arr.length === 0){
        return null;
    }

    if(i == arr.length-1){
        return new ListNode(arr[i],null);
    }
    else{
        return new ListNode(arr[i],toLinkedList(arr,i+1));
    }

}