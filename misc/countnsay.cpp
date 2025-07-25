#include <iostream>
#include <string>

std::string RLEThis(std::string str){
    int l = 0;
    int r = 0;
    std::string rle = "";

    while(r<=str.size()){
        if(r<str.size() && str[l] == str[r]){
            r++;
        }
        else{
            int w = ((r-1)-l)+ 1;
            rle = rle + std::to_string(w) + str[l];
            l = r;
            r++;
        }
    }   

    return rle;
}

std::string countnsay(int n){
    //If if just 1, then why bother, right?
    if(n==1){
        return "1";
    }
    //---

    std::string output = "1";
    int iterator = 2;

    while(iterator<=n){
        output = RLEThis(output);
        iterator++;
    }

    return output;

}

int main(){
    std::string result = countnsay(4);
    std::cout << result << std::endl;
    return 0;
}