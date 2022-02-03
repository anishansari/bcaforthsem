var number1 = 10;
var number2 = 3;

console.log('The sum of ' + number1 + '+' + number2 + 'is' + (number1 + number2));
console.log('Difference of ' + number1 + '-' + number2 + 'is' + (number1 - number2));
console.log('Multiplication  of ' + number1 + '*' + number2 + 'is' + (number1 * number2));
console.log('Quotient of ' + number1 + '/' + number2 + 'is' + (number1 / number2));
console.log('Reminder of ' + number1 + '%' + number2 + 'is' + (number1 % number2));

ivalue = 5;
ivalue1 = ivalue++;

console.log('value returned by ivalue post increament is ' + ivalue1);
console.log('value of ivalue after post increament is ' + ivalue);

ivalue = 5;
ivalue1 = ++ivalue;

console.log('value returned by ivalue pre increament is ' + ivalue1);
console.log('value of ivalue after pre increament is ' + ivalue);


ivalue = 5;
ivalue1 = ivalue--;

console.log('value returned by ivalue post decreament is ' + ivalue1);
console.log('value of ivalue after post decreament is ' + ivalue);

ivalue = 5;
ivalue1 = --ivalue;

console.log('value returned by ivalue pre decreament is ' + ivalue1);
console.log('value of ivalue after pre decreament is ' + ivalue);

var fistNumber = 5;
var firstString = "Hello Number";
console.log("Addition result of " + fistNumber + " + " + firstString + ' is ' + (fistNumber + firstString));

//Example of Assignment operator
console.log(" Example of assignment of operator");
var numberVar1 = 11;
var numberVar2 = 22;
var numberVar3 = 30;
var numberVar4 = 40;
var numberVar5 = 50;

var newResult1 = newResult2 = newResult3 = newResult4 = newResult5 = 5;

newResult1 += numberVar1;
console.log(newResult1);

newResult2 -= numberVar2;
console.log(newResult2);


newResult3 *= numberVar3;
console.log(newResult3);


newResult4 /= numberVar4;
console.log(newResult4);


newResult5 %= numberVar5;
console.log(newResult5);

numberVar1 &= numberVar2;
console.log(numberVar1);

numberVar3 |= numberVar4;
console.log(numberVar3);

//comparision operator

var firstNumberc = 20;
var secondNumberC = 30;
// var fisrtStringc = '20';

console.log(firstNumberc == secondNumberC);
console.log(firstNumberc === secondNumberC);
console.log(firstNumberc != secondNumberC);
console.log(firstNumberc > secondNumberC);
console.log(firstNumberc < secondNumberC);
console.log(firstNumberc >= secondNumberC);
console.log(firstNumberc <= secondNumberC);

var age = 20;
console.log('Age is ' + age);
console.log('You are' + (age < 16 ? 'children' : ' Young'));

//string 
var firstname = 'BCA';

var objectss = {
    'ab': 10,
};
var func = function a() {

};
// console.log(firstname + secondname);
console.log(typeof (firstname));
console.log(typeof (true));
console.log(typeof (5));
console.log(typeof (objectss));
console.log(typeof (func));
console.log(typeof (fdsfdsf));


//do while
let resultss = '';
let t = 0;

do {
    t = t + 1;
    resultss = resultss + t;
} while (t < 5);

console.log(resultss);

//for of
const array11 = ['a', 'b', 'c'];

for (const element of array11) {
    console.log(element);
}

//break

let s = 0;

while (s < 6) {
    if (s === 3) {
        break;
    }
    s = s + 1;
    console.log(s);
}

//continue

let text = '';

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text = text + i;
}

console.log(text);

//labeled
let k, l;

loop1:
for (k = 0; k < 3; k++) {      //The first for statement is labeled "loop1"
    loop2:
    for (l = 0; l < 3; l++) {   //The second for statement is labeled "loop2"
        if (k === 1 && l === 1) {
            continue loop1;
        }
        console.log('i = ' + k + ', j = ' + l);
    }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"

//Array

const array3 = ['a', 'b', 'c'];

array3.forEach(element => console.log(element));

//Array
var agges = new Array(63, 98, 45);
console.log(agges.constructor);
console.log(agges.length);

Array.prototype.myUcase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();

    }
};

var fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.myUcase();
console.log(fruitsss);


//concat
var array1 = ["BCA", "csit"];
var array2 = ["ni", "bit"];

console.log(array1.concat(array2));

//copywithin

const what = ["a", "b", "c", "d"];
var a = what.copyWithin(3, 1);
console.log(a);

//entries
const something = ["Banana", "Orange", "Apple", "Mango"];
const f = something.entries();
console.log(f);
for (let x of f) {
    console.log(x)
}

// filters
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filtered = words.filter(word => word.length > 6);

console.log(filtered);

//every
const isBelowThreshold = (currentValue) => currentValue < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold));

//fill
const array5 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array5.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

//find
const array6 = [5, 12, 8, 130, 44];
const found = array6.find(element => element > 10);
console.log(found);
// expected output: 12

const array7 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array7.findIndex(isLargeNumber));
// expected output: 3

console.log(Array.from('foo'));

//includes
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

//join
const elementss = ['Fire', 'Air', 'Water'];
console.log(elementss.join());
console.log(elementss.join(' '));
console.log(elementss.join('-'));

var iterator = elementss.keys();
for (const key of iterator) {
    console.log(key);
}

//indexof
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));

//Map
const array8 = [1, 4, 9, 16];
// pass a function to map
const map1 = array8.map(x => x * 2);
console.log(map1);

//Pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());

//Push
const animls = ['pigs', 'goats', 'sheep'];
const count = animls.push('cows');
console.log(count);

//Reduce
const array9 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(array9.reduce(reducer));

//Reduce rgiht
const array10 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array10);

//Reverse
const arracy11 = ['one', 'two', 'three'];
console.log(arracy11.reverse());

//shift
const array12 = [1, 2, 3];
const firstElement = array12.shift();
console.log(array12);

//slice
const anima = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(anima.slice(2));

//some
const arraysome = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(arraysome.some(even));

//Months
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

//splice
const splice = ['Jan', 'March', 'April', 'June'];
splice.splice(1, 0, 'Feb');
// inserts at index 1
console.log(splice);

//unshift
const unshifta = [1, 2, 3];
console.log(unshifta.unshift(4, 5));

//Vlues
const valuesaray = ['a', 'b', 'c'];
const iteratorss = valuesaray.values();

for (const valuesaray of iteratorss) {
  console.log(valuesaray);
}

//to string
const to_string_arr = [1, 2, 'a', '1a'];
console.log(to_string_arr.toString());






