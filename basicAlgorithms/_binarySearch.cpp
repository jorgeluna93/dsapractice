#include <iostream>
#include <vector>
#include <cmath>

int _binarySearch(std::vector<int>& nums, int target){
    int l = 0;
    int r = nums.size() - 1;
    int m = 0;

    while(l<=r){
        m = l + floor((r-l)/2);

        if(target == nums[m]){
            return m;
        }
        else if(target < nums[m]){
            r = m - 1;
        }
        else if(target > nums[m]){
            l = l + 1;
        }
    }
    
    return -1;
}

int main(){
    std::vector arr = {-2,-1,0,1,2,3,4,5,6,7,8,9,10};
    int result = _binarySearch(arr,4);
    std::cout << result << std::endl;
    return 0;
}

