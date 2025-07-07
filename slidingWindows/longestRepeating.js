/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

//Keeps track of the letters in the window
class WinAlphabet{
    constructor(maxLetterChanges){
        this.alphabet = new Array(26).fill(0); //Creates an array of 26 positions, each representing each capital letter (english alphabet)
        this.maxLetterChanges = maxLetterChanges; //number of letter changes allowed
    }
    addFrequency(letter){
        //ASCII Code for Letters ranges from 65 to 90 (A - Z)
        //We get the ASCII Code of the letter and the we substract 65 
        //to get the position in our array
        try{
            let asciiNum = letter.charCodeAt(0); 
            this.alphabet[asciiNum - 65] = this.alphabet[asciiNum - 65] + 1;
        }
        catch(e){
            return; //In case of out-of bound kinda error
        }
    }
    deleteFrequency(letter){
        //ASCII Code for Letters ranges from 65 to 90 (A - Z)
        //We get the ASCII Code of the letter and the we substract 65 
        //to get the position in our array        
        try{
            let asciiNum = letter.charCodeAt(0); 

            this.alphabet[asciiNum - 65] = this.alphabet[asciiNum - 65] - 1;
        }
        catch(e){
            return; //In case of out-of bound kinda error
        }

    }
    isValidWindow(sizeOfWindow){
        let mostFrequentLetter = Math.max(...this.alphabet);
        if((sizeOfWindow - mostFrequentLetter) > this.maxLetterChanges){
            return false;
        }
        return true;
    }
    
}

function longestRepeating(str,k){
    let l = 0;//Initial Position Left
    let r = 0;//Initial POsition Right
    let w = 0;//Current size of the window
    let longestSubstring = 0;//Records the longest substring
    let lettersInWin = new WinAlphabet(k);
    while(r<str.length){
        lettersInWin.addFrequency(str[r]);
        w = (r-l)+1;
        while(lettersInWin.isValidWindow(w) == false){
            lettersInWin.deleteFrequency(str[l]);
            l++;
            w = (r-l)+1;
        }
        if(w>longestSubstring){
            longestSubstring = w;
        }
        r++;
    }

    return longestSubstring;

}


console.log(longestRepeating("ABAB",2));