const createLogger = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};
const log = createLogger((message) => console.log(message));
log("hi");

// declarative programming

// URL-friendly imperative
const string = "Restaurants is Hanalei";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);
// URL-friendly declarative
const urlFriendly2 = string.replace(/ /g, "-");
console.log(urlFriendly2);

// immutability
// with mutate
let color_red = {
  title: "red",
  color: "#5555",
  rating: 1,
};
function rateColor(color, rating) {
  color.rating = rating;
  return color;
}
console.log(rateColor(color_red, 5).rating);
console.log(color_red.rating);
// without mutate : immutable
const rateColor2 = (color, rating) => ({
  ...color,
  rating,
});
console.log(rateColor2(color_red, 3).rating);
console.log(color_red.rating);

// with mutate
let color_list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
const addColor = function (title, colors) {
  colors.push({ title: title });
  return colors;
};
console.log(addColor("Glam Green", color_list).length);
console.log(color_list.length);

// without mutate : immutable
const addColor2 = (title, array) => array.concat({ title });
console.log(addColor2("Glam Green", color_list).length);
console.log(color_list.length);
// with spreed
const addColor3 = (title, list) => [...list, { title }];
console.log(addColor3("Glam Green", color_list).length);
console.log(color_list.length);

// pure functions
// ❌
const john = {
  name: "John doe",
  canRead: false,
  canWrite: false,
};
const selfEducate = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};
console.log(selfEducate(john));
console.log(john);
// ✅
const selfEducate2 = (person) => ({
  ...person,
  canRead: false,
  canWrite: false,
});
console.log(selfEducate2(john));
console.log(john);

// Data transformation
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log(schools.join(", "));

const wSchools = schools.filter((school) => school[0] === "W");
console.log(wSchools);

const highSchools = schools.map((school) => `${school} High school`);
console.log("-".repeat(20));
console.log(highSchools.join("\n"));
console.log("-".repeat(20));
console.log(schools.join("\n"));

// reduce
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);
console.log(maxAge);

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];
const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});
console.log(hashColors);

const colors2 = ["red", "red", "green", "blue", "green"];
const uniqueColors = colors2.reduce((unique, color) => (unique.indexOf(color) !== -1 ? unique : [...unique, color]),[]);
console.log(uniqueColors);


// Higher-Order Functions

