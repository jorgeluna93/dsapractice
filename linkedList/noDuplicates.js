
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function deleteDuplicates(nodeList){
    let cursor = nodeList;


    while(cursor != null && cursor.next != null){
        if(cursor.val == cursor.next.val){
            cursor.next = cursor.next.next; 
        }
        else{
            cursor = cursor.next;
        }
    }

    return nodeList;

}