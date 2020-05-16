/*********************
 * Variable and data types
 */

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job)


/*********************
 * Variable and data types
 */

// console.log(firstName + ' ' + age)

// var job , isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// age = 'twenty eight';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);
var ageJohn , ageMark;
ageJohn = 28;
ageMark = 33;

var now , yearJohn , yearMark;
now =2018;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);
console.log(typeof johnOlder);

var now , yearJohn , fullAge
now = 2018;
yearJohn = 1989;
fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x = 26;
x *= 2;
console.log(x);

var markMass , markHeight , markBmi , johnMass , jhonHeight , johnBmi ,markHasHigherBmi;

markMass = 78;
markHeight = 1.69;
markBmi = markMass / (markHeight * markHeight);

johnMass = 92;
jhonHeight = 1.95;
johnBmi = johnMass / (jhonHeight * jhonHeight);

markHasHigherBmi = markBmi > johnBmi;
console.log('Is Mark\'s BMI higher than John?' + markHasHigherBmi);


var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
  console.log(firstName +' is married!');
}else{
  console.log(firstName +' will hopefully');
}

var isMarried = true;
if(isMarried){
  console.log(firstName +' is married!');
}else{
  console.log(firstName +' will hopefully');
}

if(markHasHigherBmi){
  console.log('mark is fatter');
}else{
  console.log('john is fatter');
}

var firstName = 'John';
var age = 22;
if(age < 13){
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <20){
  console.log(firstName + ' is a teenager.');
} else if (age < 30){
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'designe';
switch(job){
  case 'teacher':
  case 'inst':
    console.log(firstName + 'is a teacher');
    break;
  case 'driver':
    console.log(firstName + 'is a driver' );
    break;
  case 'designer':
    console.log(firstName + 'is a designer' );
    break;
  default:
    console.log(firstName + 'does somthing  else' )
}


var age = 30;
switch(true){
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age <20:
    console.log(firstName + ' is a teenager.');
    break;
  case age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');

}


var height;
height=0

if (height || height===0){
  console.log('is defined')
}else{
  console.log('is not defined')
}


var averageJohn , averageMike;
averageJohn = (89 + 120 + 103) / 3;
averageMike = (116 + 94 + 123) / 3;

switch (true){
  case averageJohn > averageMike:
    console.log('John is WINNER. his average is ' + averageJohn);
    break;
  case averageJohn < averageMike:
    console.log('Mike is WINNER. his average is ' + averageMike);
    break;
  case averageJohn === averageMike:
    console.log('There is no winner');
}

var averageMary = (97 + 134 + 105) / 3;

averageJohn=2;
averageMike=2;
averageMary=2;
switch (true){
  case averageJohn > averageMike && averageJohn > averageMary:
    console.log('John is WINNER. his average is ' + averageJohn);
    break;
  case averageJohn < averageMike && averageMike > averageMary:
    console.log('Mike is WINNER. his average is ' + averageMike);
    break;
  case averageMary > averageJohn && averageMary > averageMike:
    console.log('Mary is WINNER. her average is ' + averageMary);
    break;
  case averageJohn === averageMike && averageJohn > averageMary:
    console.log('John and Mike is winner');
    break;
  case averageJohn === averageMary && averageJohn > averageMike:
    console.log('John and Mary is winner');
    break;
  case averageMary === averageMike && averageMary > averageJohn:
    console.log('Mary and Mike is winner');
    break;
  case averageJohn === averageMary && averageJohn === averageMike:
    console.log('All WINNER!!!');
}

function calculateAge(birthYear){
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMark = calculateAge(1979);
var ageJane = calculateAge(1966);
console.log(ageJohn);
console.log(ageMark);
console.log(ageJane);

function yearUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' is retires in '+ retirement + ' years');
  } else {
    console.log(firstName + ' is already retired');
  }
}

yearUntilRetirement(1990 , 'John');
yearUntilRetirement(1948 , 'Mike');
yearUntilRetirement(1969 , 'Jane');

var whatDoYouDo = function(job , firstName){
  switch(job){
    case 'teacher':
      return firstName + 'is teacher';
    case 'driver':
      return firstName + 'is driver';
    case 'designer':
      return firstName + 'is designer';
    default:
      return firstName + 'does somthing else';
  }
}

console.log(whatDoYouDo('teacher' , "John"));
console.log( whatDoYouDo('driver' , 'Mike'));
console.log(whatDoYouDo('designer' , 'June'));
console.log(whatDoYouDo('nothing' , 'Tomas'));


var names =['John' , 'Mark' , 'Jane'];
var years = new Array(1990 ,1969 , 1948);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';
names[names.length] = 'Mike';
console.log(names);

var john =['John' , 'Smitth' , 1990 , 'teacher' , false];
john.push('blue');
john.unshift('Mr.')
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

john[3] = 'designer';

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'; 
console.log(isDesigner);
console.log(john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer');


function calculateTip(bills){
  var percentage;
  if (bills < 50){
    percentage = .2;
  } else if (bills < 200){
    percentage = .15
  } else {
    percentage = .1
  }
  return percentage * bills;
}

var bills = [124 , 48 , 268];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]) , calculateTip(bills[2]) ];
console.log(tips);
var finalValues = [bills[0] + tips[0] ,bills[1] + tips[1] ,bills[2] + tips[2] ,]

console.log(finalValues);
console.log('////////////////////////////////');

var tipCalculator =function(bills){
  var percent;
  switch(true){
    case bills <50:
      percent = 0.2;
      break;
    case bills < 200:
      percent = 0.15;
      break;
    case bills >= 200:
      percent = 0.1;
  }

  return bills * percent;

};

// var tipCalculator = function(bills){
//   var percent;
//   if(bills <50){
//     percent = 0.2;
//   } else if (bills < 200){
//     percent = 0.15;
//   } else {
//     percent = 0.1;
//   }
//   return bills * percent;
// }

var bills = [124 , 48 , 268];
var tips = [tipCalculator(bills[0]) , tipCalculator(bills[1]) , tipCalculator(bills[2])];
console.log(tips);

console.log('////////////////////////////////');

var john = {
  firstName : 'John',
  lastName : 'Smith',
  birthYear : 1990,
  family : ['Jane' , 'Mark' , 'Bob' , 'Emily'],
  job : 'teacher',
  isMarried : false
}

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear'
console.log(john[x]);

john.job = 'designer';
john[isMarried] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
jane[isMarried] = true;
console.log(jane);

console.log('////////////////////////////////');

var john = {
  firstName : 'John',
  lastName : 'Smith',
  birthYear : 1990,
  family : ['Jane' , 'Mark' , 'Bob' , 'Emily'],
  job : 'teacher',
  isMarried : false,
  calcAge : function() {
    this.age = now - this.birthYear;
  }
}

john.calcAge();
console.log(john);

console.log('////////////////////////////////');

var john = {
  firstName : 'John',
  lastName : 'Smith',
  mass : 70,
  height : 1.8,
  calcBMI : function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

var mark = {
  firstName : 'Mark',
  lastName : 'Bush',
  mass : 58,
  height : 1.7,
  calcBMI : function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

switch(true){
  case john.calcBMI() > mark.calcBMI():
    console.log(john.firstName + john.lastName + ' is higher BMI.' + john.BMI);
    break;
  case john.BMI < mark.BMI:
    console.log(mark.firstName + mark.lastName + ' is higher BMI.' + mark.BMI);
    break;
  case john.BMI === mark.BMI:
    console.log('They are same BMI' + john.BMI);
}

console.log('////////////////////////////////');

for (var i = 0 ; i < 10 ; i++){
  console.log(i);
}

var john =['John' , 'Smitth' , 1990 , 'teacher' , false];
for (var i = 0 ; i < john.length ; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

console.log('////////////////////////////////');

for (var i = 0 ; i < john.length ; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
for (var i = 0 ; i < john.length ; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

for (var i = john.length ; i > 0 ; i--) {
  console.log(john[i-1]);
}

console.log('////////////////////////////////');

var johnRestaurants ={
  bills : [124 , 48 , 268 , 180 , 42],
  tips : [],
  finalValues : [],
  calcTip : function() {
    for (var i = 0 ; i < this.bills.length ; i++){
    var percent;

    switch(true) {
      case this.bills[i] < 50:
        percent = .2;
        break;
      case this.bills[i] < 200:
        percent = .15;
        break;
      case this.bills[i] >= 200:
        percent = .1;
    }
    this.tips[i] = this.bills[i] * percent;
    this.finalValues[i] = this.tips[i] + this.bills[i];
  }
}
}

johnRestaurants.calcTip();
console.log(johnRestaurants.tips);
console.log(johnRestaurants.finalValues);

console.log('////////////////////////////////');


var markCulcTip = function(){
  var percent;
  var bills = [77 , 375 , 110 , 45];
  
  for (var i = 0 ; i < bills.length ; i++){
    switch(true) {
      case bills[i] < 100:
        percent = 0.2;
        break;
      case bills[i] < 300:
        percent = 0.1;
        break;
      case bills[i] >= 300:
        percent = 0.25;
    }
    tips[i] = bills[i] * percent;
  }
  var total = 0;
  for (var i = 0 ; i < tips.length ; i++){
    total = total + tips[i];
  }
  return total / tips.length;

}
markCulcTip();
console.log(tips);
console.log('Marrk is ' +b markCulcTip());

var calcTip = function() {
  var total = 0;
  var tips = [18.599999999999998, 9.600000000000001, 26.8, 27, 8.4];
  for (var i = 0 ; i < tips.length ; i++){
    total = total + tips[i];
  }
  return total / tips.length;
}

console.log('John is ' + calcTip())