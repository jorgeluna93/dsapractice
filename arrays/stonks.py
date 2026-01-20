def stonks(wsPrices):
    min_i = 0
    profit = 0

    for i in range(len(wsPrices)):
        if(wsPrices[i] >= wsPrices[min_i]):
            possibleProfit = wsPrices[i] - wsPrices[min_i]

            if(possibleProfit > profit):
                profit = possibleProfit
        
        if wsPrices[i] < wsPrices[min_i]:
            min_i = i
    
    return profit


wsPrices = [7,1,5,3,6,4]
print (stonks(wsPrices))

