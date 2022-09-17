let number = +prompt("Введіть число");
let number2 =  +prompt("Введіть число 2");
let number3 =  +prompt("Введіть число 3");
let total = 0;

console.log("Введене число 1 : " + number);
console.log("Введене число 2 : " + number2);
console.log("Введене число 3 : " + number3);

if (number < 0) {
    total += number; 
}

if (number2 < 0){
    total += number2;
}

if (number3 < 0){
    total += number3;
}

if (total < 0) {
    alert("Ви ввели правильні числа! Ось результат = " + total)
}
else  {
    alert("Ви ввели не правильні числа! Спробуйте ще раз :(")
}
console.log(total);
