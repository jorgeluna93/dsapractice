#include <iostream>
#include <vector>
#include <cmath>

int closestToZero(std::vector<int>& arr){
    bool firstRun = true;
    int closest = 0;
    int current = 0;

    for(int i = 0;i < arr.size();i++){
        if(firstRun){
            closest = arr[i];
            firstRun = false;
        }

        if(abs(arr[i]) < abs(closest) || (abs(arr[i]) == abs(closest) && arr[i] > closest)){
            closest = arr[i];
        }

    }

    return closest;
}

