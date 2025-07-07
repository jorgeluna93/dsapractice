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
function hasPermutation(s1,s2){
    let k = s1.length; //window size
    let l = 0; //initial position of l (left size of window)
    let r = k-1; //initial position of r (left size of window)
    let subset = [...s1]; //this is kind of a check list of each character we have found
    let cursor = l; //cursor to move through our window
    
    if(s1.length > s2.length){
        return false;
    }

    while(r < s2.length){    
        if(s1.indexOf(s2[r]) == -1 && s1.indexOf(s2[l] ==-1)){
            l++;
            r++;
        }
        //
        if(subset.indexOf(s2[cursor]) != -1){
            //if a character of s1 appears and is on the checklist, we check in that and move our cursor
            subset.splice(subset.indexOf(s2[cursor]),1);
            cursor++;

        }
        else if(s1.indexOf(s2[cursor]) != -1){
            subset.push(s2[l]);
            l++;
            r++;
        }
        //
        else{
            //As the not matching character is kinda useless,
            // we kinda need to move from there as it breaks the chain
            l = cursor+1;//reposition l
            r = l + (k-1);//reposition r
            subset = [...s1]; //this is kind of a check list of each character we have found
            cursor = l; //cursor to move through our window

        }

        //if we completed the check list then we have at least one permutation
        if(subset.length === 0){
            return true;
            //if we complete all the check list.... then is true that we have a permutation....
        }
        //
    }

    return false;
}


let testInputS1 = "adc";
let testInputS2 = "dcda";
console.log(hasPermutation("hello","ooolleoooleh"));