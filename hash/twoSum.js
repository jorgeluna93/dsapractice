function twoSum(arr,tgt){
    if(arr.length == 0){
        return [];
    }
    
    let max = Math.max(...arr);//Max Value
    let min = Math.min(...arr);//Min Value
    let hm = new Map();
    
    for(let i = 0;i<arr.length;i++){
        let n = arr[i]; //save the key in a var so doesnt get lost
        
        if(hm.has(n) == false){
            hm.set(n,[]);//Create key 
        }

        hm.get(n).push(i); // save the location of that number :)

    }

    //find the half----------
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
    //----------------------    
    
    while(l >= min && r <= max){
        
        if(hm.has(l) && hm.has(r)){

            if(l == r && hm.get(l).length > 1){
                return [hm.get(l)[0],hm.get(l)[1]];
            }
            else if(l != r){
                return [hm.get(l)[0],hm.get(r)[0]];
            }
         
        }
        
        l = l - 1;
        r = r + 1;
        
    }

    return [];
}

console.log(twoSum([3,1,1,5,2,6,7,8,8,8,9,2,4],6));