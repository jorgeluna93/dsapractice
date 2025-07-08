/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
function maxVolume(arr){
    let l = 0;
    
    //
    let maxHeight_L = 0;
    let maxHeight_R = 0;
    let volume = 0;

    for(let r = 1;r<arr.length;r++){
        
        //
        while(arr[l]<arr[r]){
                
        }
        //

    }
}

let height = [1,8,6,2,5,4,8,3,7];

console.log(maxVolume(height));