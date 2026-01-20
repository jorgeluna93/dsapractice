def closestToZero(arr):
    closestToZero = None
    
    for n in arr:
        if(closestToZero is None):
            closestToZero = n
            continue

        if(abs(n) == abs(closestToZero) and n != closestToZero):
            closestToZero = abs(n)
            continue

        if(abs(n) < abs(closestToZero)):
            closestToZero = n
    
    return closestToZero


arr = [-4,-2,14,-1,4,8]
print(closestToZero(arr))