/*
Longest Common Prefix
Easy
Topics
premium lock iconCompanies

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestPrefix(arr){
    let prefix = "";

    for(let i = 0;i<arr.length;i++){
        if(i == 0){
            prefix = arr[i];
            continue;
        }

        let newPrefix = "";

        //Compare
        for(let j = 0;j<arr[i].length;j++){
            
            if(j >= prefix.length){
                break;
            }

            if(prefix[j] === arr[i][j]){
                newPrefix = newPrefix + prefix[j];
            }
            else{
                break;
            }
        }
        //

        prefix = newPrefix;
    }
   
    return prefix;
}

longestPrefix(["cir","car"]);