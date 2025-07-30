
/*
Here we use the tortoise and the hare approach to find the middle point.

Basically the tortoise and hare consist on one cursor moving at two nodes pace
and the other at one node pace.

In this example we are using it to find the middle point.
*/

function ListNode(val,next = null){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function middle(head){
    let liebre = head;
    let tortuga = head;

    while(liebre != null && liebre.next != null){
        liebre = liebre.next.next;
        tortuga = tortuga.next;
    }

    return tortuga;
}