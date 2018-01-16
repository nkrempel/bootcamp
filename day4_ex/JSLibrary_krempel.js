var _ = {
    map: function(val, cb) {
        let keyLength = '';
        if (val instanceof Array){
            keyLength = val.length;
            for(i=0; i<keyLength; i++){
                if (typeof val[i] == 'number'){
                    val[i] = cb(val[i]);
                }                
            }               
        }else if (val instanceof Object){
            let newArr = Object.values(val);
                for(i=0; i<newArr.length; i++){
                    newArr[i] = cb(newArr[i]);
                } 
                val = newArr;
        }
        return val;

    },
    reduce: function(arr, trouble, memo) {
        let newVal = '';
        if (memo != 0){
            newVal = memo;
        }               
            for(i=0; i<arr.length; i++){
                trouble(newVal = newVal + arr[i]);
            }
            return newVal;
    },
    find: function(arr, condition) {
        var newVal = 0;
        for(i=0; i<arr.length; i++){
            if (condition(arr[i])){
                return  (arr[i]);
            }
        }return undefined;
    },
    filter: function(arr, predicate) { 
        var newArr = [];
        for(i = 0; i < arr.length; i++){
            if (predicate(arr[i])){
                newArr.push(arr[i]);
            }
        }return newArr;
    },

    reject: function(arr, condition) { 
        var newArr = [];
        for(i = 0; i < arr.length; i++){
            if (!condition(arr[i])){
                newArr.push(arr[i]);
            }
        }return newArr;
    },  
}
var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);//=> [3, 6, 9]
var map2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log(map2);// //=> [3, 6, 9]



// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6]

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(odds);  //=> [1, 3, 5]

// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(even); //=> 2

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 1);
// console.log(sum) //=> 6
// var sum = _.reduce(["Hi ", "my ", "name ", "is "], function(memo, num){ return memo + num; }, 0);
// console.log(sum)

