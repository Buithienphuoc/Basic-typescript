"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./my-favorite-animal/Cat");
var Shape_1 = require("./shape/Shape");
var Circle_1 = require("./shape/Circle");
var Rectangle_1 = require("./shape/Rectangle");
var MlCoach_1 = require("./coach/MlCoach");
var IotCoach_1 = require("./coach/IotCoach");
var myName = "Phuoc";
var myLuckyNumbers = [11, 13, 22, 33, 44];
var myTeammates = ["Anh Thu", "Duy Anh", "Ducky Momo"];
console.log("Hello my beloved team =)) \n" +
    ("My name is " + myName + " welcome to my Typescript demo \n"));
console.log("--------------------------Loop demo------------------------------");
console.log("These are my teammates: \n");
// add 1 more into teammate list:
myTeammates.push("Anh Tuan");
// Loop through the list
for (var teammateIndex = 0; teammateIndex < myTeammates.length; teammateIndex++) {
    console.log(myTeammates[teammateIndex]);
}
console.log("\n" + "These are my lucky numbers:");
// Loop to take each of the list
for (var _i = 0, myLuckyNumbers_1 = myLuckyNumbers; _i < myLuckyNumbers_1.length; _i++) {
    var number = myLuckyNumbers_1[_i];
    console.log(number);
}
console.log("--------------------------OOP demo------------------------------");
var myCat = new Cat_1.Cat("Fat cat", 1.4);
console.log("This is my cat: \n" +
    ("Name: " + myCat.name) + "\n" +
    ("Height: " + myCat.height));
console.log("--------------------------Inheritance---------------------------");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 9, 11);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 1, 2);
// Add shape into an array:
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _a = 0, shapes_1 = shapes; _a < shapes_1.length; _a++) {
    var shape = shapes_1[_a];
    console.log(shape.getInfo());
}
console.log("--------------------------Abstract classes demo---------------------------");
console.log("My cat says:", myCat.say());
console.log("--------------------------Interface demo----------------------------------");
var mlCoach = new MlCoach_1.MlCoach();
var iotCoach = new IotCoach_1.IotCoach();
console.log("ML daily workout: " + mlCoach.getDailyWorkout() + " \n"
    + ("IoT daily workout: " + iotCoach.getDailyWorkout()));
