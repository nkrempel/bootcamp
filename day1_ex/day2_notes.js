// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);


// var foo;                  // 'foo' is a declaration, it's global and gets hoisted
// function magic(){         // 'magic()' also gets hoisted to the top
//     var foo;              // here 'foo' is declared within 'magic()' and gets hoisted
//     foo = "hello world";  // we assign a value to our function scoped 'foo'
//     console.log(foo);     // we log it as 'hello world'
// }                       
// foo = "bar";              // here, we assign a value to the global 'foo'
// magic();                  // magic is called, the first console.log runs
// console.log(foo);         // finally we log the global foo




function appendList(array, id){
    if(typeof array === 'object'){
        let arrayList = [];
        for(var i = 0; i<array.length; i++){
            let arrayList = document.createElement(li);
            arrayList.innerHTML = array[i];
            document.getElementById("main").appendChild(arrayList);
           
        }
    }
};
let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
let target_id = "main";
appendList(students, target_id);