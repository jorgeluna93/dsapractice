#include <iostream>
#include <vector>
#include <string>

int bsball(std::vector<char>& ops){
    std::vector<int> out = {};

    for(int i = 0;i<ops.size() - 1;i++){
        switch(ops[i]){
            case 'C':
                out.pop_back();
                break;
            case 'D':
                out.push_back(out[out.size()-1] * 2);
                break;
            case '+':
                out.push_back(ops[out.size()-1] + ops[out.size()-2]);
                break;
            default:
                out.push_back(ops[i] - '0');
                break;
        }
    }

    int result = 0;
    for(int j = 0;j<out.size();j++){
       
        result = result + out[j];
    }

    return result;
}

int main(){
    std::vector<char> game = {'5','2','C','D','+'};
    int result = bsball(game);
    std::cout << "RESULT -> " << result << std::endl;
}