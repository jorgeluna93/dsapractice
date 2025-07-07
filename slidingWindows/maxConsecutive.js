/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Constraints:

    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
    0 <= k <= nums.length

*/

/**
 * 
 * @param {Array} arr array to work with
 * @param {int} k size of the fixed window
 */
function getMaxConsecutiveOne(arr,k){
    let maxSize = 0;//The longest consecutive subarray of 1 (with k 0 flipped)
    let l = 0; //initial position of l (the left side of the sliding window)
    let usedZeros = 0; //number of zeroes we used
    let w = 0; //weight/size of the current window

    for(let r = 0;r<arr.length;r++){
        //If the r side finds a 0, convert it 
        if(arr[r] === 0){
            usedZeros++; 
        }

        //if we have more zeros than allowed(k) move l until this get solved!
        while(usedZeros > k){
            if(arr[l] == 0){
                usedZeros--;
            }
            l++;        
        }

        w = (r-l)+1;

        if(w > maxSize){
            maxSize = (r-l)+1;
        }
    }
    
    return maxSize;

}


let testInput = [1,1,1,0,0,0,1,1,1,1,0];
console.log(getMaxConsecutiveOne(testInput,2));