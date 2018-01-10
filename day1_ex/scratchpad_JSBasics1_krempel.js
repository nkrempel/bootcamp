
//1
var x = [];
console.log(x.length);
x.push('coding','dojo','rocks');
console.log(x.length,x);
x.pop();
console.log(x.length,x);
//2
const y = [];
y.push(88);
console.log(y);
//3
let z = [9,10,6,5,-1,20,13,2];
console.log(z.length,z);
for(let i = 0; i< z.length-1; i++){
  console.log(z[i]);
};
//4
let names = ['Kadie','Joe','Fritz','Pierre','Alphonso']
for(let i = 0; i< names.length; i++){
  if(names[i].length === 5)
  console.log(names[i]);
};
//5
function yell(string){
  console.log(string.toUpperCase());
};
yell('hello!');







