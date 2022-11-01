// combine arrays
const array1 = ["a1", "a2", "a3"];
const array2 = ["b1", "b2", "b3"];

const all = [...array1, ...array2];
console.log(all);

// get last element
const [last] = array1.reverse();
console.log(last);

// get first element
const [first, ...others] = all;
console.log(first);
