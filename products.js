const fs = require('fs');
//CRUD json products
const products = require('./products.json');

class Content{

  create(title, price, thumbnail) {
    const product = {
      title,
      price,
      thumbnail,
      id: products.length + 1
    };
      products.push(product);
      fs.writeFileSync('./products.json', JSON.stringify(products));
  }

  read() {
    return products;
  }

  update(id, product) {
    products[id] = product;
    fs.writeFileSync('./products.json', JSON.stringify(products));
  }

  deleteProduct(id) {
    products.splice(id, 1);
    fs.writeFileSync('./products.json', JSON.stringify(products));
  }

  readRandom() {
    const random = Math.floor(Math.random() * products.length);
    return products[random];
  }
}

module.exports = new Content();

