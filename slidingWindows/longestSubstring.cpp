//Trying a Slidin' window with the longest substring problem:
/*
Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

#include<iostream>
#include <unordered_map>
#include <string>


int longestSubstring(std::string& str){
    std::unordered_map<char, int> characters;
    int l = 0;//l side of the window
    int w; //Weight/size of the window
    char lv;//Character at l index
    char rv;//Character at r index
    int longest = 0;
    for (int r = 0; r < str.size(); r++)
    {
        char rv = str[r];
        characters[rv] = characters[rv] + 1;
      
        while(characters[rv] > 1){
            char lv = str[l];
            characters[lv] = characters[lv] - 1;
            l = l + 1;
        }

        w = (r - l) + 1;

        if(w > longest){
            longest = w;
        }
    }

    return longest;
}
int main(int argc, char* argv[]){
    std::string s = argv[1];
    int longest = longestSubstring(s);
    std::cout << "The longest substring of your string is: " << longest << std::endl;

    return 0;
}