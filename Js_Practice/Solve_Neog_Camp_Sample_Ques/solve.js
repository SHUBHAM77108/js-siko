// Sample Interview Questions Set 1

// Q1

const studentsMarks = [
    { name: "Preethi", rollNo: 301, chemistry: 78, maths: 88, commerce: 90, physicalEducation: 90 },
    { name: "Priya", rollNo: 302, chemistry: 75, maths: 90, commerce: 85, physicalEducation: 94 },
    { name: "Jaya", rollNo: 303, chemistry: 82, maths: 95, commerce: 88, physicalEducation: 92 },
    { name: "Prema", rollNo: 304, chemistry: 85, maths: 96, commerce: 91, physicalEducation: 99 },
    { name: "Shreetama", rollNo: 305, chemistry: 83, maths: 92, commerce: 89, physicalEducation: 91 }
  ];

//   console.log(studentsMarks)

  const numberArray = [5, 12, 7, 25, 18, 3]


  function printNewArray(){
    let newArray = []
    for(let i = 0; i < numberArray.length; i++){
        newArray.push(numberArray[i] + 10)
    }
    return newArray
  }

  console.log(printNewArray())