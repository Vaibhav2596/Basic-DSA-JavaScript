// String Anagram
// 'hello'  --> 'llheo'
// 'ajay'  ---> 'aaay'


// Condition 
// 1. Length check (for both Strings)
// String 'hello'
// {h:1,e:1,l:2,o:1}



function isAnagram(string1:string,string2:string):boolean{
    const counter:any = {}

    if(string1.length !== string2.length){
        return false;
    }

    for(let letter of string1){
        counter[letter] = (counter[letter] ?? 0) + 1
    }

    for(let letter2 of string2){
        if(!counter[letter2]){
            return false;
        }else{
            counter[letter2] = counter[letter2] - 1;
        }
    }

    console.log(counter)
    return true;
}

let anagramValue = isAnagram('hello','llheo');

console.log(anagramValue);