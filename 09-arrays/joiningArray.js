const numbers = [1, 2, 3];

//join  method return a string
// adds all the elements of array into a string separated by specified separator string
const joined = numbers.join(",");
console.log(joined);

//this technique of converting the spaces string to hypen serpated is used int  url slug
const message = "This is my first message";
//the split method  will return a array with all the words separted by string
const parts = message.split(" ");
console.log(parts);

const combined = parts.join("-");
console.log(combined);
