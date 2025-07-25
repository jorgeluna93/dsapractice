function countnsay(n){
    if(n == 1){
        return "1";
    }

    let iterator = 2;
    let str = "1";

    while(iterator<=n){
        str = RLEThis(str);
        iterator++;
    }

    return str;
}

function RLEThis(str){
    let l = 0;
    let r = 0;
    let rle = "";

    while(r<=str.length){
        if(str[r] == str[l] && r<str.length){
            r++;
            continue;
        }
        else {
            let size = ((r-1) - l) + 1;
            rle = rle + size.toString() + str[l];
            l = r;
            r++;
        }
    }

    return rle;

}

console.log(countnsay(3));
