// Create an array with 5 students names, after that create a
// function which takes 2 parameters (allStudents &
// studentName) iterate over all students and find that
// specific user "studentName".

const arrStudent = [
  "shubham",
  "abhi",
  "amit",
  "raghu",
  "arvind",
  "vinod",
  "Dinesh",
  "prem",
  "amar",
];

function findStudent(studentName) {
  // return allStudents.filter((element) => {
  //   return element === studentName;
  // });

  // This wee call o(n);
  for (let i = 0; i < arrStudent.length; i++) {
    if (arrStudent[i] === studentName) {
      console.log(arrStudent[i]);
    }
  }
}

findStudent("amit");
