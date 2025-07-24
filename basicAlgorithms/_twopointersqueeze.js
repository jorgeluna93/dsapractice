//Reverse a string
//using two pointer approach

function reverse(arr){
    let l = 0; //initial position of l is always 0, l means left
    let r = arr.length-1; //initial position of r is always the end of the array, r means right

    while(l<r){

        let temp = arr[l];
        arr[l] = arr[r]
        arr[r] = temp;

        //We move this as we need
        r--;//r always moves down
        l++;//l always moves up
    }

    return arr;
}

console.log(reverse(["t","o","u","h","o","u"]));