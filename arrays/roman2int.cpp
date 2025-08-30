#include <iostream>
#include <vector>
#include <cmath>
#include <string>
#include <algorithm> 

int indexOf(std::vector<char>& arr,char& target){
    auto in = find(arr.begin(),arr.end(),target);
    return in - arr.begin();
}

int roman2int(std::string& romanValue){
    std::vector<char> romanNumerals= {'I','V','X','L','C','D','M'};
    std::vector<int> romanValues = {1,5,10,50,100,500,1000};

    int previousValue = -1;
    int index = -1;
    int currentValue = 0;
    int decimalValue = 0;

    for(int i = 0;i< romanValue.size();i++){
        index = indexOf(romanNumerals,romanValue[i]);
        currentValue = romanValues[index];
        decimalValue = decimalValue + currentValue;

        if(previousValue == -1){
            previousValue = currentValue;
            continue;
        }

        if(currentValue > previousValue){
            decimalValue = (decimalValue - currentValue - previousValue) + (currentValue - previousValue);
        }

        previousValue = currentValue;
    }

    return decimalValue;
}

int main(){
    std::string romanValue = "IX";
    int decimalValue = roman2int(romanValue);
    std::cout << "(i) - The decimal value of " << romanValue << " is " << decimalValue << std::endl;
    return 0;
}