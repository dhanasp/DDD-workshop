class Item {
    product;
    quantity;

    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getPrice(){
        return this.product.getPrice();
    }
}

module.exports.Item = Item;
