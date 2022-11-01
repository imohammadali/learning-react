// function declarations
// this is hoisted and move to top of the file scope
// functionName();
function functionName() {
  console.log("hello");
}

// function expressions
const logThis = function () {
  console.log("this is log this");
};
// logThis();

// can invoke functionName function before declaration but can`t invoke logThis before his expression

// passing arguments
const logThis2 = function (firstName, message) {
  console.log(`${firstName} : ${message}`);
};
// logThis2("ali", "your are so fast");

// return
const createTerm = function (firstName, message) {
  return `${firstName} : ${message}`;
};
// console.log(createTerm('sara','you can do it'))

export { createTerm };
