function magic_multiply(x, y){
   if (x === 0 || y === 0){
       return "All inputs 0";
   }else if (Array.isArray(x)==true){
       for(var i = 0; i<x.length; i++){
           var arrayValue = x[i];
           var arrayValMult = arrayValue * y;
           x[i] = arrayValMult;
       } 
       return x;
    }else if (typeof y === 'string'){
        return "Error: cannot multiply by a string";
    }else if (typeof x === 'string'){
        var finalString = '';
        for(var i =0; i<y; i++){
            finalString = finalString + x;
        }
        return finalString;
    }else if (typeof x === 'number' && typeof y === 'number'){
        return x * y;
    }
}



//1
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10
//2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"
//3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
//4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"
//5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"