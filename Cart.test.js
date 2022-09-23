const {Price} = require("./Domain/Price");
const {Item} = require("./Domain/Item");
const {Product} = require("./Domain/Product");
const {Cart} = require("./Domain/Cart");

describe("Cart Test", () => {

    test('Cart should have 0 products', () => {
        let cart = new Cart();
        expect(cart.getProducts().length).toBe(0)
    });

    test('Cart should have Ipad Pro product', () => {
        let cart = new Cart();
        let ipadProProduct = new Product("Ipad pro");
        let item = new Item(ipadProProduct, 1);
        cart.add(item);
        expect(cart.getProducts().length).toBe(1)
        expect(cart.getProducts()[0]).toEqual(item)
    });

    test('Cart should have 2 Qt of GM cricket bat', () => {
        let cart = new Cart();
        let ipadProProduct = new Product("GM cricket bat");
        cart.add(new Item(ipadProProduct, 2));
        expect(cart.getProducts()).toHaveLength(1)
    });

    test('Cart should remove already added item', () => {
        let cart = new Cart();
        let product = new Product("Apple pencil");
        let applePencilItem = new Item(product, 2);
        let ipadProItem = new Item(new Product("ipad pro"), 2);

        cart.add(applePencilItem);
        cart.add(ipadProItem);
        cart.remove(applePencilItem)

        expect(cart.getProducts()).toHaveLength(1)
        expect(cart.getProducts()[0]).toEqual(ipadProItem)
    });

    test('Should return remove items', () => {
        let cart = new Cart();
        let product = new Product("Apple pencil");
        let applePencilItem = new Item(product, 2);
        let ipadProItem = new Item(new Product("ipad pro"), 2);
        let GMBatItem = new Item(new Product("GM Bat"), 2);

        cart.add(applePencilItem);
        cart.add(ipadProItem);
        cart.add(GMBatItem);
        cart.remove(applePencilItem);
        cart.remove(GMBatItem);

        expect(cart.getRemovedItems()).toHaveLength(2)
        expect(cart.getRemovedItems()).toEqual([applePencilItem, GMBatItem])
    });

    test('Should return false after comparing two carts with equal items', () => {
        let cart1 = new Cart();
        let cart2 = new Cart();
        let product = new Product("Apple pencil");
        let applePencilItem = new Item(product, 2);

        cart1.add(applePencilItem);
        cart2.add(applePencilItem)

        expect(cart1).not.toBe(cart2)
    });

    test('Should return price for the product in cart', () => {
        let cart1 = new Cart();
        let price = new Price(20,"USD");
        let product = new Product("Apple pencil",price);
        let applePencilItem = new Item(product, 2);

        cart1.add(applePencilItem);

        expect(cart1.getProducts()[0].getPrice()).toEqual(price)
    });
});

