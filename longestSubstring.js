//Trying a Slidin' window with the longest substring problem:
/*
Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

function slidingWindow(arr){

    let subarr = []; //subarray (kinda the window)
    let longest = 0; //longest window size
    let w = 0; //size of window
    let l = 0; //left side position of the window

    console.log("(i) - This is the array we are goin' through: {" + arr + "}");
    console.log("    - L = the left side of the window, R = the right side of the window, w = The size of the window (R-L)+1");
    for(let r = 0;r < arr.length;r++){ //r is the right side of the window

        while(subarr.indexOf(arr[r]) != -1){
            let x = 0;
            subarr.splice(x,1);
            l++;
            x++;
        }

        subarr.push(arr[r]);
        console.log("(i) - Currently on: " + arr[r]);
        console.log("    - Set = {" + subarr + "}");
        console.log("    - L = " + l);
        console.log("    - R = " + r);
        console.log("    - w = " + w);
        
        w = (r - l) + 1;

        if(w > longest){
            longest = w;
        }

        console.log("    - Longest substring = " + longest);
    }

    return longest;

}

let longest = slidingWindow(["p","w","w","k","e","w"]);

console.log(longest);

