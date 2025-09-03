#include<iostream>
#include<vector>
#include<string>
#include <cstdlib>

//Divides string by words
std::vector<std::string> splitByWords(std::string& str){
    std::vector<std::string> Paragraph;
    std::string current;

    for(int r=0;r<=str.size();r++){
        
        if(str[r] == ' ' || r == str.size()){
            Paragraph.push_back(current);
            current = "";
        }
        else{
            current = current + str[r];
        }

    }

    return Paragraph;
}

//Generates the window and prints it
void window(std::string& title,std::string& msg,int length = 50){
    /*Set-up (size)*/
    std::string border = std::string(length,'-') + '\n';
    std::string baseLine = "--" + std::string(length-4,' ') + "--\n";
    std::string workLine = baseLine;
    int maxLength = length-3;

    /*Format text of title and msg, create a cursor to move through the text */
    auto sTitle = splitByWords(title);
    auto sMsg = splitByWords(msg);
    int wI = 0;
    
    /*Prints the first line */
    std::cout << border;

    /*Creates title*/
    for(int i=3;i<maxLength;i++){

        if((i + sTitle[wI].size()) > maxLength){
            break;
        }

        for(int j = 0;j<sTitle[wI].size();j++){
            workLine[i] = sTitle[wI][j];
            i++;
        }

        wI = wI+1;
    }

    /*Prints title*/
    std::cout << workLine << border;

    /*Creates the body*/
    wI = 0;//reset the index

    while(wI<sMsg.size()){
        workLine = baseLine;

        /*New Line*/
        for(int i=3;i<maxLength;i++){
            if((i + sMsg[wI].size()) > maxLength){
                break;
            }
            
            for(int j = 0;j<sMsg[wI].size();j++){
                workLine[i] = sMsg[wI][j];
                i++;
            }

            wI = wI+1;
        }

        std::cout << workLine;
    }

    /*Prints last border*/
    std::cout << border;

}

//Main
int main(){
    std::string title = "(i) - Test Window!";
    std::string msg = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
    int size = 75;
    window(title,msg,size);
    return 0;
}