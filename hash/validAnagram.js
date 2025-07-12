/*Given two strings s and t, return true if t is anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/

function isAnagram(s,t){
    if(s.length != t.length){
        return false;
    }
    
    hmS = {};
    
    for(let i = 0;i<s.length;i++){
        hmS[s[i]] = (hmS[s[i]]||0) + 1;
    }

    for(let j = 0;j<t.length;j++){

        if(hmS[t[j]] > 0){
            hmS[t[j]] = hmS[t[j]]-1;
        }
        else{
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram","nagaram"));