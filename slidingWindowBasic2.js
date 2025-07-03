/*
find the group of numbers that gives the sum target 
ex:
arr = [1,2,3,4,5,6,7,8,9,10], target = 19

result = [8,9]

*/

function slidingWindow(arr,target){
    let l = 0;
    let sum = 0;
    let subset = [];

    for(r = 0;r<arr.length;r++){
        sum = sum + arr[r];
        subset.push(r);

        while(sum > target){
            sum = sum - arr[l];
            subset.shift();
            l++;
        }

        if(sum == target){
            return subset;
        }
    }

    return [];
}

let result = slidingWindow([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],19);
console.log(result);