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


//---------Question 3------------//

// Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

//----Solution 1------/////
// https://www.toptal.com/javascript/interview-questions

//----------- Question 4-------------------///


// What does the function __construct do in PHP?
// ----------------Solution 1 ------------------////

// __construct was introduced in PHP5 and it is the right way to define your, well, constructors (in PHP4 you used the name of the class for a constructor). You are not required to define a constructor in your class, but if you wish to pass any parameters on object construction then you need one.

// An example could go like this:


class Database {
  protected $userName;
  protected $password;
  protected $dbName;

  public function __construct ( $UserName, $Password, $DbName ) {
    $this->userName = $UserName;
    $this->password = $Password;
    $this->dbName = $DbName;
  }
}

// and you would use this as:
$db = new Database ( 'user_name', 'password', 'database_name' );

//----------- Question 4-------------------///
// What does the function __construct do in PHP?



//----------- Question 5-------------------///
// Which Javascript framework do you think is the best? Why? Compare at least 2


//----------- Question 6-------------------///
// What is the difference between an Abstract class and an Interface?

//----------- Question 7-------------------///
// What is the keyword ‘static’ used for in PHP?

//----------- Question 8-------------------///
// Consider the following PHP code:

//----------- Question 9-------------------///
// Write a program in whatever language you are comfortable with based on below.

We have a set of three tables (for each one schema is followed by the sample data):

1) invoiceheader (
invoicenum varchar,
invoicedate date,
invoiceamount float

)
invoicenum | invoicedate | invoiceamount
-----------+-------------+--------------
00551198 | 1/1/2014 | $150.5
00551199 | 1/2/2014 | $10
2) invoicedetail (
invoicenum varchar,
trackingno varchar,
detailamount float
)
invoicenum | trackingno | detailamount
-----------+--------------------+-------------
00551198 | 1Z2F12346861507266 | $50
00551198 | 1Z2F12346861507267 | $80
00551198 | 1Z2F12346861507268 | $20.5
00551199 | 1Z2F12346861503423 | $10.5
3) invoicecharges (
invoicenum varchar,
trackingno varchar,
chargetype varchar,
chargeamount float
)
invoicenum | trackingno  | chargetype | chargeamount
-----------+--------------------+------------+-------------
00551198 | 1Z2F12346861507266 | FRT | $40
00551198 | 1Z2F12346861507266 | FUE | $11
00551198 | 1Z2F12346861507267 | FRT | $65
00551198 | 1Z2F12346861507267 | FUE | $17
00551198 | 1Z2F12346861507268 | FRT | $10
00551198 | 1Z2F12346861507268 | FUE | $5
00551198 | 1Z2F12346861507268 | HAZ | $5.5
00551199 | 1Z2F12346861503423 | FRT | $8
00551199 | 1Z2F12346861503423 | FUE | $2.5
The relationship between tables: the data set contains invoice with overall invoice amount, list of packages
uniquely identified by tracking# in detail table and break down of charges for the tracking#. I.e. Freight, Fuel.

Using the data from the tables above program should generate the following reports:
Report 1.
Input parameters: from date and to date
For specified time period print all invoices
for each show
invoicenum, invoice date and invoice amount
Print a total line: # of invoices and total amount for the period

Report 2.
Same input as above

For specified time period print all invoices where the invoice amount does not match the sum of all
detailamount column values for this invoice
for each show
invoicenum, invoice date and invoice amount, detailamount total and the discrepancy amount


Report 3.
Same input as above
For specified time period print all tracking#s  where the detailamount does not match the sum of all
chargemount column values for this invoice and trackingno
for each show
invoicenum, invoice date, trackingno, detailamount, chargeamount total and the discrepancy
amount
