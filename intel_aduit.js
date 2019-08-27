'use strict';

//sample pascal Triangle solution
//////--------------Question 1 --------------------------/////


function createPascalTriangle (numRows) {
  var pascalTriangle = [];

  for (var i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i+1);

    for (var j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }

  return pascalTriangle;
}

console.table(createPascalTriangle(6));

//----------------Question 2 --------------------/////


// 2) Students and Departments
//
//  A university uses 2 data tables, Students and Departments, to store data about its students and the
// departments associated with each major. Write a query to print the respective department
// name and number of students majoring in each department for all departments in
// the Departments table (even ones with no current students). Sort your results by descending number
// of students; if two or more departments have same number of students, then sort those departments
// alphabetically by department name.

// ----Solution 1----------------///

SELECT
    dept_name, COUNT(student_id) AS student_number
FROM
    department
        LEFT OUTER JOIN
    student ON department.dept_id = student.dept_id
GROUP BY department.dept_name
ORDER BY student_number DESC , department.dept_name
;
