/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a

whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

Constraints:

    1 <= target <= 109
    1 <= nums.length <= 105
    1 <= nums[i] <= 104

*/

function minSubSum(arr,target){
    let l = 0; //initial position of l, the left side of the window;
    let smallestSubarr = 0; //initializing the smallest subarry var
    let w = 0; //initializing the current window size
    let currentSum = 0; //initializing the variable that sums all the values inside the subarray window
    
    for(let r = 0;r < arr.length;r++){//r is the right side of the window
        currentSum = currentSum + arr[r];//we sum the next value

        while(currentSum >=target){ 
            //as long we hit the target or we are above it, we calculate the size of the subarray
            //if it is smallest than the previous record, we update the record of the smallest subarray that give us 
            //the target number or above

            if(currentSum >= target){
                w = (r-l)+1;
                if(smallestSubarr === 0 || w < smallestSubarr){
                    smallestSubarr = w;
                }
            }

            currentSum = currentSum - arr[l]; //we shrink the window and then if we are still on or above the target we repeat the while process...
            l++;
        }

    }

    return smallestSubarr;
}

let target = 7
let nums = [2,3,1,2,4,3]

console.log(minSubSum(nums,target));