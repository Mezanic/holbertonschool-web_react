//documentation here

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0)
    return `${firstInitial}. ${lastName}`;
  }

console.log(printTeacher('John', 'Doe'));

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

workOnHomework(): string {
      return 'Currently working';
    }

displayName(): string {
    return `${this.firstName}`

}
}

const student1 = new StudentClass('Alice', 'Smith')
console.log(student1.workOnHomework());
console.log(student1.displayName());
