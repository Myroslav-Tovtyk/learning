// Напиши функцію getAllPropValues(propName),
//     яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив всіх значень властивості
//   з таким ім'ям з кожного об'єкта в масиві products.
//   Якщо в об'єктах відсутні властивості з таким ім'ям,
//   функція повинна повернути порожній масив.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let product;
  let val = Object.values(products);
  const array = [];
  for (const itemProduct of products) {
    if (itemProduct.name === propName) {
      product = itemProduct.name;
    }
    array.push(product);

    if (itemProduct.price === propName) {
      product = itemProduct.price;
    }
    array.push(product);
    if (itemProduct.quantity === propName) {
      product = itemProduct.quantity;
    }
    array.push(product);
  }
  return array;
}

// _______________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

function getAllPropValues(propName) {
  // Change code below this line
  let product;
  let val = Object.values(products);
  const array = [];
  for (let i = 0; i < products.length; i++) {
    if (i.name === propName) {
      product = i.name;
    }
    array.push(product);
    if (i.price === propName) {
      product = i.product;
    }
    array.push(product);
    if (i.quantity === propName) {
      product = i.quantity;
    }
    array.push(product);
  }
  return array;
}

// _______________________________________________________
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let product;
//   let val = Object.values(products);
//   const array = [];
//   switch (propName) {
//     case products.name:
//       array.push(products.name);
//       break;
//     case products.price:
//       array.push(products.price);
//       break;
//     case products.quantity:
//       array.push(products.quantity);
//       break;
//   }
// }
