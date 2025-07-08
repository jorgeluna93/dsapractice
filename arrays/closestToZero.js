function closestToZero(arr){

    let closestToZero = null;

    for(let i = 0;i<arr.length;i++){
        if(closestToZero == null){
            closestToZero = arr[i];
            continue;
        }

        if(Math.abs(arr[i]) == Math.abs(closestToZero)){
            if(arr[i] != closestToZero){
                closestToZero = Math.abs(arr[i]);
            }
            continue;
        }

        if(Math.abs(arr[i]) < Math.abs(closestToZero)){
            closestToZero = arr[i];
        }

    }

    return closestToZero;
}

let arr = [-4,-2,1,4,8];
console.log(closestToZero(arr));