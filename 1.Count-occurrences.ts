// Count the number of letter a in the array

let arr:any = ['a','b',['a','c','d'],'a','c'];


function countA(arra:any){
    
    let count = 0;

    for(let item of arra){
        if(Array.isArray(item)){
            count += countA(item)
        }else if(item == 'a'){
            count++;
        }
    }

    return count;
}


let value = countA(arr);
console.log(value)