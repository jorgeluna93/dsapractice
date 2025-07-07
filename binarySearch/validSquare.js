

function validSquare(num){
    let l = 0;
    let r = num;

    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        let squareHammer = (m*m);
        if(squareHammer === num){
            return true;
        }
        else if(num < squareHammer){
            r = m-1;
        }
        else if(num > squareHammer){
            l = m+1;
        }
    }

    return false;

}

let num = 14;
console.log("Is the number " + num +  " a perfer square? .... ");
console.log("LOL IS " + validSquare(num));