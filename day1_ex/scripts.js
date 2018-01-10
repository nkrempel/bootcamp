<h1>Students</h1>
<ul id="main">
    
</ul> 
function appendList(array, id){
    if(typeof array === 'object'){
        let arrayList = [];
        for(var i = 0; i<array.length; i++){
            let arrayList = document.createElement(li);
            arrayList.innerHTML = array[i];
            document.getElementById("main").appendChild(arrayList);
           
        }
    }
}
let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
let target_id = "main";
appendList(students, target_id);