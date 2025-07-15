function conditionBased(arr){

    let l = 0;
    let r = arr.length - 1;

    while(l<r){
        m = Math.floor((l+r)/2);
        
        if(arr[m] == true){
            r=m;
        }
        else{
            l = m+1;
        }
    }

    return l;
}

console.log(conditionBased([false, false, false, false, false, true, true]));