// Reverse a String

let task = "angular";

let reverseStringa = task.split("").reverse().join();
console.log(reverseStringa)


function reverseString(str:string){
    let revString = '';

    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }

    return revString;
}

console.log(reverseString(task))