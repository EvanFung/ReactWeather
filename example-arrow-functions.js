/*
var names = ['Andrew','Julie','Jen'];

names.forEach(function(name){
  console.log('forEach',name);
});

names.forEach((name) => {
  console.log('arrowFunc',name);

});

names.forEach((name) => console.log(name));
*/



// var returnMe = (name) => name + '!';
// console.log(returnMe('Evan'));


//difference between arrow function and anonymous function

//var names = ['Andrew','Julie','Jen'];
/*
using anonymous function, it doesn't work to use this keyword
var person = {
  name: 'Evan',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + 'says hi to ' + name);
    });
  }
};
*/
// undefined says hi to Andrew
// undefined says hi to Julie
// undefined says hi to Jen

/*
using arrow function , it works to use this keyword
var person = {
  name: 'Evan',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person.greet();
*/
// Evan says hi to Andrew
// Evan says hi to Julie
// Evan says hi to Jen


//Challenge Area
function add(a,b) {
  return a + b;
}
//addStatement
var addStatement = (a,b) => {
  return a + b;
}
//addExpression
var addExpression = (a,b) => a + b;
console.log(addStatement(4,5));
console.log(addExpression(4,6));
