// Checking Sum Zero

// o(n^2) quadratic time complexity
// Below Logic only works with Sorted Array

let data =  [-5,-4,-3,-2,0,2,4,6,8] 

function sumZeroPair(arrayData:number[]){
    for(let number of arrayData){
        for(let j = 1; j < arrayData.length; j++){
            if(number + arrayData[j] === 0){
                return [number,arrayData[j]]
            }
        }
    }

    return 'No Pair Found'
}

const result = sumZeroPair(data);

console.log(result);

