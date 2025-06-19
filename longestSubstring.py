
def slidingWindow(arr):
    subarr = [] #subarray (kinda the window)
    longest = 0 #longest window size
    w = 0 #size of the current window
    l = 0 #left side position of the window

    print("(i) - This is the array we are goin' through: " + str(arr))
    print("    - L = the left side of the window, R = the right side of the window, w = The size of the window (R-L)+1")

    for r in range(len(arr)):
        while arr[r] in subarr:
            subarr.pop(0)
            l = l+1
        

        subarr.append(arr[r])
        print("(i) - Currently on: " + arr[r])
        print("    - Set = {" + str(subarr) + "}")
        print("    - L = " + str(l))
        print("    - R = " + str(r))
        print("    - w = " + str(w))

        w = (r - l) + 1

        if w > longest:
            longest = w
        
        print("    - Longest substring = " + str(longest))

    return longest


longSubstring = slidingWindow(["p","w","w","k","e","w"])

print(longSubstring)