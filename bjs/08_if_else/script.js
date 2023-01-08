let firstValue = 0;
let lastValue = 100;
let answerNumber = 1;
let orderNumber = 1;
let gameRun = true;
let minValue;
let maxValue;


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
                
// const numArray1 = ["0", "один", "два", "три", "четыри", "пять", "шесть", "семь","восемь", "девять"];
 
// const numArray11 = ["десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать","пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать"];
 
// const numArray10 = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто"];
 
// const numArray100 = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот"];



function startGame () {                                                                // Начало игры
    orderNumber = 1;
    firstValue = parseInt(prompt('Минимальное знание числа для игры -999','0'));
    minValue = firstValue || 0;
    minValue >= 999 ? minValue = 999 : minValue <= -999 ? minValue = -999 : minValue = minValue;
    lastValue = parseInt(prompt('Максимальное знание числа для игры 999','100'));
    maxValue = lastValue || 100;
    maxValue >= 999 ? maxValue = 999 : maxValue <= -999 ? maxValue = -999 : maxValue = maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}
startGame();



document.getElementById('btnRetry').addEventListener('click', function () { //кнопка "Заново"
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    gameRun = true;
    startGame();
})



document.getElementById('btnOver').addEventListener('click', function () {         //Кнопка "Больше"
    if (!gameRun) return;
    if (minValue === maxValue){
        const phraseRandomTrue = Math.round(Math.random() * 2);
        switch(phraseRandomTrue) {
            case 0:
              answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
              break;
            case 1:
              answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
              break; 
            case 2:
              answerPhrase = `Я старался ...\n\u{1F625}`;
              break;  
        }
        answerField.innerText = answerPhrase;
        gameRun = false;

    } else {                                                 
        minValue = answerNumber  + 1; 
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        const phraseRandomFalse = Math.round(Math.random() * 2);
        switch(phraseRandomFalse) {
            case 0:
              answerField.innerText = `Да это легко! Ты загадал...${answerNumber }? \n\u{1F60C}`;
              break;
            case 1:
              answerField.innerText = `Вы загадали число ${answerNumber }? \n\u{1F644}`;
              break; 
            case 2:
              answerField.innerText = `Наверное, это число...${answerNumber }? \n\u{1F914}`;
              break;  
        }
    }
 })






document.getElementById('btnLess').addEventListener('click', function () {      //Кнопка "Меньше"
    if (!gameRun) return;
    if (minValue === maxValue){
        const phraseRandomTrue = Math.round(Math.random() * 2);
        switch(phraseRandomTrue) {
            case 0:
              answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
              break;
            case 1:
              answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
              break; 
            case 2:
              answerPhrase = `Я старался ...\n\u{1F625}`;
              break;  
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    } else {     
        maxValue = answerNumber - 1;                                               
        answerNumber = Math.ceil((minValue + maxValue) / 2);  
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        const phraseRandomFalse = Math.round(Math.random() * 2);
        switch(phraseRandomFalse) {
            case 0:
              answerField.innerText = `Да это легко! Ты загадал...${answerNumber }? \n\u{1F60C}`;
              break;
            case 1:
              answerField.innerText = `Вы загадали число ${answerNumber }?\n\u{1F644}`;
              break; 
            case 2:
              answerField.innerText = `Наверное, это число...${answerNumber }?\n\u{1F914}`;
              break;  
        }
    }
})




document.getElementById('btnEqual').addEventListener('click', function () {   //кнопка  "Верно"
    if (gameRun){
        const phraseRandomFalse = Math.round(Math.random() * 2);
        switch(phraseRandomFalse) {
            case 0:
                answerField.innerText = `Приходи еще\n\u{1F60F}`;
                break;
            case 1:
                answerField.innerText = `Это было не сложно\n\u{1F44D}`;
                break; 
            case 2:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                break;  
        }
        gameRun = false;
    }
})

    
