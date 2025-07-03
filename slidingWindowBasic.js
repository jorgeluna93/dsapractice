/*
find the group of numbers that gives the sum target 
ex:
arr = [1,2,3,4,5,6,7,8,9,10], target = 19

result = [8,9]

*/
function slidingWindow(arr,target){
     let l = 0;
     let r = 0;
     let w = (r-l) + 1;
     let sum = 0;
     let subset = [];

     while(r<arr.length){
        w = (r-l) + 1;
        sum = sum + arr[r];
        subset.push(r);

        while(sum > target){
            sum = sum - arr[l];
            subset.shift();
            l++;
            w = (r-l) + 1;
        }

        r++;
     }

     return {"subset":subset, "weight":w, "sum":sum};

}

let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 19;
let result = slidingWindow(arr,target);
console.log(result);

