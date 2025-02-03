var arr = [1,2,3,4,5,6,1,2,3,4,5,6];
var arr2 = ["Apple", "Banana", "m7shy", "Cake"];

// at() -> Return the element at the given index ([0] is the first element, [-1] is the last element)

console.log(arr.at(-1))

// Concat() -> Join arrays together

console.log(arr.concat(arr2));

// copyWithin() -> Copies elements of array and paste in in a specific position in the same array // (Target, Start, End)

console.log(arr2.copyWithin(3, 0, 2));

// every() -> Checks if the given condition is true for all elements of array, if not return false

console.log(arr.every(function(e) {
   return e > 0;
})) // True

// fill() -> Fill the enire array with given static value

console.log(arr2.fill("Ma7shy"));

// filter() -> Creates a new array with only the elements passed the condition given from an array.

console.log(arr.filter(function(e) {
    return e > 3;
}))

// find() -> iterates through the array untill it find the element meeting the condition and stops then return this number. if not found return undefined

console.log(arr.find(function(e) {
    return e > 5
})) // 6

// findIndex() -> Return the index of the first element that passes a condition

console.log(arr.findIndex(function(e) {
    return e > 4;
})) // index 4

// findLast() -> Return the value of the last element of an array the passes a condition

console.log(arr.findLast(function(e) {
    return e > 4;
})) // 6

// findLastIndex() -> Return the index of the last element of an array the passes the condition

console.log(arr.findLastIndex(function(e) {
    return e > 4;
})) // 11

// flat() -> creates a new array with all sub-array elements concatenated

var arr3 = [1,2,3,[4,5,[6,7]]];

console.log(arr3.flat()); // [1,2,3,4,5,[6,7]]
console.log(arr3.flat(2)); // [1,2,3,4,5,6,7]

// FlatMap() -> Maps all array elements and creates a new flat array after applying the condition given

console.log(arr.flatMap(function(e) {
    return e + 2;
}))

// forEach() -> Apply a function for each element of the array but it doesn't return a new array

console.log(arr.forEach(function(e) {
    console.log(e*2);
}))

// Array.from() -> Creates an Array from an object

var str = "Ma7shy";

console.log(Array.from(str));

// includes() -> Check if the element given is included in the Array

console.log(arr.includes(2)); // True

// indexOf() -> Return the index of the given element in the array

console.log(arr.indexOf(2)) // 1

// Array.isArray() -> Check if the given element is array.

console.log(Array.isArray(str)); // False

console.log(Array.isArray(arr)); // True

// join() -> Join elements of array into a string

console.log(arr.join());

// lastIndexOf() -> Search for an element in the array from the end. returning its index.

console.log(arr.lastIndexOf(6)); // 11

// length -> return the number of elements in the array

console.log(arr.length); 12

// map() -> maps over all elements of the array and returns the array with the applied function given

console.log(arr.map(function(e) {
    return e * 4;
}))

// of() -> Creates an array from a number of elements (Arguments)

var arr4 = Array.of(1,2,3,4);

console.log(arr4); // [1,2,3,4]

// pop() -> Remove the last element of the array and return it

console.log(arr.pop())

// push() -> Add a new element to the array and return the new array length

console.log(arr.push(7));

// reduce() -> function that takes accumlator, current index, starting index for current, and the array

console.log(arr.reduce(function(acc, current, index, arr) {
    return acc + current;
})) // 43

// reduceRight() -> Same as reduce but starting from Right to Left

console.log(arr.reduceRight(function(acc, current, index, arr) {
    return acc + current;
})) // 43


// reverse() -> reverse the order of the array

console.log(arr.reverse());

// shift() -> Remove and return the first element of an array

console.log(arr.shift());

// slice() -> Select a part of the array and return it (start,end)

console.log(arr.slice(0,3));

// some() -> Check if any of the elements of the array passes a condition gives

console.log(arr.some(function(e) {
    return e > 5;
}))

// sort() -> sort the elements of the array

console.log(arr.sort());

// splice() -> Removed a part of array and replace them with different numbers if needed (Start, Number of elements to be deleted, element to replace, ...)

console.log(arr.splice(3, 2, 10, 11));
console.log(arr);

// toReversed() -> Reverse the order of the elements and create a new array with them

console.log(arr.reverse());

// toSorted() -> Sort the elements of an array to a new array

console.log(arr.toSorted())

// toSpliced() -> Just like splice but creates a new array

console.log(arr.toSpliced(4, 3, 14, 15));

// toString() -> Transform an array into string. and return it.

console.log(arr.toString());

// unshift() -> Add a new element to the beginning of an array and return the new array length

console.log(arr.unshift(10));