/*
    Initialize:
        L = 0
        R = n - 1
    Loop While: L < R
        Different from traditional method: this stops when L == R
    Calculate Midpoint: M = (L + R) // 2
    Evaluate Condition:
        If condition(array[M]) == true → Move right boundary: R = M
        If condition(array[M]) == false → Move left boundary: L = M + 1
    Termination:
        When L == R, return L as the index of the boundary

*/



function conditionBased(arr){
    let l = 0;
    let r = arr.length-1;
    let m = null;

    while(l<r){
        m = Math.floor((l+r)/2);
        
        if(arr[m] == true){
            r = m;
        }
        else if(arr[m] == false){
            l = m + 1;
        }
    }
    return l;
}

function conditionBasedFalse(arr){
    let l = 0;
    let r = arr.length-1;
    let m = null;

    while(l<r){
        m = Math.floor((l+r)/2);

        if(arr[m] == false){
            r = m-1;
        }
        else{
            l = m;
        }
    }
    return l;
}

console.log(conditionBased([false, false, false, false, false, true, true]));
console.log(conditionBasedFalse([false, false, false, false, false, true, true]));
//console.log(binarySearchCondition([false, false, false, false, false, true, true]));