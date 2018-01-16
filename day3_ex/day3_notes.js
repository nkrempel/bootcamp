// const MyObjConstructor = function(name) {
//     const myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
//     this.name = name; // but you can see the name!
//     this.method = function() {
//       console.log( "I am a method");
//     };
//   }
//   const obj1 = new MyObjConstructor('object1');
//   const obj2 = new MyObjConstructor('object2');
//   console.log(obj1);
//   obj1.newProperty = "newProperty!";
//   obj1.__proto__.anotherProperty = "anotherProperty!";
//   console.log(obj1.anotherProperty); // anotherProperty!
//   console.log(obj1.newProperty); // newProperty!
//   // What about obj2?
//   console.log(obj2.newProperty); // undefined
//   console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
    

//   class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         console.log("You created a Dot!");
//     }
// }
// let dot1 = new Dot(10, 10);


// parent Dot class
class Dot {
    constructor(x, y) {
         this.x = x;
         this.y = y;
     }
     showLocation() {
         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
     }
 }
 // child Circle class
 class Circle extends Dot {
     constructor(x, y, radius) {
         super(x, y);
         this.radius = radius;
     }
 }
 // we can now create Circles
 const circle1 = new Circle(33, 33, 33);
 // same attributes as a Dot, plus a radius
 console.log(circle1);
 // and Circles can access Dot methods
 circle1.showLocation();
 