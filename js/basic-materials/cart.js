// Work with the collection of goods in the cart
// getItems()
// add(product)
// remove(productName)
// clear()
// countTotalPrice()
// increaseQuantity(productName)
// decreaseQuantity(productName)

// {name: '🍎', price: 50}
// {name: '🍇', price: 70}
// {name: '🍋, price: 60}
// {name: '🍓', price: 110}

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const newProduct = {
      ...product,
      quantity: 1,
    };

    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (name === productName) {
        console.log('Find the product:', productName);
        console.log('Index:', i);

        items.splice(i, 1);
      }

      // if (this.items[i].name === productName) {
      //     this.items.splice(i, 1);
      // }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;

    let totalPrice = 0;

    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }

    // for (const item of items) {
    //   totalPrice += item.price;
    // }

    return totalPrice;
  },
  increaseQuantity(productName) {
    const {items} = this;

    for (const item of items) {
        if (item.name === productName) {
            item.quantity += 1;
        }
    }
  },
  decreaseQuantity(productName) {
    const {items} = this;

    for (const item of items) {
        if (item.name === productName) {
            item.quantity -= 1;
        }
    }
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍎');

console.table(cart.getItems());

console.log(`TotalPrice = ${cart.countTotalPrice()}`);

cart.increaseQuantity('🍋');

console.table(cart.getItems());

console.log(`TotalPrice = ${cart.countTotalPrice()}`);

cart.decreaseQuantity('🍓');

console.table(cart.getItems());

console.log(`TotalPrice = ${cart.countTotalPrice()}`);

cart.clear();

console.table(cart.getItems());

console.log(`TotalPrice = ${cart.countTotalPrice()}`);
