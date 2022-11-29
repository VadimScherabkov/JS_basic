/**
 * JS Classes:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * - https://javascript.info/class
 * - https://javascript.info/class-inheritance
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here
class Person {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }
}
/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here
class Student extends Person {
  constructor(grade) {
    super(grade);
  }
  getGrade() {
    return this.grade;
  }
}

const person = new Person('Vadim', 'Shcherbakov'); //create instance of class person
const student = new Student('noob'); //create instance of class student

module.exports = {
  person,
  student,
};
