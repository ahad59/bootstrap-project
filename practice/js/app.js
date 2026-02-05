var firstName;
firstName = "abdul ahad";
console.log(firstName)

var a = "Abdul";
var b = "Ahad";
var c = a + " " + b; //concatenation addition of 2 strings
console.log(c);

var a = "2";
var b = "2"; //Number like string
 var c = a - b;
 console.log(c);

var a =  5+ "5"-5;
console.log(a);

// converstion of string number to integer type
//var userAge = prompt("Enter your age");
//var userUpdateAge = Number(userAge) + 5;
//console.log(userUpdateAge, userAge);
//var a = "25.5";
//var b = Number(a);
//var b = parseInt(a);
//var b = parseFloat(a);
//console.log(a, b);

//var birthYear = prompt(" Enter your birth year ");
//var currentYear = 2026;
//var userAge = currentYear - birthYear;
//var message = "Your age is: " +userAge
//alert(message);  

// Grade checking
 
//var studentMarks = prompt("Enter your marks");
//var isStudentAPlus = studentMarks >= 80 
//var isStudentBPlus = studentMarks >= 70 
//var isStudentCPlus = studentMarks >= 60 
//var isStudentD = studentMarks >= 40 
//var isStudentFailed = studentMarks <= 39
//
//if (isStudentAPlus) {
//    console.log("student has achieved A+");
//}
//else if (isStudentBPlus) {
//    console.log("student has achieved B+");
//}
//else if (isStudentCPlus) {
//    console.log("student has achieved C+");
//}
//else if (isStudentD) {
//    console.log("student has achieved D");
//}
//else if (isStudentFailed) {
//    console.log("The student has failed");
//}
//else {
//    console.log("Please enter valid marks")
//}

// If-else using Logical operators && ||

var useremail = "ahadnq@gmail.com";
var userpwd = "5992";
var email = prompt("Enter your E-mail");
var pwd = prompt("Enter your password");

var isEmailCorrect = email === useremail;
var isPwdCorrect = pwd === userpwd;

if (email === useremail && pwd === userpwd) {
     alert("Login successful");
}
else {
    alert("You entered invalid credentials");
}






