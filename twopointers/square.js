/*Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

function sq(arr){
    let l = 0;
    let r = arr.length - 1;
    let out = [];

    while(l<=r){
        let l_value = (arr[l] * arr[l]);
        let r_value = (arr[r] * arr[r]);

        if(l_value >= r_value || l_value == r_value){
            out.push(l_value);
            l++;
        }
        else{
            out.push(r_value);
            r--;
        }

    }

    return out.reverse();
}

let arr = [-7,-3,2,3,11];
console.log(sq([-7,-3,2,3,11]));
