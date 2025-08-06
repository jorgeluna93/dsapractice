/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
    0 <= j <= nums[i] and
    i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

#include <iostream>
#include <vector>

int bestFit(std::vector<int>& nums,int bestIndex,int currentIndex){
    if(bestIndex == -1){
        return currentIndex;
    }

    int bestIndexSteps = (nums[bestIndex] == 0 ? 1 : nums[bestIndex]);
    int currentIndexSteps = (nums[currentIndex] == 0 ? 1 : nums[currentIndex]); 

    int maxRangeBestIndex = bestIndex + bestIndexSteps;
    int maxRangeCurrentIndex = currentIndex + currentIndexSteps;

    if(maxRangeCurrentIndex >= maxRangeBestIndex){
        return currentIndex;
    }

    return bestIndex;
}

int jump(std::vector<int>& nums){
    int jumps = 0;//Counts the number of jumps we have made
    int steps = 0;//Counts the number of steps we have advanced since the last jumped in index
    int maxSteps = 0;//Number of max steps we are allowed to do according to the last index we jump in 
    int lastJumpedIndex = 0; //index of the last box we jumped in
    int bestIndexInRange = 0; //index of the best box to jump in within the range of the lastIndex
    int i = 0;//Iterator/Cursor

    while(i < nums.size()){
        /*We calculate the best box to jump in (the one that will get us closer to the goal) while we moving through the array within
        the range of the "lastIndex" we jumped in*/
        bestIndexInRange = bestFit(nums,bestIndexInRange,i);

        //If we hit the last box in the range of "lastIndex", we jump to the "bestBoxIndex":the one that, according to our calculations, will take us the furthest.
        if(steps == maxSteps){
            jumps = (i == nums.size() - 1) ? jumps : jumps+1;//update our jump counter

            //Move to the best suited index that will take us the furthest
            i = bestIndexInRange; // jump to the best index
            lastJumpedIndex = bestIndexInRange; //jump to the best index
            maxSteps = (nums[bestIndexInRange] == 0 ? 1 : nums[bestIndexInRange]);//Update our range of movement according to the index we have just jumped in
            bestIndexInRange = -1;//restart the bestIndexInRange 
            steps = 0;//reset the steps
            //-----

            //If we are almost there, then just jump right into it!
            if(lastJumpedIndex + maxSteps >= nums.size()-1){
                break;
            }
            
        }

        //Move
        i++;
        steps++;
    }

    return jumps;

}

int main(){
    std::vector<int> arr = {2,3,1,1,4};
    int jumps = jump(arr);
    std::cout << jumps << std::endl;
    return 0;
}