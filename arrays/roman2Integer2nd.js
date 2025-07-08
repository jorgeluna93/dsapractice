function roman2Int(r){
    let rNumerals = 
        {
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000
        };

    let total = 0;
    
    for(let i = 0;i<r.length;i++){
        total = total + rNumerals[r[i]];
        if(i > 0 && rNumerals[r[i]] > rNumerals[r[i-1]]){
            total = (total - rNumerals[r[i]]  - rNumerals[r[i-1]]) + (rNumerals[r[i]] - rNumerals[r[i-1]]);
        }
    }
    
    return total;
      
}

let r = "XLIV";
console.log(roman2Int(r));