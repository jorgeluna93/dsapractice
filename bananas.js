/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

 

Constraints:

    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109


*/
function bananaMinSpeed(piles,h){
    let l = 1;
    let r = Math.max(...piles);
    let m = null;

    while(l < r){
        m = Math.floor((l+r)/2);
        console.log("[!]-- Run ---------------------------------]");
        console.log(" l = " + l + "; r = " + r + "; m = "+ m + "; ");
        console.log("[__________________________________________]");
        console.log("\n");

        if(bananaConsumption(piles,m,h)){//condition here
            r = m;
        }
        else{
            l = m + 1;
        }
    }
    return l;
    //
}



function bananaConsumption(arr,k,h){
    let maxPile = Math.max(...arr); //Get the biggest pile
    let timeToEatMaxPile = Math.ceil(maxPile/k); //Calculate the needed speed to eat the max pile
    console.log(timeToEatMaxPile);
    //
    let feasibleSpeed = (timeToEatMaxPile <= h);//It is the current speed enough to eat all the greatest pile in time?
    //
    let timeEating = 0;
    //
    if(feasibleSpeed ){
        for(let i = 0;i<arr.length;i++){
            timeEating = timeEating + Math.ceil(arr[i]/k);  
        }
        
        return (timeEating <= h);
    }
    else {
        return false;
    }

}

//h-timeToEatMaxPile 

/*
let piles = [30,11,23,4,20];
let h = 5;
*/

let piles = [1000000000];
let h = 2;

console.log(bananaMinSpeed(piles,h));