#include <iostream>
#include <cmath>
#include <vector>
#include <algorithm>
#include <string>

/*
You are given a string s and an integer k. 
You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter
you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

//Class to group all the logic behind counting each letter we have found
class AlphabetArray {
    private:
        std::vector<int> AlphabetFrequency = std::vector<int>(26,0);
        int numberOfLetters = 0;

    public:
        AlphabetArray(){};
        void add(char& letter){
            int ASCIILetter = letter - 65;
            AlphabetFrequency[ASCIILetter] = AlphabetFrequency[ASCIILetter] + 1;
            numberOfLetters = numberOfLetters + 1;
        };
        void remove(char& letter){
            int ASCIILetter = letter - 65;
            AlphabetFrequency[ASCIILetter] = AlphabetFrequency[ASCIILetter] - 1;
            numberOfLetters = numberOfLetters - 1;
        };
        bool isValidWindow(int allowedChanges){
            auto mostFrequentLetter = max_element(AlphabetFrequency.begin(),AlphabetFrequency.end());

            if((numberOfLetters - *mostFrequentLetter) > allowedChanges){
                return false;
            }

            return true;
        };
        int size(){
            return numberOfLetters;
        }
};

//Function that returns the longest string without repeating any char, we can change a char k times
//It uses Sliding Window Approach 
int longestRepeating(std::string& str,int& k){
    int l = 0;
    int longestRepeatingStr = 0;
    AlphabetArray* alphabet = new AlphabetArray();
    
    for(int r = 0;r<str.size();r++){
        
        alphabet->add(str[r]);

        while(!alphabet->isValidWindow(k)){
            alphabet->remove(str[l]);
            l = l+1;
        }

        if(alphabet->size() > longestRepeatingStr){
            longestRepeatingStr = alphabet->size();
        }

    }

    delete alphabet;
    alphabet = nullptr;
    return longestRepeatingStr;
}

int main(){
    std::string arr = "AABXZBA";
    int k = 1;
    int longestRepeatingNo = longestRepeating(arr,k);
    std::cout << longestRepeatingNo << std::endl;
    return 0;
}