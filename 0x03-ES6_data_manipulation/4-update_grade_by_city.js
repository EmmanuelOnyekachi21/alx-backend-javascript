export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let gradeobj = newGrades.find((grade) => grade.studentId === student.id);

      if (!gradeobj) {
        gradeobj = 'N/A';
      }
      return {
        ...student,
        grade: gradeobj,
      };
    });
}
