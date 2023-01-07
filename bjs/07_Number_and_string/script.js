let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})
document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})
document.querySelector('#btn_multiplication').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiplication';
    inputWindow.value = '';
})
document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})
document.querySelector('#btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})
document.querySelector('#btn_root').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'root';
    inputWindow.value = '';
})



document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
        const resault = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = resault;
    }
    if (operation === 'def'){

        const resault = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = resault;
    }
    if (operation === 'multiplication'){
        const resault = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = resault;
    }
    if (operation === 'div'){
        const resault = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = resault;
    }
    if (operation === 'root'){
        lastOperand = Math.sqrt(parseInt(lastOperand));
        const resault = lastOperand;
        operation = null;
        inputWindow.value = resault;
    }
})


// let lastOperand = null,
//     operation = null;
// const inputWindow = document.getElementById('inputWindow');
// function initVar() {
//     lastOperand = null;
//     operation = null;
//     inputWindow.value = '';
// }
// function addOperation(oper) {
//     // Повторный ввод операторов блокируется
//     if (operation == null) {
//         lastOperand = inputWindow.value;
//         operation = oper;
//         inputWindow.value = '';
//     }
// }
// function stringMath(a, oper, b) {
//     //Преобразуем операнды из строк в числа
//     a = parseInt(a);
//     b = parseInt(b);
//     const mathMatrix = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//         "/": (a, b) => b != 0 ? a / b : 0, // Мини-обработчик ошибок - на 0 делить нельзя
//         "*": (a, b) => a * b,
//         "%": (a, b) => b > 0 ? Math.sqrt(b) : 0 // Мини-обработчик ошибок - нет корня от отрицательного
//       };
//     return mathMatrix[oper](a, b);
// }
// // Обработчик кликов вешаем на контейнер формы
// document.querySelector('.form-group').addEventListener('click', (e) => {
//     const target = e.target,
//         activeKey = target.getAttribute('btn');
//         switch (activeKey) {
//             case "C" :
//                 initVar();
//                 break;
//             case "=" :
//                 // Так все в рамках условий задачи работает, но способ крайне не безопасен
//                 //inputWindow.value = eval(lastOperand + operation + inputWindow.value);
//                 // Альтарнативное решение - парсим значения через матрицу решений:
//                 inputWindow.value = stringMath(lastOperand, operation, inputWindow.value);
//                 operation = '=';
//                 break;
//             case "%" :
//                 if (operation == null) {
//                     inputWindow.value = stringMath(lastOperand, activeKey, inputWindow.value);
//                     operation = '=';
//                 }
//                 break;
//             case "+" :
//                 addOperation(activeKey);
//                 break;
//             case "-" :
//                 addOperation(activeKey);
//                 break;
//             case "*" :
//                 addOperation(activeKey);
//                 break;
//             case "/" :
//                 addOperation(activeKey);
//                 break;
//             default:
//                 // Ввод чисел
//                 // Если ввод после вывода итога - сначала инициализация
//                 if (operation == "=") {
//                     initVar();
//                 }
//                 inputWindow.value += activeKey;
//         }
// });// inputWindow.value = Math.sqrt(parseInt(inputWindow)).toFixed();

// // if (operation === 'root'){
// //     inputWindow.value = Math.sqrt(inputWindow);
// //     operation = null;
// //     lastOperand = 0;
// // }