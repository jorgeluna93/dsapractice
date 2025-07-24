function reverse(s){
    let l = 0;
    let r = s.length-1;

    while(l<r){
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        r--;
        l++;
    }

    return s;
}

let s = ["h","e","l","l","o"];
console.log(reverse(s));