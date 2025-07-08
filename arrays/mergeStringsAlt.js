function mergeStringsAlt(word1,word2){
    let longestWordSize = 0;

    //find the longest 
    if(word1.length >= word2.length){
        longestWordSize = word1.length;
    }
    else{
        longestWordSize = word2.length;
    }
    //

    //Do the merge
    let frankenstein = "";
    for(let i = 0;i<longestWordSize;i++){

        if(i < word1.length){
            frankenstein = frankenstein + word1[i];
        }
        if(i < word2.length){
            frankenstein = frankenstein + word2[i];
        }

    }
    //
    
    return frankenstein;
}

let word1 = "abc";
let word2 = "pqr";
console.log(mergeStringsAlt(word1,word2));