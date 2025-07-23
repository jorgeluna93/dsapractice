/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]
 */



function getCode(word){
    let codeArr = new Array(26).fill(0);

    for(let i=0;i<word.length;i++){
        let position = word.charCodeAt(i) - 97;        
        codeArr[position] = codeArr[position] + 1;
      
    }

    return codeArr.toString();
}

function groupAnagrams(strs){
    //first part, we create the map to organize the stuff
    let hashMap = new Map();
    
    for(let i = 0;i<strs.length;i++){
        let cw = getCode(strs[i]);

        if(hashMap.has(cw) == false){
            hashMap.set(cw,[]);
        }
      
        hashMap.get(cw).push(strs[i]);
    }
    //second part jist return the organized stuff in an array, rather than a map
    let finalArray = [];

    hashMap.forEach((values, keys) => {
        finalArray.push(values);
    });

    return finalArray;
}



let strs = ["bdddddddddd","bbbbbbbbbbc"];

console.log(groupAnagrams(strs));