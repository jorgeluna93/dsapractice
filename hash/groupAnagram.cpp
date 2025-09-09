#include<iostream>
#include<unordered_map>
#include<string>
#include<vector>
#include<algorithm>
#include<sstream>
#include<iterator>

std::string getKey(std::string& word){
    std::vector<int> key(26,0);

    for(int c = 0;c<word.size();c++){
        int ascii = word[c] - 97;
        key[ascii] = key[ascii] + 1;
    }

    std::stringstream result;
    std::copy(key.begin(),key.end(),std::ostream_iterator<int>(result,""));
    
    return result.str();
}

void groupAnagram(std::vector<std::string>& words){
    std::unordered_map<std::string,std::vector<std::string>> anagrams;

    for(int i = 0;i<words.size();i++){
        std::string key = getKey(words[i]);
        anagrams[key].push_back(words[i]);
    }
   
    for (const auto& [key, value] : anagrams) {
        std::cout << "{";
        for(const auto& word : value){
            std::cout << " '" << word << "' ";
        }
        std::cout << "}" << std::endl;
    }

}
int main(){
    std::vector<std::string> words = {"eat","tea","tan","ate","nat","bat"};
    groupAnagram(words);
    return 0;
}