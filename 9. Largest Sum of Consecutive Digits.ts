let sumExample = [1,2,3,4,3,5,4,6,7,8] 
// Total Elements 10
// Count Largest Sum of Consecutive Digits
// num = 4
// sum => 25

// conditions
// num > array -> error message
// Formula to Calculate no of loops 
// Total Array Length - Number + 1
// 10 - 4 + 1 => 7

function findLargest(array:number[],num:number){
    if(num > array.length){
        throw new Error("num should not be greater than array")
    }else{
        let max = 0;
        for(let i = 0; i < array.length - num + 1;i++){
            let tmp = 0;
            for(let j = 0; j< num;j++){
                tmp += array[i + j];
            }
            if(tmp > max){
                max = tmp;
            }
        }
        return max;
    }
}

const result = findLargest(sumExample,4);
console.log(result)



function sumConsecutive(arrayData:number[],num:number):number{
    if(num > arrayData.length){
        throw new Error("Number is greater than the length of the array");
    }else{
        let max = 0;

        for(let i = 0; i < arrayData.length - num + 1; i++){
            let tmp = 0;
            for(let j = 0; j < num; j++){
                tmp += arrayData[i + j]
            };
            if(tmp > max){
                max = tmp;
            }
        }

         return max;
    }
}

const result1 = sumConsecutive(sumExample,4);
console.log(result1)