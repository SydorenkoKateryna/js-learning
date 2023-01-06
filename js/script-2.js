// Введення користувача
// Методи window.confirm() та window.prompt()

const shouldRenew = confirm('Do you want to renew your subscription?');
console.log(shouldRenew);

// const quantity = prompt('Enter the quantity of the product');
// console.log(quantity);

let quantity = prompt('Enter the quantity of the product');
// Зміна типу з рядка на число (для тих данних, для яких це можливо)
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);
