/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSum(arr,tgt){
    let l = 0;
    let r = arr.length - 1;
    
    while(l<r){
        //lets do the sum and from there lets just see what happens :P
        let sum = arr[r] + arr[l];
        
        if(sum==tgt){
            return [l+1,r+1];
        }
        else if(sum>tgt){
            r--;
        }
        else{
            l++;
        }
        
    }

}
let numbers = [2,7,11,15];
let target = 9;
console.log(twoSum(numbers,target));