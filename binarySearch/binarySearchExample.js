//Binary Search

function binarySearch(arr,elementToSearch){
    //let n = arr.length;
    let l = 0;
    let r = arr.length -1;
    let m = null;

    while(l <= r){
        m =  l + Math.floor([r-l]/2);
        if(arr[m] == elementToSearch){   
            return ({"index":m,"found":true});
        }
        else if(elementToSearch < arr[m]){
            r =  m - 1;
        }
        else if(elementToSearch > arr[m]){
            l = m + 1;
        }
    }
    
    return ({"index":null,"found":false});

}

console.log(binarySearch([-3,-1,0,1,4,7],1));