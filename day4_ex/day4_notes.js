// // //fibonacci sequence sequence
// // function fib(num){
// //     if(num === 1) return 0;
// //     if(num === 2) return 1;
// //     let arr=[0,1], pos1=0,pos2=1;
// //     for (let i = 2; i < num; i++){
// //         arr.push(arr[pos1+pos2]);
// //         pos1++;
// //         pos2++;
// //     }return arr[pos2];
// // }

// // console.log(fib(10));


// // console.log("NOW: ");
// // console.log("Declaring and assigning variable 'ninja'.");
// // var ninja = 'Libby';
// // setTimeout( function myCallbackFunction(){
// //   console.log("LATER: ")
// //   console.log(ninja, "LATER"); }, 2000
// // );
// // console.log("Printing ninja value.");
// // console.log(ninja, "NOW");


// // function doSomething(possibleCallback) {
// //     if (typeof(possibleCallback) === 'function'){
// //       console.log('possibleCallback is a callback!');
// //       possibleCallback(); //we can invoke the callback!
// //     }
// //     else {
// //       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
// //     }
// //   }
// //   //doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// //   doSomething('string');

// // function makePasta(pasta, makeSauce) {
// //     console.log("Boiling water");
// //     console.log("Putting " + pasta + " pasta in the water");
// //     // create a variable for sauce!
// //     var sauce = makeSauce();          // invoke makeSauce, our callback
// //     console.log("Mixing sauce");
// //     console.log("Pasta is done!");
// //     return pasta + " Pasta with " + sauce + " sauce! Voila!";
// //   }
// //   function makePesto() {
// //     console.log("Making Pesto");
// //     return "pesto";
// //   }
// //   function makeAlfredo() {
// //     console.log("Making Alfredo");
// //     return "alfredo";
// //   }
// //   // we pass the whole makePesto recipe to makePasta!
// //   //console.log(makePasta("Penne", makePesto));
// //   // notice lack of parentheses after makePesto.
// //   // Remember: we want to pass the function, not execute it and pass a return value.
// //   console.log(makePasta("Farfalle", makeAlfredo));

// // function leadBootcamp(language, leader){
// //     var outcome = leader(language);
// //     console.log(outcome);
// // }
// // function Mike(language){
// //   var languages={
// //     'javascript':'successful leader',
// //     'PHP':'successful leader',
// //     'Python':'successful leader',
// //     'Ruby':'successful leader',
// //   }
// //   if(languages[language]){
// //     return languages[language];
// //   }
// //   else {
// //     return "maybe not yet";
// //   }
// // }
// // function Charlie(language){
// //   var languages={
// //     'javascript':'successful leader',
// //     'PHP':'successful leader',
// //     'Python':'successful leader',
// //     'Ruby':'successful leader',
// //   }
// //   if(languages[language]){
// //     return languages[language];
// //   }
// //   else {
// //     return "maybe not yet";
// //   }
// // }
// // function Jimmy(language){
// //   var languages={
// //     'javascript':'successful leader',
// //     'PHP':'successful leader',
// //     'Python':'successful leader',
// //     'Ruby':'successful leader',
// //     'iOS':'successful leader',
// //     'java_android':'successful leader',
// //   }
// //   if(languages[language]){
// //     return languages[language];
// //   }
// //   else {
// //     return "maybe not yet";
// //   }
// // }
// // leadBootcamp('java_android', Mike);
// // leadBootcamp('java_android', Charlie);
// // leadBootcamp('java_android', Jimmy);

// // function each(arr, callback) {
// //     // loop through the array
// //     for(var i = 0; i < arr.length; i++) {
// //       callback(arr[i]); // invoking the callback many times... delegation!
// //     }
// //   }
// //   // call the each function
// //   each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts!


// // function getStuffFromDatabase(resolve,reject){
// //     var data = "whee"
// //     setTimeout(function(){
// //       // if (typeof(callback) == 'function'){
// //         data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
// //         resolve(data);
// //       // }
// //     }, 1000);
// //     reject(); //comment this line in and out!
// //     // return data;
// // }
// // function requestDataFromDatabase(){
// //   console.log('running');
// //   //creates promise
// //   var data = new Promise(function(resolve,reject){
// //     getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
// //   });
// //   // if promise is successful (keeps me from putting all the logic in the callback)
// //   data.then(function(data){
// //     console.log(data, "ASynchronous");
// //     for (var i = 0; i < data.length; i ++){
// //       console.log(data[i].name);
// //     }
// //   });
// //   data.catch(function(){
// //     console.log('failure');
// //   })
// //   console.log('end');
// // }
// // requestDataFromDatabase();

// // _.filter = _.select = function(obj, predicate, context) {
// //     var results = [];
// //     predicate = cb(predicate, context);
// //     _.each(obj, function(value, index, list) {
// //       if (predicate(value, index, list)) results.push(value);
// //     });
// //     return results;
// //   };

// // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// // console.log(evens); // if things are working right, this will return [2,4,6].

// // var _ = {
// //     map: function() {
// //       //code here;
// //     },
// //     reduce: function() { 
// //       // code here;
// //     },
// //     find: function() {   
// //       // code here;
// //     },
// //     filter: function(arr, predicate) { 
// //       var newArr = [];
// //       for(i = 0; i < arr.length; i++){
// //           if (predicate(arr[i])){
// //               newArr.push(arr[i]);
// //           }
// //       }return newArr;

// //     },
// //     reject: function() { 
// //       // code here;
// //     }
// //   }

// // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// // console.log(evens); // if things are working right, this will return [2,4,6]
  
  


var fibonacci = (function () {
    var arr = [0, 1];
    return function () {
        var num = arr[arr.length - 1],
            len = arr.length;
        arr.push(arr[len - 1] + arr[len - 2]);
        return num;
    };
}());

//test
var i;
for (i = 0; i < 10; i++) {
    console.log(fibonacci());
}
//1,1,2,3,5,8,13,21,34,55  



// function looping (n) {
//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     return f;
// };
// console.log(looping(10))
