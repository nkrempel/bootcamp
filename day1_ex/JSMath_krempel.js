function zero_negativity(x){
    for (var i = 0; i<x.length; i++){
        if (x[i] < 0){
        return false;
        }
    }
    return true;
}

function is_even(x){
    if (x%2 === 0){
        return true;
    }else
    {
        return false;
    }
}

function how_many_even(x){
    var counter = 0;
    for (var i = 0; i<x.length; i++){
        if (is_even(x[i])){
            counter = counter + 1;
        }
    }
    return counter;
}

function create_dummy_array(x){
    var newArray = new Array (x);
    for (var i = 0; i<x; i++){
        var randomNumber = Math.floor(Math.random() * 10);
        newArray[i] = randomNumber;
    }
    return newArray;
}

function random_choice(x){
     var randomNumb = Math.floor(Math.random() * x.length +1);
     var arrayVal = x[randomNumb];
     return arrayVal;
}




//1
let test1 = zero_negativity([2,4,6,8]);
console.log(test1);

let test2 = zero_negativity([-2,-4,-6]);
console.log(test2);

//2
let test3 = is_even(2);
console.log(test3);

let test4 = is_even(3);
console.log(test4);

//3
let test5 = how_many_even([2,3,4,5,6]);
console.log(test5);

//4
let test6 = create_dummy_array([6]);
console.log(test6);

//5
let test7 = random_choice([4,5,6,2,8,7]);
console.log(test7);