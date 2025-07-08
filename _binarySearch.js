/*
Basic example of a Traditional Binary Search

Looks for a certain number in a sorted array.

*/


function binarySearch(arr,target, demoMode = false){

    let l = 0; //Initial left position
    let r = arr.length - 1; //Initial right position
    
    //Added just for demo purposes
    let run = 0;
    //
    while(l<=r){
        
        m = l + Math.floor((r-l)/2);//Calculate the middle point

        //Show logs if demoMode = true
        if(demoMode){
            run++;
            console.log("(i) - Run " + run);
            console.log("l = " + l + " | m = " + m + "| r = " + r);
            console.log("-------------------------\n");
        }
        //

        if(target == arr[m]){
            //Show logs if demoMode = true
            if(demoMode){
                console.log("(i) - " + target + " Found at position " + m + "!");
                console.log("Total Runs - " + run);
                console.log("-------------------------\n");
                
            }
            //
            return m;
        }
        else if(target > arr[m]){
            l = m + 1;
        }
        else if(target < arr[m]){
            r = m - 1;
        }
    }

    //Show logs if demoMode = true
    if(demoMode){
        console.log("(i) - " + target + " Not Found!");
        console.log("Total Runs - " + run);
        console.log("-------------------------\n");
    }
    //

    return -1;

}

binarySearch([-2,-1,0,1,2,3,4,5,6,7,8,9,10],4,true);
