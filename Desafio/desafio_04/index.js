const fs = require('fs');
//CRUD json products
const products = require('./products.json');

class Content{

  getProduct() {
    return {title:this.title, price:this.price, thumbnail:this.thumbnail, id:this.id};
  }

  create(product) {
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
}

module.exports = {
    Content
}

console.log(new Content().read());


