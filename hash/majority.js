function majority(arr){
    let mapita = new Map();

    for(let i = 0;i<arr.length;i++){
        let c = arr[i];
        
        if(!mapita.has(c)){
            mapita.set(c,0);
        }

        mapita.set(c,mapita.get(c) + 1);

        
        if(mapita.get(c) >= Math.ceil(arr.length/2)){

            return c;
        }
    }
    
    
}



console.log(majority([3,2,3]));

