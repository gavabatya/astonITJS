/*1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

Массив в JS "неправильный" т.к может хранить в себе данные разных типов (гетерогенный) и еще он динамический (позволяет изменять длину массива).
Массивы совмещают в себе следующие структуры данных:
--Упорядоченный список
--Очередь
--Двустроннюю очередь
--Стэк

2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply).*/

function logger() {
 console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.call(obj);
logger.apply(obj);
const myLogger = logger.bind(obj);
myLogger();

//3.1 Массивы:

//- Создайте массив чисел и найдите его сумму.
const myArray = [1, 2, 3, 4, 5];
const result = 0;
const sumArr = myArray.reduce((acc, item) => acc + item, result);

//- Создайте массив строк и объедините их в одну строку.
const strArray = ["My", "name", "is", "Igor"];
const newStr = strArray.join(" ");

//- Найдите максимальный и минимальный элементы в массиве чисел.
const someArr = [-5, 15, 7, 88];
const min = Math.min(...someArr);
const max = Math.max(...someArr);

//3.2 Stack (стек):
//- Реализуйте стек с использованием массива.
let stackArr = [];
stackArr.push(1);
stackArr.push(2);
stackArr.pop();

//3.3 Queue (очередь):
//- Реализуйте очередь с использованием массива.
let queue = [];
queue.push(1);     
queue.push(2);         
queue.shift()

//Бонус задание: базовая реализация (dev.to)

let objBind = {
  name: 'Aston',
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (objBind) {
  let func = this;
  return function () {
    func.apply(objBind);
  };
};
let newFunc = myFunc.myBind(objBind)
newFunc()
