// Цикл for

// for(ініціалізація; умова; пост - вираз) {

// }

// for(let i = 0; i <= 4; i += 1) {
//     console.log(i);
// }

// for(let i = -10; i < 0; i += 2) {
//     console.log(i);
// }

const min = 0;
const max = 10;
let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log('парне число', i);
//     total += i;
//   }
// }

// console.log('total:', total);

for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
      console.log('не парне число', i);
      continue;
    }
    console.log('парне число', i);
        total += i;
  }
  
  console.log('total:', total);