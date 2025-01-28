interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
  
class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
}

console.log(createEmployee(499));

console.log(createEmployee(999));

console.log(createEmployee('$999'));


function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    let result: string;
    if (isDirector(employee)) {
      result = employee.workDirectorTasks();
    } else {
      result = employee.workTeacherTasks();
    }
    return result;
}

console.log(executeWork(createEmployee(999)));
console.log(executeWork(createEmployee(499)));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else {
      return "Teaching History";
    }
}

console.log(teachClass("History"));
console.log(teachClass("Math"));