#include <iostream>
#include <vector>

void printArray(std::vector<char>& s){
    std::cout << "[";
    
    for(int i = 0;i<s.size();i++){
        if(i==0){
            std::cout << s[i];
        }
        else{
            std::cout << " , " << s[i] ;
        }
    }

    std::cout << "]" << std::endl;

}

void reverseArray(std::vector<char>& s){
    int l = 0;
    int r = s.size() - 1;
    char temp;

    while(l<r){
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        r--;
        l++;
    }

}

int main(){
    std::vector s = {'t','o','u','h','o','u'};
    reverseArray(s);
    printArray(s);
}
