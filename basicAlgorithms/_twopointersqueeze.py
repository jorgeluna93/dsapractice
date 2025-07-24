def reverse(s):
    l = 0
    r = len(s) - 1

    while(l<r):
        temp = s[l]
        s[l] = s[r]
        s[r] = temp
        r-=1
        l+=1
    
    return s

print(reverse(["t","o","u","h","o","u"]))
    
