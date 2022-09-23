class Product {
    name;

    constructor(name,price) {
        this.name = name;
        this.price = price
    }

    getPrice(){
        return this.price;
    }

}
module.exports.Product = Product;
