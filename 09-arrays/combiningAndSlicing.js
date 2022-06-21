const first = [{ id: 1 }];
const second = [4, 5, 6];

//this will not change the orignal array but return a copy by combining the elements
//concat method will join two arrays
const combined = first.concat(second);
first[0].id = 10;
console.log(combined);

//slice method
//used to slice an array into two parts
// const slice = combined.slice(2, 4);//the last index in slice is exclusive
//this will start from index 2 and go till end
// const slice = combined.slice(2);
//if we leave the slice method empty we get the copy of the orignal array
const slice = combined.slice();
console.log(slice);

//TODO:
/*if we are dealing with primitives in concat 
and slice then primitive are copied into the target array
but if we dealing with objects , then object are not copied but only the references of the objects are copied 
that means the objects of both input and output will point to the same object
*/
