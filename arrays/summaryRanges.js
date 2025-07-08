function summaryRanges(n){
    let l = 0;
    let r = 0;
    let ranges = [];
    //

    while(r<n.length){
        let w = (r-l) + 1;

        if(w === 1){
            ranges.push(n[r].toString());
            r++;
            continue;
        }

        let expectedValue = n[l] + (r-l);

        if(n[r] === expectedValue){
            ranges[(ranges.length-1)] = n[l].toString() + "->" + n[r];
            r++;
        }
        else{
            l = r;
        }
    }
    //
    return ranges;
}

let nums = [0,2,3,4,6,8,9];
console.log(summaryRanges(nums));