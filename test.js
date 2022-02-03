
//varible declaration

/*
-I am first line of comment
-I am second line of comment

*/

var withvar = '10';
variable = 30;

console.log(variable, withvar)

//if statement example
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));

//Multiple if
var a = 10;
if (a > 10)
    console.log('greater');
else if (a == 10)
    console.log('Equal');
else if (a < 10)
    console.log('less')
else
    console.log('I dont care');

//Switch statement
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

//for loop example
let str = '';
for (let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str);

//While Loop

let n = 0;

while (n < 3) {
    n++;
}

console.log(n);

//debugger

// debugger;

//Object Manipulation
var result = "";
var obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
for (var i in obj) {

    result += i + "=" + obj[i];
    console.log(result);
}

//Foreach
var sum = 0;
var obj_second = { prop1: 50, prop2: 90, prop3: 60, prop4: 56 };
// obj_second.forEach(element => {
//     sum+= item;
// });

for (let key in obj_second) {
    console.log(key, obj_second[key]);
}

// console.log(sum);
//  for each (item in obj_second ){
//      sum+= item;
//  };
//  print(sum)

//Try Catch Statement

try {
    a = "ram";
    if ((typeof a) !== 'number') {
        throw new TypeError("Data type mismatch");
    }

} catch (e) {
    if (e instanceof TypeError) {
        console.log(e.message);
    }

}

//Operators
console.log(2+2);
console.log(3-2);
console.log(3*2);
console.log(4/2);
console.log(5%2);
var inc = 10;
console.log(++inc);
console.log(--inc);


