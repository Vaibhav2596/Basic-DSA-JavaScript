// Count Unique Numbers

let numArray = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];

// output -> 8
// conditions

// i = 0; j = 1;
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]

function countUniqueNumbers(arrayNum: number[]) {
  let i = 0;
  if (arrayNum.length > 0) {
    for (let j = 1; j < numArray.length; j++) {
      if (arrayNum[i] != arrayNum[j]) {
        i++;
        arrayNum[i] = arrayNum[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}

let value = countUniqueNumbers(numArray);

console.log(value);

// Linear Time Complexity o(n)