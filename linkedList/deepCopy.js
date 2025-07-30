 // Definition for a _Node.
 function _Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
};

function copy(head){
    //Create arrays that will help us to id each node
    let idOriginal = [];
    let idCopia = [];
    //

    //First we create the list as it is, without random value
    let cursor = head;
    let copia = new _Node(0,null,null);
    let cursorCopia = copia;

    while(cursor != null){
        cursorCopia.next = new _Node(cursor.val,null,null);
        cursorCopia = cursorCopia.next;
        //
        idCopia.push(cursorCopia);
        idOriginal.push(cursor);
        //
        cursor = cursor.next;
        cursorCopia = cursorCopia.next;
    }

    //Now we add the "node.random" references
    cursorCopia = copia.next; //reset cursor
    cursor = head;//reset cursor

    while(cursor != null){
        let randomId = idOriginal.indexOf(cursor.random);//Look for the id in the original
        if(randomId != -1){
            cursorCopia.random = idCopia[randomId];//With that id we add the random reference (if it is not null)
        }

        //Move our cursors
        cursor = cursor.next;
        cursorCopia = cursorCopia.next;
    }
    //

    return copia.next;
    //
}
