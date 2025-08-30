#include <iostream>
#include <vector>
/*
find the group of numbers that gives the sum target 
ex:
arr = [1,2,3,4,5,6,7,8,9,10], target = 19

result = [8,9]
*/

std::vector<int> sum(std::vector<int>& arr,int target){
    int l = 0;
    int total = 0;
    std::vector<int> group = {};

    for(int r = 0;r<arr.size();r++){
        group.push_back(r);
        total = total + arr[r];
        //
        while(total > target){
            total = total - arr[l];
             group.erase(group.begin());
             l = l+1;
        }
        //

        if(total == target){
            return group;
        }

    }

    std::vector<int> empty = {};
    return empty;

}

int main(){
    std::vector<int> arr = {1,7,2,10,5,6,7,8,1,10}; 
    int target = 19;
    std::vector<int> group = sum(arr,target);

    std::cout << "[ ";

    for (int i = 0; i < group.size(); i++)
    {
        std::cout << " " << group[i] << " "; 
    }

    std::cout << " ]";
    
    return 0;
}