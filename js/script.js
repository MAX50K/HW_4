// 1
let field1 = prompt("Заповніть рядок");
let field2 = prompt("Заповніть рядок");
let message = (field1 && field2) ? "Обидва поля заповнені" : "Не всі поля заповнені";
alert("Check"); 
console.log(message);
// 2
let number1 = prompt("Enter a number");
let number2 = prompt("Enter another number");
let otherNumber = 10
let sum = (Number(number1) + Number(number2));
let answer = (sum >= otherNumber) ? "The sum is over 10" : "The sum is under 10";
alert("Check");
console.log(answer);
// 3
let text = ("i like JavaScript")
alert("Check")
let answer3 = (text.includes("JavaScript"))
if (answer3) {
    console.log("The text includes Javascript");
} else {
    console.log("The text does not include Javasrcipt");
}
// 4
let randomNumber = prompt("Enter a random number");
let diapasonTrue = (randomNumber >= 10 && randomNumber <= 20)
alert("Check");
if (diapasonTrue){
    console.log("The number is in the diapason of 10 to 20");
} else {
    console.log("The number is not in the diapason of 10 to 20");
}
// 5
let name = prompt("Enter your name")
let email = prompt("Enter your email");
let password = prompt("Enter your password");
alert("Check");
if (name.length >= 3 && email.includes("@") && password.length >= 6){
    alert("Перенаправляю на іншу сторінку...")
} else {
    alert("You failed...")
}