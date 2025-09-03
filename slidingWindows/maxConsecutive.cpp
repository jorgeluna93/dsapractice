#include <iostream>
#include <vector>
#include <string>

int maxConsecutive(std::vector<int>& bin, int& k){
    int l = 0;//left position of window
    int w = 0;//weight/size of window
    int usedFlips = 0;//number of used flips
    int maxConsecutive = 0;//max string of 1's 
    
    for(int r=0;r<bin.size();r++){

        if(bin[r] == 0){
            usedFlips = usedFlips + 1;
        }

        while(usedFlips > k){
            if(bin[l] == 0){
                usedFlips = usedFlips - 1;
            }
            l = l + 1;
        }

        w = (r-l)+1;

        if(w>maxConsecutive){
            maxConsecutive = w;
        }

    }

    return maxConsecutive;
}

