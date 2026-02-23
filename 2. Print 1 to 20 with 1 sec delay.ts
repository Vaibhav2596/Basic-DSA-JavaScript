// Question 2: Print 1 to 20 with 1 sec delay

for(var i = 0; i <= 20; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}

for(var i = 0; i <= 20 ; i++){
    (function(x){
        setTimeout(() => {
            console.log(x)
        },1000 * i)
    })(i)
}

for(let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i + 1)
    },1000 * i)
}

let count = 1;
let interValCount = setInterval(() => {
    console.log(count);
    if(count >= 20){
        clearInterval(interValCount);
    }
    count++;
},1000)