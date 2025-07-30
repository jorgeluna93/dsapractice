function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


function isCycle(head){
    let tortuga = head;
    let liebre = head;

    while(liebre && liebre.next){
        liebre = liebre.next.next;
        tortuga = tortuga.next;
        
        if(liebre == tortuga){
            return true;
        }
    }

    return false;
}