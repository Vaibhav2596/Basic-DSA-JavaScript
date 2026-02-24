// Remove Duplicate from Arrays

let arr = [1,2,3,2,4,5,1];
let unique = [...new Set(arr)]

console.log(unique)


function removeDuplicates(arr:number[]){

    const result:number[] = [];

    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }

    return result;
}

console.log(removeDuplicates(arr))