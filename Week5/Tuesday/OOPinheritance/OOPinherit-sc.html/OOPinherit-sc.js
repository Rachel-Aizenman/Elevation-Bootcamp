//Spot Check 1
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })

//     }
// }

// class Teacher extends Person {
//     constructor(name, startYear, salary) {
//         super(name, startYear)
//         this.salary = salary
//     }

//     giveGrade(student, courseName, grade) {
//         student.receiveGrade(courseName, grade)

//     }
// }

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"

//Spot Check 3
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
}


class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        this.courses = {} 
    }

    addCourse(course) {
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course] = 1
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade)
    }
}

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}
// const ta1 = new TeachingAssistant("Brandon", 2014, 20000)
// ta1.addCourse("General Relativity")
// console.log(ta1.courses)

const ta1 = new TeachingAssistant("Brandon", 2014, 20000)
console.log(ta1.toString())
