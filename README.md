Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


const price = Object.values(products);

function getProductPrice(productName) {
  // Change code below this line
for(const product of names){
  if (product === productName){
    price =
  }
}return price


  // Change code above this line
}
getProductPrice("Radar");

Думаю так: потрібно в циклі перебрати значення ключів names, а для доступу до ключів створив змінну price, потім її порівнюю з параметрами (потім при виклику аргументами) функції.  А як потім то вивести з обєкта - 1300?
