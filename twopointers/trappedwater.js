/*not completed */
/*Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]*/

function trappedwater(hgt){
    let l = 0;
    let r = 0;
    let subset = [];
    let totalWater = 0;
    let currentWater = 0;

    while(r<=hgt.length){
        //Add to the subset
        if(r != hgt.length){
            subset.push(r);
        }

        //calculate the volume
        let max = 0;
        let min = 0;
        let top = hgt[subset[subset.length-1]];
        
        if(top > hgt[l]){
            max = top;
            min = hgt[l];
        }
        else{
            max = hgt[l];
            min = top;
        }

        let height = max - (max-min);
        let width = (r-l)-1;
        currentWater = width * height;
        //
        
        //condition to adjust the window
        if(r == hgt.length || hgt[r] >= hgt[l]){      
            l = r;
            subset = [r];
            //
            for(let i = 0;i<subset.length;i++){
                currentWater = currentWater - hgt[subset[i]];
            }
            console.log(totalWater);
            totalWater = totalWater + currentWater;
            //
            currentWater = 0;
        }
        //

        //Move to next position
        r++;
    }
    return totalWater;

}


let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let result = trappedwater(height);
console.log(result);