function median(n1,n2){

    let fused = n1.concat(n2).sort((a, b) => a - b);
    let size = n1.length + n2.length;
    let median = Math.floor(size/2);
    let finalMedian = 0;
    //
    if(size%2 == 0){
        finalMedian = (fused[median] + fused[median-1])/2;
    }
    else{
        finalMedian = fused[median];
    }
    //
    console.log(finalMedian);
    return finalMedian;

}

median([1,2,3,4,5],[6,7,8,9,10,11,12,13,14,15,16,17]);
