//Fixed Window
/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

    n == nums.length
    1 <= k <= n <= 105
    -104 <= nums[i] <= 104

*/

/**
 * 
 * @param {Array} arr array to work with
 * @param {int} k size of the fixed window
 */
function getMaxAverage(arr,k){
    let l = 0; //left side position of the window
    let r = 0; //right side position of the window
    let maxAverage = null;
    let currentAverage = null;

    console.log("(i) - This is the array we are going to work with : " + arr);

    for(r = k-1;r < arr.length;r++){
        //Get current window
        console.log("(i) - L = " + l + " | R = " + r);
        //

        //Calculate the average and compare
        currentAverage = averageOfSubarray(arr,l,r);
        if(maxAverage === null || currentAverage > maxAverage){
            maxAverage = currentAverage;
        }
        //
        console.log("      Current Average : " + currentAverage);
        console.log("      Max Average until now: " + maxAverage);
        //move the window to the right, r moves with the for function and we need
        //to manually move l
        l++; 
    }

    return maxAverage;

}

function averageOfSubarray(arr,l,r){
        let sum = 0;

        for(let x = l;x <= r; x++){
            sum = sum + arr[x];
        }
        let w = (r-l)+1;
        let average = (sum / w);

        return average;
}

let testInput = [1,12,-5,-6,50,3];
getMaxAverage(testInput,4);