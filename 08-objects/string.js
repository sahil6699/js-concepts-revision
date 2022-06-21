//String primitive
//this is a primitive datatype - string
const message = "This is my first message";
//but when we use . (dot notation ) with the primitive string
//js engine internally wraps this with string object
// so we can work with this like string object

//this returns the number of letters in string
console.log(message.length);

//if we want to access a character at a given index then
console.log(message[1]);
console.log(message[0]);

//check if the string has the given word
console.log(message.includes("This"));

//check if the string starts with word
console.log(message.startsWith("this"));

//check if the given string ends with the word
console.log(message.endsWith("age"));

//to find the index of given string in the given string
console.log(message.indexOf("my"));

//stringName.replace('string to be replaced', 'string which is replaced')
//this doesn't change the original string
//this just makes a copy of the orignal string and makes changes to it
console.log(message.replace("first", "second"));

//string.toUpperCase();
console.log(message.toUpperCase());
//string.toLowerCase();
console.log(message.toLowerCase());

let hello = "     hello world     ";
console.log(hello);
console.log(hello.trim());
console.log(hello.trimStart());
console.log(hello.trimEnd());

//string.split
console.log(message.split(" "));
//String object
//this is non primitive datatype - object
const another = new String("hi");

console.log(typeof message);
console.log(typeof another);
