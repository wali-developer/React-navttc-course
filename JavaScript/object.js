// Object
const person = {
  name: "Iqrar",
  age: 25,
  height: "5 ft & 6 inc",
  address: "123 Main Street",
  profession: {
    job: "Web Developer",
    salary: 50000,
    company: "Google Inc",
  },
  walk: (name) => {
    return `${person.name} is walking`;
  },
};

person.age = 40;
person.name = "Asif";
delete person.address;
person.walk = () => {
  return "This is chnaged function";
};
person.name = "Wali Ullah";
// console.log(person["profession"]["job"]);

// Creating an object with constructor function
function Employee() {
  this.name = "Asif";
  this.age = 40;
  this.address = "Peshawar";
  this.profession = "Software Engineer";
}

const e1 = new Employee();
// console.log(e1);

// Factory function
const person1 = (name) => {
  return {
    name,
    age: 20,
    address: "Peshawar",
    isWalking: false,
    study: () => {
      return "Ali is studing in BS Software Engineering";
    },
  };
};

const p1 = person1("Ali");
const p2 = { ...p1 };
const p3 = Object.assign({ profession: "Student" }, p2);

// Object Getter & Setter

const circle = {
  size: 50,
  radius: 7,
  area: 200,
  get getArea() {
    return this.area;
  },

  set changeSize(val) {
    if (typeof val !== "number") {
      throw new Error("Please enter a valid value");
    }
    this.area = val;
  },
};

console.log((circle.changeSize = "100"));

// Hoisting Problem
s();

const s = function sum() {
  console.log(10 + 20);
};
