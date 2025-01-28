// documentation here

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "OwO",
    lastName: "UwU",
    age: 27,
    location: "7k away from the hapiness"
}

const student2: Student = {
    firstName: "uwu",
    lastName: "OwO",
    age: 27,
    location: "7k away from the hapiness"
}

const studentsList: Student[] = [student1, student2];

console.log(studentsList);