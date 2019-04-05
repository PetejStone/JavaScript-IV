// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name,
    this.age = attr.age,
    this.location = attr.location,
    this.gender = attr.gender
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty,
    this.favLanguage = attr.favLanguage,
    this.catchPhrase = attr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
  gradeRoulette(student) {
    console.log(student.grade);
    //gets random number between 1 and 5
    let randomNum = Math.floor(Math.random()*5) + 1;
    /* gets random number of 1 or 0, if num = 1, then multiply randomNum by -1,
    thus making it a negative number*/

    randomNum *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    student.grade += randomNum;
    console.log(student.grade);
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previouseBackground = attr.previouseBackground,
    this.className = attr.className,
    this.favSubjects = attr.favSubjects,
    this.grade = attr.grade
  }
  listSubjects() {
    return `My favorite subjects are ${this.favSubjects.toString()}`
  }
  PRAassignment(subject) {
    return `${this.name} has submitted PR for ${subject}.`
  }
  SprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congrats! ${this.name}, you have graduated!`;
    } else {
      return `Sorry, ${this.name}, study harder and try again.`
    }
  }

}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName,
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel study times! `
  }
  debugCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}
////New Objects

//Persons
const Randy = new Person ({
  name: "Randy",
  age:  32,
  location: 'NY',
  gender: "Male"
});

const Jeremy = new Person ({
  name: "Jeremy",
  age:  23,
  location: 'WA',
  gender: "Male"
});

const Stacy = new Person ({
  name: "Stacy",
  age:  30,
  location: 'WY',
  gender: "Female"
});

//Instructors
const George = new Instructor ({
  name: 'George',
  age:  42,
  location: 'CA',
  gender: "Male",
  specialty: "React",
  favLanguage: 'C#',
  catchPhrase: 'Never,ever give up!'
});

const Kreg = new Instructor ({
  name: 'Kreg',
  age:  29,
  location: 'UT',
  gender: "Male",
  specialty: "Redux",
  favLanguage: 'JavaScript',
  catchPhrase: 'My dude!'
});

const Jacob = new Instructor ({
  name: 'Jacob',
  age:  39,
  location: 'FL',
  gender: "Male",
  specialty: "CSS",
  favLanguage: 'Java',
  catchPhrase: 'My dude!'
});

// Students

const Peter = new Student ({
  name: "Peter",
  age:  29,
  location: 'WA',
  gender: "Male",
  previouseBackground: "Healthcare",
  className: "Web19",
  grade: 98,
  favSubjects: ['JavaScript', 'SCSS/CSS', 'HTML']
});

const Mallory = new Student ({
  name: "Mallory",
  age:  29,
  location: 'KY',
  gender: "Female",
  previouseBackground: "Lifeguard",
  className: "Web23",
  grade: 68,
  favSubjects: ['Java', 'CSS', 'HTML']
});

const Grace = new Student ({
  name: "Grace",
  age:  19,
  location: 'AZ',
  gender: "Female",
  previouseBackground: "Student",
  className: "Web43",
  grade: 89,
  favSubjects: ['React', 'Redux', 'Python']
});

//Project Managers
const Michael = new ProjectManager ({
  name: 'Michael',
  age:  42,
  location: 'PA',
  gender: "Male",
  specialty: "React",
  favLanguage: 'C#',
  catchPhrase: 'I declare bankruptcy!',
  gradClassName: "CS12",
  favInstructor: "Ed Truck"
});

const Jim = new ProjectManager ({
  name: 'Jim',
  age:  32,
  location: 'PA',
  gender: "Male",
  specialty: "Javascript",
  favLanguage: 'Redux',
  catchPhrase: 'Bears beat Battlestar Glactica!',
  gradClassName: "C44",
  favInstructor: "Pam Beasly"
});

const Dwight = new ProjectManager ({
  name: 'Dwight',
  age:  35,
  location: 'PA',
  gender: "Male",
  specialty: "HTML",
  favLanguage: 'Java',
  catchPhrase: 'Identify theft is not a joke!',
  gradClassName: "Web29",
  favInstructor: "Pam Beasly"
});
