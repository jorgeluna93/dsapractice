/*
    An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

*/
function bsball(ops){
    let out = [];

    for(let i = 0;i<ops.length;i++){
    
        switch (ops[i]){
            case "C":
                out.pop();
                break;
            case "D":
                out.push(out[out.length-1]*2);
                break;
            case "+":
                out.push(out[out.length-1] + out[out.length-2]);
                break;
            default:
                out.push(parseInt(ops[i]));
                break;
        }
    }

    let result = 0;
    out.forEach((num) =>{
        result = result + num;
    });

    return result;
}

let ops = ["5","2","C","D","+"];

console.log(bsball(ops));