//1)

let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");//a
});

promiseTwo
.then((res) => {
   return res + "b";//ab
})
.then((res) => {
   return res + "с";//abc
})
.finally((res) => {
   return res + "!!!!!!!";//не возвращает
})
.catch((res) => {
   return res + "d";
})
.then((res) => {
   console.log(res);//abc
});

//2)

function doSmth() {
   return Promise.resolve("123");
}

doSmth()
.then(function (a) {
   console.log("1", a); //1 123
   return a;
})
.then(function (b) {
   console.log("2", b);//2 123
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err);// 3 321 тк был промис rejected
})
.then(function (c) {
   console.log("4", c);//4 undefined
return c;
});

//3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
//Входные данные: [10, 12, 15, 21]
const arr = [10, 12, 15, 21];
function indexOfElements(arr) {
  arr.map((elem, i) => {
    setTimeout(() => console.log(i), 3000 * i);
  });
}
indexOfElements(arr);
