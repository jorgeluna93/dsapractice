def hasPermutation(s1,s2):
    k = len(s1)
    l = 0
    r = l + (k-1)
    cursor = l
    subset = s1
    
    print("(i) - Size of s2 -> " + str(len(s2)))

    while r < len(s2):

        print("Cursor Pos -> " + str(cursor) + " Cursor Val -> " + s2[cursor])
        w = (r-l) + 1
        print("Size of the window " + str(w))
        print("Size of s1 " + str(len(s1)))
        print(subset)
        
        #
        x = l
        while(x<=r):
            print("{" + s2[x] + "}")
            x = x + 1
        #   


        if (s2[l] not in s1)  and  (s2[r] not in s1):
            l = l + 1
            r = r + 1
        
        if s2[cursor] in subset:
            print("Found " + s2[cursor])
            subset = subset.replace(s2[cursor],"",1)
            cursor = cursor + 1
            
        elif s2[cursor] in s1:
            print("Adding " + s2[cursor])
            subset = subset + s2[cursor]
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
       
print(hasPermutation("hello","ooolleoooleh"))