import {Cat} from "./my-favorite-animal/Cat";
import {Shape} from "./shape/Shape";
import {Circle} from "./shape/Circle";
import {Rectangle} from "./shape/Rectangle";
import {MlCoach} from "./coach/MlCoach";
import {IotCoach} from "./coach/IotCoach";

let myName: String = "Phuoc"
let myLuckyNumbers: number[] = [11,13,22,33,44]
let myTeammates: string[] = ["Anh Thu","Duy Anh","Ducky Momo"]

console.log("Hello my beloved team =)) \n" +
    `My name is ${myName} welcome to my Typescript demo \n` )

console.log("--------------------------Loop demo------------------------------")

console.log("These are my teammates: \n")
// add 1 more into teammate list:
myTeammates.push("Anh Tuan")

// Loop through the list
for (let teammateIndex = 0; teammateIndex < myTeammates.length; teammateIndex++){
    console.log(myTeammates[teammateIndex])
}

console.log("\n" + "These are my lucky numbers:")
// Loop to take each of the list
for (let number of myLuckyNumbers){
    console.log(number)
}

console.log("--------------------------OOP demo------------------------------")

let myCat = new Cat("Fat cat", 1.4)

console.log("This is my cat: \n" +
    `Name: ${myCat.name}` + "\n" +
    `Height: ${myCat.height}`)

console.log("--------------------------Inheritance---------------------------")

let myShape = new Shape(10,15)
let myCircle = new Circle(5, 9, 11)
let myRectangle = new Rectangle(0,0,1,2)

// Add shape into an array:

let shapes: Shape[] = []
shapes.push(myShape)
shapes.push(myCircle)
shapes.push(myRectangle)

for ( let shape of shapes){
    console.log(shape.getInfo())
}

console.log("--------------------------Abstract classes demo---------------------------")
console.log("My cat says:",myCat.say())

console.log("--------------------------Interface demo----------------------------------")
let mlCoach = new MlCoach()
let iotCoach = new IotCoach()

console.log(`ML daily workout: ${mlCoach.getDailyWorkout()} \n`
        + `IoT daily workout: ${iotCoach.getDailyWorkout()}`)