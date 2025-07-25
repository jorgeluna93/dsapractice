def RLEThis(s):
    l = 0
    r = 0
    rle = ""
   
    while(r<=len(s)):
        if(r<len(s) and s[l] == s[r]):
            r+=1
        else:
            size = (r-1) - l + 1
            rle = rle + str(size) + s[l]
            l = r
            r+=1
            
    return rle

def countnsay(n):
    if(n == 1):
        return "1"
    
    s = "1"
    iterator = 2
  
    while(iterator<=n):
        s = RLEThis(s)
        iterator+=1
    
    return s


print(countnsay(3))



        