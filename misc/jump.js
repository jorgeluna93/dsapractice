/**
 * Calcs min needed jumps to reach to the end of array
 * @param {number[]} nums 
 * @return {number}
 */
function jump(nums){
    let steps = 0;//Count the number of steps we have advanced since the last index
    let maxSteps = 0; //Number of max steps we are allowed to do according to the last index we jump in 
    let lastIndex = 0; //index of the last box we jumped in
    let bestBoxIndex = 0;//index of the best box to jump in within the range of the lastIndex
    let jumps = 0;//Counts the number of jumps we have made
    let i = 0;//iterator/cursor
    //console.log("ARRAY : " + nums);

    while (i < nums.length){
        /*We calculate the best box to jump in (the one that will get us closer to the goal) while we moving through the array within
        the range of the "lastIndex" we jumped in*/
        bestBoxIndex = bestFit(nums,bestBoxIndex,i);
        
        //If we hit the last box in the range of "lastIndex", we jump to the "bestBoxIndex":the one that, according to our calculations, will take us the furthest.
        if(steps == maxSteps) {
            jumps = (i == nums.length - 1 ? jumps : jumps+1); //add +1 jump
            
            //Let's move to the bestBoxIndex°
            maxSteps = (nums[bestBoxIndex] == 0 ? 1 : nums[bestBoxIndex]);//update the maxSteps according to the box we are going to jump in
            lastIndex = bestBoxIndex;//Let's move to the bestBoxIndex
            i = bestBoxIndex;//Let's move to the bestBoxIndex
            bestBoxIndex = null; //restart the bestBoxIndex value as we are in a new range
            steps = 0;//restart the steps counter
            //-----
            
            //If we are almost there.... then why bother to calculate and do all over again? :)
            if(lastIndex + maxSteps >= nums.length-1){
                break;
            }
            //
            
            //console.log("LAST INDEX : " + lastIndex + " MAX STEPS ALLOWED : " + maxSteps);
        }

        i++;//move the iterator/cursor
        steps++;//as we move, we need to count the steps we have advanced
    }

    return jumps;//finished!
}

function bestFit(nums,prevI,newI){
    /*Calcs if the current index is a better fit than the previous better one.
    That means.... which one take us the furthest?
    */
   
    if(prevI == null){
        return newI;
    }

    let prevISteps = (nums[prevI] == 0 ? 1 : nums[prevI]);
    let newISteps  = (nums[newI] == 0 ? 1 : nums[newI]);

    let maxRangePrevI = prevI + prevISteps;
    let maxRangeNewI = newI + newISteps;
    
    if(maxRangeNewI >= maxRangePrevI){
        return newI;
    }

    return prevI;
}

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]));
console.log(jump([9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5]));