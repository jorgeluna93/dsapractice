import math

def binarySearch (arr,target):

    l = 0
    r = len(arr) - 1

    while l<=r:
        m = l + math.floor((r-l)/2)

        if target == arr[m]:
            return m
        elif target < arr[m]:
            r = m - 1
        elif target > arr[m]:
            l = m + 1
    
    return -1

print(binarySearch([-2,-1,0,1,2,3,4,5,6,7,8,9,10],4))