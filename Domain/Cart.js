class Cart {
    products = [];
    removedItems = [];

    add(item) {
        this.products.push(item)
    }

    getProducts(){
        return this.products;
    }

    remove(item) {
        this.removedItems.push(item);
        this.products = this.products.filter(i => i !== item)
    }

    getRemovedItems(){
        return this.removedItems;
    }
}

module.exports.Cart = Cart;
