function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function remove(head,n){
    let newHead = new ListNode(0);
    newHead.next = head;
    let liebre = newHead;
    let tortuga = newHead;

    //we go forward first with our liebre
    for(let i =0;i<=n;i++){
        liebre = liebre.next;
    }

    //then we move forward...
    while(liebre != null){
        liebre = liebre.next;
        tortuga = tortuga.next;
    }

    tortuga.next = tortuga.next.next;

    return newHead;
    
}