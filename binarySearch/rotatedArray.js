/*
    Find Minimum
    Input: nums = [3,4,5,1,2]
    Output: 1
    Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/


function rotatedArray(arr){
    let l = 0;
    let r = arr.length - 1;

    while(l<r){
        let m = Math.floor((r+l)/2);
        if(arr[m] > arr[r]){
            l = m+1;
        }
        else{
            r = m;
        }
    }
    return arr[l];
}

let arr = [2,1];

console.log(rotatedArray(arr));



