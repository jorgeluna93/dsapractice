/*
Given an array of strings strs, group the

together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 */


function groupAnagram(strs){
    
	    const anagramsMap = new Map();
	    
	    strs.forEach(s => {
	        const count = new Array(26).fill(0);
	        for (let c of s) {
	            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
	        }
	        const key = count.join(',');
	        if (!anagramsMap.has(key)) {
	            anagramsMap.set(key, []);
	        }
	        anagramsMap.get(key).push(s);
	    });
	    
	    return Array.from(anagramsMap.values());

}

let arr = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagram(arr));