
function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function merge(l1,l2){
    let lMerged = new ListNode(0);
    let cursor = lMerged;

    while(l1 != null && l2 != null){

        if(l1.val < l2.val){
            cursor.next = l1;
            l1 = l1.next;
        }
        else{
            cursor.next = l2;
            l2 = l2.next;
        }
        cursor = cursor.next;
    }

    cursor.next  = l1 !== null ? l1 : l2;

    return lMerged.next;

}

