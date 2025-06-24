/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.

*/
//this version needs an optimization... see the definitive edition
function hasPermutation(s1,s2){

    //as we need to review that at least one permutation of s1
    //appears on s2.... we would need a fixed sliding window for this
    //we will calculate the k (size of fix window) using the s1.length command...
    
    //just in case we check that s1 length is not greater than s2....
    if(s1.length > s2.length){
        return false;
    }
        
    let k = s1.length; //size of the fixed slidin' window
    let l = 0; //initial left position of slidin win.
    let r = k-1;//initial right position of slidin win.
    //
    let cursor = null;
    let subset = "";

    for(let r = k-1;r<s2.length;r++){
        cursor = l;  
        subset = [...s1];
        
        while(subset.indexOf(s2[cursor]) != -1){ 
        //we review each element of the window... as soon as we see a char that doesnt matches... 
        //means that is not a permutation... so we hard stop and move our window

            subset.splice(subset.indexOf(s2[cursor]),1);
            //
            if(subset.length === 0){
                return true;
                //if we complete all the check list.... then is true that we have a permutation....
            }
            //
            cursor++;
        }
        
        l++;
    }
    
    return false;


}

let testInputS1 = "ab";
let testInputS2 = "eidbaooo";
console.log(hasPermutation(testInputS1,testInputS2));