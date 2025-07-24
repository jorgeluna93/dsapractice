/*Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.*/

function removeRubbish(s){
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function palindrome(s){
    s = removeRubbish(s);
    let l = 0;
    let r = s.length-1;
    
    while(l<r){
        if(s[l]!=s[r]){
            return false;
        }
        l++;
        r--;
    }

    return true;
}

let s = "A man, a plan, a canal: Panama";
console.log(palindrome(s));