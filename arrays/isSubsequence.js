function isSubsequence(s,t){
    if(s === t){
        return true;
    }
    //
    let si = 0;
    let ti = 0;

    while(ti < t.length){
        if(t[ti] == s[si]){
            si = si + 1;
        }

        ti = ti + 1; 

        if(si == s.length){
            return true;
        }
    }

    return false;
    //
}

let s = "axc";
let t = "ahbgdc";
console.log(isSubsequence(s,t));