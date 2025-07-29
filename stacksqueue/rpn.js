/*Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9 */

function rpn(opList){

    stack = [];
    let first = 0;

    for(let i=0;i<opList.length;i++){
        
        switch(opList[i]){
            case "+":
                first = stack.at(-1);
                stack.pop();
                stack = sums(first,stack);
                break;

            case "*":
                first = stack.at(-1);
                stack.pop();
                stack = mult(first,stack);
                break;   

            case "-":
                first = stack.at(-1);
                stack.pop();
                stack = subs(first,stack);
                break;

            case "/":
                first = stack.at(-1);
                stack.pop();
                stack = divs(first,stack);
                break;  

            default:
                first = parseInt(opList[i]);
                stack.push(first);
                break;
        }
    }

    return stack.at(-1);

}

function sums(result,stack){
    result = stack.at(-1) + result;
    stack.pop();
    stack.push(result)
    return stack;
}

function subs(result,stack){
    result = stack.at(-1) - result;
    stack.pop();
    stack.push(result)
    return stack;
}

function mult(result,stack){
    result = stack.at(-1) * result;
    stack.pop();
    stack.push(result)
    return stack;
}

function divs(result,stack){
    result = parseInt(parseInt(stack.at(-1)) / parseInt(result));
    stack.pop();
    stack.push(result);
    return stack;
}

console.log(rpn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));