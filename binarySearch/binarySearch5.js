/*
find the index in the array where the target number appears
ex:
arr = [1,2,3,4,5,6,7,8,9,10], target = 3

result = [2]

*/

function binarySearch(arr,target){
    let l = 0;
    let r = arr.length -1;
    let m = null;
    while(l<=r)//we stop at the crosspath
    {
        m = l + Math.floor((r-l)/2);

        if(target === arr[m]){
            return m;
        }
        else if(target > arr[m]){
            l = m+1;
        }
        else if(target < arr[m]){
            r = m-1;
        }

    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],3));
