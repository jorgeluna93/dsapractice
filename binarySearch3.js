/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/

function binarySearchWithPrediction(arr,target){
    let l = 0;
    let r =  arr.length - 1;
    let m = null;
    let backupM = null;
    while(l<=r){
        backupM = m;
        m = l + Math.floor((r-l)/2);  
        if(target === arr[m]){
            return m;
        }
        else if(target < arr[m]){
            r = m - 1;
            
        }
        else if(target > arr[m]){
            l = m + 1;
        }

    }
  
    return backupM;
}


console.log(binarySearchWithPrediction([1,3,5,6],2));