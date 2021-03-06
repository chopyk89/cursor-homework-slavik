// Task 1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    let maxDigit = 0;
    while (number != 0) {
        if ((number % 10) > maxDigit)
            maxDigit = (number % 10);
        number = number / 10;
    }
    return maxDigit.toString()[0];
}
console.log(getMaxDigit(6789));

// Task 2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getPowOfNumber(x, n) {
    let result = 1;
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    } else if (n < 0) {
        for (let i = 1; i <= -n; i++) {
            result /= x;
        }
        return result;
    }
}
console.log(getPowOfNumber(2, 10));

// Task 3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function ucFirst(str) {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(ucFirst('sLaVik'));

// Task 4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getSumAfterTax(salary, rate) {
    const taxesCoefficient = (1 - rate / 100);
    const revenue = salary * taxesCoefficient;
    return revenue;
}
console.log(getSumAfterTax(500, 19.5))

// Task 5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(n, m) {
    const min = Math.ceil(n);
    const max = Math.floor(m);
    return Math.floor(Math.random() * (m - n) + n);
}
console.log(getRandomNumber(1, 10));

// Task 6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
//Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, str) {
    let count = 0;
    str.split('').forEach((el) => el.toLowerCase() == letter.toLowerCase() ? count++ : count);
    return count;
}
console.log(countLetter('а', 'Асталавіста'));


// Task 8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(lenPassword = 8) {
    if (lenPassword > 10) lenPassword = 8;
    lenPassword = lenPassword * (-1);
    return Math.random().toString().slice(lenPassword);
}
console.log(getRandomPassword());

// Task 9 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letters, string) {
    if (letters.length !== 1)
        return false;
    return string.replaceAll(letters, '');
}
console.log(deleteLetters('a', 'blablabla'))

// 10 Створіть функцію, яка перевіряє, чи є слово паліндромом. 
//Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function palindromeChecker(str) {
    const str2 = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindromeChecker('кокос'));

// 11 Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        const regExp = new RegExp(string[i], 'gi');
        if (string.match(regExp).length <= 1) {
            newStr += string[i];
        }
    }
    return newStr;
}
console.log(deleteDuplicateLetter("абабагаламага"));
