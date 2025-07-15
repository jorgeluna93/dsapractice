import math 

def conditionBased(arr):
    l = 0
    r = len(arr) - 1

    while l<r:
        m = math.floor((l+r)/2)
        
        if arr[m] == True:
            r=m
        else:
            l=m+1
    
    return l


print(conditionBased([False, False, False, False, False, True, True]))
