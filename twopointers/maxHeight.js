/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
*/

function maxVolume(arr){
    let l = 0;
    let r = arr.length - 1;
    let maxVolume = 0;


    while(l<=r){
        let width = r-l;
        let max = 0;
        let min = 0;

        if(arr[l] >= arr[r]){
            max = arr[l];
            min = arr[r];
            r--;
        }
        else{
            max = arr[r];
            min = arr[l];
            l++;
        }

        let height = max - (max-min);

        let volume = width * height;

        if(volume > maxVolume){
            maxVolume = volume;
        }
    }
  
    return maxVolume;
}

let height = [1,8,6,2,5,4,8,3,7];

console.log(maxVolume(height));