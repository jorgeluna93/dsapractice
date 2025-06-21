def hasPermutation(s1,s2):
    k = len(s1)
    l = 0
    r = l + (k-1)
    cursor = l
    subset = s1
    
    while r < len(s2):
        if (s2[l] not in s1)  or  (s2[r] not in s1):
            l = l + 1
            r = r + 1
        
        if s2[cursor] in subset:
            subset = subset.replace(s2[cursor],"",1)
            cursor = cursor + 1
        elif s2[cursor] in s1:
            subset.apppend(s2[cursor])
            l = l + 1
            r = r + 1
        else:
            l = cursor + 1
            r = l + (k-1)
            cursor = l
            subset = s1
        
        if len(subset) == 0:
            return True
       
     
    return False
       
print(hasPermutation("ohx","xhola"))