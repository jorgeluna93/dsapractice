def slidingWindow(str):
    l = 0
    w = 0
    subset = set()
    longest = 0
    
    for r in range(len(str)):
        while str[r] in subset:
            subset.pop()
            l = l + 1

        subset.add(str[r])
        w = (r-l) + 1

        if w>longest:
            longest = w

    return longest

print(slidingWindow(["p","w","w","k","e","w","x","x","z","a"]))