// Написати скрипт вибору вартості отеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 -50$, 4 - 70$, 5 -120$
// Якщо у змінній stars щось окрім чисел 1-5, вивести рядок
// "Такої кількості зірок не має"

const stars = 3;
let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок не має');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;

//     default:
//     console.log('Такої кількості зірок не має');
// }

// console.log(price);

// Написати скрипт вибору вартості отеля по кількості зірок.
// 1,2 - 20$, 3,4 -30$, 5 -120$

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
  case 4:
    price = 30;
    break;
  case 5:
    price = 120;
    break;

  default:
    console.log('Такої кількості зірок не має');
}

console.log(price);
