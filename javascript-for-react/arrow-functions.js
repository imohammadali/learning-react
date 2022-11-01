// Typical function
const lordLand = function (firstName,land) {
    return `${firstName} of ${land}`
}

// Arrow function
const lordLand = (firstName,land) => `${firstName} of ${land}`;

// return object with arrow function
const person = (firstName,lastName)=>({
    first:firstName,
    last:lastName
})

