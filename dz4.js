/*1) Какие бывают алгоритмы сортировок ? 

Существуют 10-ки алгоритмов сортировок. Они могут быть стабильными (не меняют порядок элементов с одинаковыми значениями относительно друг друга) и нестабильными.
Вот наверно самые популярные из них:

--Cортировка пузырьком (Bubble sort): самый примитивный и базовый алгоритм сортировки,стабильный,перебирает весь массив элементов, сравнивая два соседних элемента друг с другом и меняя их местами в соответствии с условиями. 

--Сортировка выбором (Selection sort): может быть как стабильным, так и нестабильным алгоритмом, в зависимости от реализации,при каждой итерации проходит по неотсортированной части массива, находит минимальный элемент и переносит его в начало массива.

--Сортировка вставками (Insertion sort):алгоритм сегментирует список на отсортированные и несортированные части. Он перебирает несортированный подсписок и вставляет просматриваемый элемент в правильную позицию отсортированного подсписка 

--Быстрая сортировка (Quick sort): нестабильный, определяет так называемый «стержень» и разбивает массив на подмассивы относительно «стержня», которые затем сортируются.


2) Прочитать про "Операторы и выражения, циклы в JS".

Базовые операторы:
--математические--

-Сложение +
-Вычитание -
-Умножение *
-Деление /
-Взятие остатка от деления %
-Возведение в степень **
-Присваивание =

--операторы сравнения--

-Больше/меньше: a > b, a < b.
-Больше/меньше или равно: a >= b, a <= b.
-Равно a == b. 
-Не равно a != b

--побитовые--

-AND(и) ( & )
-OR(или) ( | )
-XOR(побитовое исключающее или) ( ^ )
-NOT(не) ( ~ )
-LEFT SHIFT(левый сдвиг) ( << )
-RIGHT SHIFT(правый сдвиг) ( >> )
-ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )

и другие (","; (); delete; new и т.д)

Выражения:

--Арифметические: вычисляются в число
--Строковые: вычисляются в текстовую строку
--Логические: вычисляются в true или false
--Основные: основные выражения в JavaScript.

Циклы:

--«while» : цикл выполняется, пока условие истинно
--«do…while» : тело цикла выполнилнится хотя бы один раз 
--«for»: для выполнения блока кода заданное количество раз
--«for..in» : для итерации свойств объекта, проходит по именам свойств, часто используется вариант "for (let prop in obj)"
--«for..of» : как for..in только для массивов, не предоставляет доступа к номеру текущего элемента, только к его значению.
*/

/* 3)Создать объект Person несколькими способами, после создать объект Person2, 
чтобы в нём были доступны методы объекта Person.
Добавить метод logInfo чтоб он был доступен всем объектам.*/

//литеральный способ
const person1 = {
  name: "Igor",
  age: 30,
};

//конструктор
const person2 = new Object({
  name: "Oleg",
  age: 20,
});

//person3 через литеральный способ
const person3 = {
  name: "Max",
  age: 25,
  __proto__: person1,
};
// person4 через Object.create
const person4 = Object.create(
  Object.getPrototypeOf(person2),
  Object.getOwnPropertyDescriptors(person2)
);

// метод logInfo будет доступен объекту person1 и его наследникам
person1.logInfo = function () {
  return `My name is ${this.name}. I'm ${this.age} years old.`;
};
console.log(person1.logInfo());
console.log(person3.logInfo());
//console.log(person4.logInfo()); //type error

// метод logInfo будет доступен всем объектам
Object.prototype.logInfo1 = function () {
  return `I'm ${this.name}. My age is: ${this.age}.`;
};
console.log(person1.logInfo1());
console.log(person2.logInfo1());
console.log(person3.logInfo1());
console.log(person4.logInfo1());

//4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  logInfo() {
    return `My name is ${this.name}. I'm ${this.age} years old.`;
  }
}

class PersonThree extends Person {
  constructor(name, age) {
    super(name, age);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
const person5 = new PersonThree("Kent", 15);
console.log(person5.name); // Kent
person5.name = "Ivan";
console.log(person5.name); // Ivan
/*
БОНУС: 
1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;

const firstSum = (arr, total) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push(arr[i]);
        result.push(arr[j]);
        return result;
      }
    }
  }
  return "No total";
};
console.log(firstSum(arr, total));

//2) Какая сложность у вашего алгоритма ? 0(n^2) т.к цикл в цикле плохая практика
