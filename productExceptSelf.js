function productExceptSelf(arr) {
    let right = 1;
    let left = 1;

    for(let i = 0;i<arr.length;i++){
        right = right * arr[i];
    }

    for(let i2 = 0;i2<arr.length;i2++){
        left = left * arr[i2];
        
    }


}

let nums = [1,2,3,4];
console.log(productExceptSelf(nums));