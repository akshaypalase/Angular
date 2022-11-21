console.log("************Assignment on Calculator***********");
var n1 = prompt('Enter your maths marks ');
var num1 = parseInt(n1);
console.log("Maths marks:", num1);
var n2 = prompt('Enter your physics marks ');
var num2 = parseInt(n2);
console.log("Physics marks:", num2);
var n3 = prompt('Enter your chemestry marks');
var num3 = parseInt(n3);
console.log("Chemistry marks:", num3);
var sum = num1 + num2 + num3;
//console.log(sum);
var avg = sum / 3;
console.log("---------------------------------");
console.log('Average marks :', avg);
console.log("---------------------------------");
if (avg < 70) {
    console.log("Your grade: C");
}
else if (avg > 70 && avg < 90) {
    console.log("Your grade: B");
}
else {
    console.log("Your grade: A");
}
