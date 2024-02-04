//Задание 1 – Создать объект counter всеми возможными способами;
let counter = {}; //литерально
let counter2 = new Object();//конструктор
let counter3 = Object.assign({},{/*key:value*/});
let counter4 = Object.create(null)

//Задание 2 – Скопировать объект counter всеми возможными способами
let myObj = {myKey: 'myValue'}
//Поверхностное клонирование:
let clone = {}; // новый объект
for (let key in myObj) {
  clone[key] = myObj[key];
}
let myObjCopy1 = {...myObj}//с помощью спреда
let myObjCopy2 = Object.assign({},myObj);
let myObjCopy3 = Object.create(myObj);
//Глубокое копирование
let myObjClone1 = structuredClone(myObj);
let myObjClone2 = JSON.parse(JSON.stringify(myObj))// есть проблемы если внутри не базовые обьекты,массивы,примитивы.
//можно еще с использованием lodash, но я не изучал эту библиотеку!

//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// FD
function makeCounter1() {
    return { };
  }
  
  // FE
  const makeCounter2 = function() {
    return { };
  }
  
  // Arrow
  const makeCounter3 = () => { return { } };
  
  // NFE
  const makeCounter4 = function innerMakeCounter() {
    return { };
  }

//Задание 4 - прочитать и описать работу глобальной функции structuredClone()
/*
structuredClone()метод создает глубокий клон заданного значения с использованием алгоритма структурированного клонирования.

Этот метод также позволяет переносить переносимые объекты в исходном значении, 
а не клонировать их в новый объект. 
Перенесенные объекты отделяются от исходного объекта и прикрепляются к новому объекту,
они больше не доступны в исходном объекте.


Он клонирует, рекурсивно проходя через входной объект, 
сохраняя при этом карту ранее посещенных ссылок, 
чтобы избежать бесконечного прохождения циклов.

*/
/*Бонус
Задание 1 –
Написать функцию глубокого сравнения двух объектов:*/


const obj1 = { here: { is:
"on", other: "3" }, object: "Y" };

const obj2 = { here: { is:
"on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) =>{

    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (let key of objKeys1) {
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !deepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };
  
  const isObject = (object) => {
    return object != null && typeof object === "object";
  };
  
  console.log(deepEqual(obj1, obj2));

/*Бонус 
Задание 2 –
Развернуть строку в обратном направлении при помощи методов массивов:*/

function reverseStr1(str) {
  return str.split('').reverse().join('')
}

const reverseStr2 = (str) => {
    let newStr = '';
    str.split('').forEach(item => {newStr = item + newStr })
return newStr
};