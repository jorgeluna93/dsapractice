function validBracket(s){
    let bracketID = {"{":1,"}":1,"[":2,"]":2,"(":3,")":3 };
    let openBrackets = new Set(["{","(","["]);
    let stack = [];
    
    for(let i = 0;i<s.length;i++){
        if(openBrackets.has(s[i])){
            stack.push(s[i]);
        }
        else if(bracketID[s[i]] === bracketID[stack.at(-1)]){
            stack.pop();
        }
        else{
            return false;
        }
    }

    if(stack.length > 0){
        return false;
    }
    else{
        return true;
    }
}

console.log(validBracket("[[][]{}()]"));