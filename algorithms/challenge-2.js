function fizzBuzz(input){
    if(input % 3 ==0 && input % 5 ==0){
        return "fizzbuzz"
       
    }else if (input % 3 ==0) {
        return "fizz"
    }
    else if (input % 5 ==0){
        return "buzz"
    } else{
        return `i dont't know what to say because ${input} is not divided by 3 and 5`
    }
  
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(11));

module.exports = fizzBuzz



function filterArray(arr) {
    return arr.filter(x => typeof x === 'number');
}

console.log(filterArray([4, "z", "f", 5]));
console.log(filterArray(["$%^", 567, "&&&"]));

module.exports = filterArray





