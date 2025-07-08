function stonks(wsPrices){
    let min_i = 0;
    let profit = 0;
    
    for(let i = 1;i<wsPrices.length;i++){

        if(wsPrices[i] >= wsPrices[min_i]){
            let possibleProfit = wsPrices[i] - wsPrices[min_i];
            
            if(possibleProfit > profit){
                profit = wsPrices[i] - wsPrices[min_i];
            }

        }

        if(wsPrices[i] < wsPrices[min_i]){
            min_i = i;
        }

    }
    return profit;
}

let wsPrices = [7,1,5,3,6,4];
console.log(stonks(wsPrices));