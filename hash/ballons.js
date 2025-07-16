
/*Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.*/

function ballons(txt){
    //balloon
    let hm = {};
    let counter = 0;
    let word = "balloon";
    
    for(let i = 0;i<txt.length;i++){
        let s = txt[i];
        hm[s] = (hm[s]||0) + 1;
    }

    let finished = false;
    
    while(finished == false){

        for(let i = 0;i<word.length;i++){
            let s = word[i];
           
            if(hm[s] > 0){
                hm[s] = hm[s] - 1;
            }
            else{
                finished = true;
                break;
            }

            if(i == word.length-1){
                counter++;
            }

        }

    }

    return counter;


}

console.log(ballons("ballon"));