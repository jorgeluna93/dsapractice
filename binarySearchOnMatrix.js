/*
Search for a value in a matrix return coordinates (y,x)
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 
Expected result = [0,1]  
*/

/*
For this kind of cases we use the binary search.
I came up with a 2d matrix implementation based on what ive learned
*/

function binarySearch(mt,target){
    /*
    We measure the size of the matrix (x and y)
     */
    let ySize = mt.length - 1; 
    let xSize = mt[0].length - 1;

    /*We initialize the Ly and Ry (Extreme positions in y)*/
    /*Set up Lx and Rx in null for now as we first need to calculate the y position */
    let Ly = 0;
    let Lx = null;
    //
    let Ry = ySize;
    let Rx = null;

    while(Ly<=Ry){
        //
        let My = Ly + Math.floor((Ry-Ly)/2); //Calculate the middle point in y
        let Mx = null; //set up our Mx (middle point in x ) to null, we are going to need it later
        let current = null;//set up current value to null, we are going to need it later
        //
        /*
        Init Lx and Rx, our extrem positions in x, we are going to work with the middle row we calculated with "My"
        */
        Lx = 0; 
        Rx = xSize;
        
        //Working at x level 
        while(Lx<=Rx){
            Mx = Lx + Math.floor((Rx-Lx)/2);//Calculate the middle point in x
            current = mt[My][Mx]; //get the current value with our current coordinates My,Mx, the middle points
            if(target === current){
                return [My,Mx];//If we found the value then just return the coordinates
            }
            /*If we have yet to find the value, move our coordinates in x */
            else if(target > current){
                Lx = Mx + 1;
            }
            else if(target < current){
                
                Rx = Mx - 1;
            }
        }
        //


        /*If we have yet to find the value, move our coordinates in y */
        if(target > current){
            Ly = My +1;
        }
        else if(target < current){
            Ry = My -1;
        }
    }

    return null; //if we cant find that stuff, just null and call it a day

}

//run example:
let mt = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let location = binarySearch(mt,-1);

console.log(location); //prints coordinates of the found value
//prints the found value with the coordinats (if exists)
if(location != null){
    console.log(mt[location[0]][location[1]]);
}