function twoSum(arr,tgt){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let hm = {};
    
    for(let i = 0;i<arr.length;i++){
        let n = arr[i];
        hm[n] = i;
    }

    //find the half 
    let l = 0;
    let r = 0;

    if((tgt%2) != 0){
        l = Math.floor(tgt/2);
        r = tgt - l;
    }
    else{
        l = (tgt/2);
        r = (tgt/2);
    }
    console.log(hm);
    while(l >= min && r <= max){
        //console.log(l + " + " + r);
        //console.log(hm[r.toString()]);
        //console.log(hm[l.toString()]);
        if((hm[l.toString()] != undefined) && (hm[r.toString()] != undefined)){

            let arr2 = [];
            arr2.push(hm[l]);
            arr2.push(hm[r]);
            return arr2;
        }
        else{
            l = l - 1;
            r = r + 1;
        }
    }

    return [];
}

console.log(twoSum([3,3],6));