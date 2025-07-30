
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function remove(head,n){
    let arr = toArray(head);
    let arr2 = [...arr];
    let position = arr.length - n;
    arr = arr.slice(0,position);
    arr = arr.concat(arr2.slice(position+1));
    return toListNode(arr);
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

function toListNode(arr,i=0){
    if(arr.length == 0){
        return null;
    }

    if(i == arr.length - 1){
        return new ListNode(arr[i],null);
    }
    else{
        return new ListNode(arr[i],toListNode(arr,i+1));
    }

}

remove([1,2],1);