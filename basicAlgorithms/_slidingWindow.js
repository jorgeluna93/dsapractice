function slidingWindow(arr){
    let l = 0;
    let subset = [];
    let longest = 0;
    let w = 0;
    for(let r = 0;r<arr.length;r++){
        while(subset.indexOf(arr[r]) != -1){
            subset.shift();
            l++;
        }

        subset.push(arr[r]);

        w = (r-l) + 1;

        if(w>longest){
            longest = w;
        }

    }

    return longest;
}
let longest = slidingWindow(["p","w","w","k","e","w","x","x","z","a"]);

console.log(longest);