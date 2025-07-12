function ransomeNote(ransomeNote,magazine){
    let hmMagazine = {};

    for(let i = 0;i<magazine.length;i++){
        hmMagazine[magazine[i]] = (hmMagazine[magazine[i]]||0)+1;
    }

    
    for(let i = 0;i<ransomeNote.length;i++){

        if(hmMagazine[ransomeNote[i]] > 0){
            hmMagazine[ransomeNote[i]] = hmMagazine[ransomeNote[i]] - 1;
        }
        else{
            return false;
        }

    }

    return true;
}

console.log(ransomeNote("a","b"));