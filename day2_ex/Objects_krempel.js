let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
students.forEach(function (arrayItem){
    console.log("Name: " + arrayItem.name + ", " + "cohort: " + arrayItem.cohort);
});


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 
for (var key in users) {
    console.log(key.toString().toUpperCase() + ":");  
    var count = 1
    users[key].forEach(function(person){
        var nameLength = person.last_name.length + person.first_name.length;
        console.log(count + " - " + person.last_name + ", " + person.first_name + " - " + nameLength)
        count++;
  }); 
}