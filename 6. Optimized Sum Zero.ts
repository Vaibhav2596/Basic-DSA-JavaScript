// Checking Sum Zero

let sampleData =  [-5,-4,-3,-2,0,2,4,6,8] 

let left = 0;
let right = sampleData.length - 1;

function getSumZeroPair(arrayData:number[]){

    while(left < right){
        if(arrayData[left] + arrayData[right] == 0){
            return [arrayData[left],arrayData[right]];
        }
        else if(arrayData[left] + arrayData[right] > 0){
            right--;
        }else{
            left++;
        }
    }

    return 'No Pair Found';
}


console.log(getSumZeroPair(sampleData));


// o(n) Linear Time Complexity