function binarySearchRefresher(arr,target){
    let l = 0;
    let r = arr.length - 1;
    let m = null;

    while(l<=r){
        m = l + Math.floor(r-l/2);
        
        if(target === arr[m]){
            return {"found":true,"index":m,"target":target};
        }
        else if(target > arr[m]){
            l = m + 1;
        }
        else if(target < arr[m]){
            r = m - 1;
        }
    }

    return {"found":false};
}

let arr = [-45,-19,-18,-2,-1,0,1,2,3,6,8,69,70,99];
let target = 71
console.log(binarySearchRefresher(arr,target));


