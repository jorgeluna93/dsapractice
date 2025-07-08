
function roman2Int(r){
 
    let rLetter = ["I","V","X","L","C","D","M"];
    let rValue = [1,5,10,50,100,500,1000];

    //
    let previousValue = null;
    let index  = null;
    let value = 0;
    //
    let total = 0;

    for(let i = 0;i < r.length;i++){
        index = rLetter.indexOf(r[i]);
        value = rValue[index];
        console.log("Current value" + value);
        //
        total = total + value;
        //

        if(previousValue === null){
            previousValue = value;
            continue;            
        }

        if(value > previousValue){
            total = (total - value - previousValue) + (value - previousValue);
            
        }

        previousValue = value;
    }

    return total;
}

let r = "XLIV";
console.log(roman2Int(r));