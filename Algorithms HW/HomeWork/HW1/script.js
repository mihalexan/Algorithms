// Получение от пользователя 3 целочисленных переменных
function calculateSum() {
let num1 = parseInt(prompt('Введите первое число: '));
let num2 = parseInt(prompt('Введите второе число: '));
let num3 = parseInt(prompt('Введите третье число: '));

// Объявление переменной для хранения суммы
let sum = 0;

// Сложение трех чисел
sum = num1 + num2 + num3;

// Вывод суммы на экран
document.getElementById('result').textContent = 'Сумма трех чисел: ' + sum;
}