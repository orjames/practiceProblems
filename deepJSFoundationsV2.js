//prettier-ignore
var x = 40;

x++; //40 post-increment
x; //41

++x; //42 pre-increment
x; //42
// x++ coerces x so if you put in "5"
var x = '5';
x++;
x; //6, even though it's a string

// in JavaScript, everything is an object
false;
// false is one of those examples of something that is not an object

/* PRIMITIVE TYPES */
// undefined, null, boolean, string, symbol, number, and object
// undefined
// string
// number
// boolean (true false)
// object
// symbol (not common used in frameworks)

// what about undeclared? are these types? null? null is not a type
// what about functions? function is a subtype of the object type
// arrays are a subtype of the object type
// bigint support? (not yet but will be a primitive type soon)

// what is the type of the value that is currently in v.
// JS typeof is about the value, not the variable. values have types
// variables do not have types.
var v;
typeof v; //'undefined', does not currently have a value
v = '1';
typeof v; //"string"
v = 2;
typeof v; //"number"
v = true;
typeof v; //"boolean"
v = {};
typeof v; //"object"
v = Symbol();
typeof v; //"symbol"

// typeof always returns a string! this is important
(typeof v === undefined)(
  // will never be true
  typeof v === 'undefined'
); // is correct way to check this

typeof doesntExist; //"undefined"
var v = null;
typeof v; // "object" this is a bug should say null but can't fix this
v = function() {};
typeof v; // "function"
v = [1, 2, 3];
typeof v; //"object" can use array.isArray instead

// UNDEFINED VS UNDECLARED
// undeclared means its never been created in any scope we have access to
// undefined means theres definited a varaible at the moment it has no value
// typeof can reference something that doesn't exist and not throw an error
// uninitialized is also emptiness
