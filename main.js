//Arrays
let myAutos = ['BMW','Bugatti','Mercedes'];

let myCars = {
    0:'BMW',
    1:'Bugatti',
    2:'Mercedes'
}
console.log(myAutos);
console.log(myCars);

let myPhone = ['black',500,20,1000]

let myPhoneObj = {
    color:'black',
    storage:500,
    camera:20,
    processor:1000
}

//Syntax
let myFirstArray = [];

console.log(myFirstArray);

myFirstArray[0] = 'test';
console.log(myFirstArray);

let x = myFirstArray.length;

myFirstArray[x] = 'Hop';

myFirstArray[10] = 'Hey';

x = myFirstArray.length;

myFirstArray[x] = 'Yey';

myFirstArray.push('Yep');

myFirstArray[2] = undefined;

console.log(myFirstArray[0]);
console.log(myFirstArray[1]);
console.log(myFirstArray[2]);
console.log(myFirstArray[12]);
console.log(myFirstArray[13]);

let myNextArray = [];

myNextArray.push('Bosch');
myNextArray.push('Siemens');

console.log(myNextArray);

myNextArray.unshift('Delonghi');
console.log(myNextArray);

//pop and shift

myNextArray.pop();
console.log(myNextArray);

myNextArray.shift();
console.log(myNextArray);

//splice
let myTestArr = ['JS','React','Mongo','Node']
console.log( myTestArr);
myTestArr.splice(1,2);
console.log( myTestArr);

//Slice

let item = myTestArr.slice(1,2)
console.log(item);


