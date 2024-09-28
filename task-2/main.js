// Определение переменных
let num = 105;               // Число
let str = "Hello, world!";     // Строка
let bool = true;              // Логическое значение
let undef;                    // Undefined
let obj = { name: "Andrey" };   // Объект
let symb = Symbol('id');      // Символ
let bigInt = BigInt(12345678901234567890n); // BigInt
let func = function() {};     // Функция

// Вывод типов данных
console.log('Тип переменной num:', typeof num);         // number
console.log('Тип переменной str:', typeof str);         // string
console.log('Тип переменной bool:', typeof bool);       // boolean
console.log('Тип переменной undef:', typeof undef);     // undefined
console.log('Тип переменной obj:', typeof obj);         // object
console.log('Тип переменной symb:', typeof symb);       // symbol
console.log('Тип переменной bigInt:', typeof bigInt);   // bigint
console.log('Тип переменной func:', typeof func);       // function

// -----------------------------------------------------------------------------------
// Минимальные и максимальные значения числовых типов данных

// Максимальное значение для числа
let maxNumber = Number.MAX_VALUE;
console.log('Максимальное значение для числа:', maxNumber); // 1.7976931348623157e+308

// Минимальное положительное значение для числа
let minPositiveNumber = Number.MIN_VALUE;
console.log('Минимальное положительное значение для числа:', minPositiveNumber); // 5e-324

// Бесконечность
let infinity = Number.POSITIVE_INFINITY;
console.log('Положительная бесконечность:', infinity); // Infinity

// Минус бесконечность 
let negativeInfinity = Number.NEGATIVE_INFINITY;
console.log('Отрицательная бесконечность:', negativeInfinity); // -Infinity

// 1.7976931348623157e+308 — это максимальное значение, потому что JavaScript использует 64-битный формат IEEE 754.
// Из 64 бит: 1 бит на знак, 11 бит на экспоненту и 52 бита на мантиссу. 

// 5e-324 — это минимальное положительное значение, так как это ближайшее к нулю число, представленное в формате IEEE 754.
// У этого значения также 64 бита, но экспонента установлена на минимальное значение (-1022 против 1023 у максимального).

// В случае, если 64 битов не достаточно, используется BigInt длина которого ограничена только объемом доступной памяти.