/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and 
j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

/**
 * 
 * @param {int[]} numbers 
 * @param {int} k 
 * @returns {boolean}
 */
function hasDuplicate(numbers,k){
    if(k == 0 || numbers.length == 1){
        return false;
    }

    let l = 0;
    let r = 0;
    let ht = new Map();

    while(r<numbers.length){
        if(ht.size > k){
            ht.delete(numbers[l]);
            l++;
        }
        
        if(ht.has(numbers[r])){
            return true;
        }
        else{
            ht.set(numbers[r],1);
        }
  
        r++;
    }

    return false;
}


console.log(hasDuplicate([99,99],1));