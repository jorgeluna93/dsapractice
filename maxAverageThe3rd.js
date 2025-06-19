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
    //cur_sumplus = nums[i];
    //cur_summinus = nums[i-k];
    let max_avg = null;
    let cur_avg = null;
    let cur_sum = 0;

    console.log("(i) - Getting the max average on a subarray of " + k +  " size for " + arr);

    for(let i = 0;i<arr.length;i++){
        cur_sum = cur_sum + arr[i];
        console.log("(i) - Currently on i = " + i + "(" + arr[i] +")");

        if(i == (k-1)){
            max_avg = cur_sum / k;
        }     
        else if(i>(k-1)){
            cur_sum = cur_sum - arr[i-k];
            cur_avg = cur_sum / k;

            if(cur_avg>max_avg){
                max_avg = cur_avg;
            }
        }   

        if(max_avg != null) {
            console.log("    - Max Average until now = " + max_avg);
        }

        
    }

    console.log("(i) - Max Average = " + max_avg);

    return max_avg;
}

let testInput = [1,12,-5,-6,50,3];
getMaxAverage(testInput,4);