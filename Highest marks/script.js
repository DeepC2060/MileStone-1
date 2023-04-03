let marks = [85, 90, 92, 89, 88];  

let max_marks = Math.max(...marks);  

let student_index = marks.indexOf(max_marks) !== -1 ? marks.indexOf(max_marks) : null;

if (student_index !== null) {
  console.log(`The highest marks scored by any student is ${max_marks}.`);
  console.log(`The student with the highest marks is Student ${student_index + 1}.`);
} else {
  console.log("No student has scored any marks yet.");
}
