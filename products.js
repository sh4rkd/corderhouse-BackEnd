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
    if(this.exist(id)) {
      product["id"] = id;
      products[this.returnPositionById(id)] = product;
      fs.writeFileSync('./products.json', JSON.stringify(products));
      return true;
    }else{
      return false;
    }
  }

  deleteProduct(id) {
    if(this.exist(id)) {
      products.splice(this.returnPositionById(id), 1);
      fs.writeFileSync('./products.json', JSON.stringify(products));
      return true;
    }else{
      return false;
    }
  }

  readRandom() {
    return products[Math.floor(Math.random() * products.length)];
  }

  readById(id) {
    return this.exist(id) ? products.filter(product => product.id === id) : null;
  }

  returnPositionById(id) {
    return products.findIndex(product => product.id === id);
  }

  exist(id) {
    return products.some(product => product.id === id);
  }
}

module.exports = new Content();

