#include <iostream>
#include <vector>
#include <cmath>

int _cBasedbinarySearch(std::vector<bool>& nums){
    int l = 0;
    int r = nums.size() - 1;
    int m = 0;

    while(l<r){
        m = floor((l+r)/2);
        if(nums[m]){
            r = m;
        }
        else {
            l = m + 1;
        }
    }
    
    return l;
}

int main(){
    std::vector arr = {false, false, false, false, false, true, true};
    int result = _cBasedbinarySearch(arr);
    std::cout << result << std::endl;
    return 0;
}

