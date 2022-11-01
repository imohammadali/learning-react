const person = {
  name: "ali",
  lastName: "hassani",
};
const { name, lastName } = person;
console.log(name, lastName);

// destructure in function arguments
const lordLand = ({ firstName, land }) => {
  console.log(`${firstName} of ${land}`);
};
lordLand({ firstName: "john", land: "sparta" });

// access to nested objects
const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
  spouse: {
    firstname: "Phil",
    lastname: "Wilson",
  },
};
const lordLand2 = ({spouse:{firstname}}) => {
    console.log(`${firstname} of greenland`);
}
lordLand2(regularPerson);
